import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ROOT_URL } from "../../../api/auth/actions";
import { Avatar } from "../../Avatar";
import { Post } from "../../Post/Post";
import { Container } from "../../../styles/generalStyles";
import { CommentBlock } from "../../CommentBlock/CommentBlock";
import { useAuthState } from "../../../api/auth/authenticate";

export const PostView = (props) => {
  const history = useHistory();
  const user = useAuthState();
  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);

  console.log(comments);

  const commentBody = useFormik({
    initialValues: {
      body: "",
    },
  });

  const getArticleComments = async () => {
    const commentsList = await axios.get(
      `${ROOT_URL}${history.location.pathname}/comments`
    );
    setComments(commentsList.data.comments);
  };

  const addComment = async (e) => {
    e.preventDefault();

    await axios.post(
      `${ROOT_URL}/articles/${article.slug}/comments`,
      {
        ...commentBody.values,
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
    getArticleComments();
  };

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(`${ROOT_URL}${history.location.pathname}`);
      setArticle(res.data.article);

      getArticleComments();
    };

    getArticle();
  }, []);

  return (
    <>
      {article ? (
        <Container>
          <section>
            {" "}
            <Post {...article} />{" "}
          </section>
          {user.isAuth ? (
            <section>
              <form onSubmit={addComment}>
                <fieldset>
                  <legend>Comments</legend>
                  <Avatar imgUrl={article.author.image} />
                  <input
                    type="text"
                    name="body"
                    onChange={commentBody.handleChange}
                    value={commentBody.values.body}
                    placeholder="Write some About Article"
                  />
                  <input type="submit" value="Create Comment" />
                </fieldset>
              </form>
              <section>
                {comments
                  ? comments.map((item, index) => (
                      <CommentBlock
                        {...item}
                        key={article.slug + item.id}
                        slug={article.slug}
                      />
                    ))
                  : ""}
              </section>
            </section>
          ) : (
            ""
          )}
        </Container>
      ) : (
        ""
      )}
    </>
  );
};
