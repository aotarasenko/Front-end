import axios from "axios";
import { Form, withFormik } from "formik";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ROOT_URL } from "../../../api/auth/actions";
import { Post } from "../../../common/Post/Post";
import { Container } from "../../../styles/generalStyles";
import { CommentBlock } from "../../CommentBlock/CommentBlock";

export const PostView = (props) => {
  const history = useHistory();

  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);

  const { values, errors, onSubmit, handleSubmit } = props;

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(`${ROOT_URL}${history.location.pathname}`);
      setArticle(res.data.article);

      const getArticleComments = async () => {
        const commentsList = await axios.get(
          `${ROOT_URL}${history.location.pathname}/comments`
        );
        setComments(commentsList.data.comments);
      };

      getArticleComments();
    };

    getArticle();
  }, []);

  const addComment = async () => {};

  const deleteComment = async () => {};

  return (
    <Container>
      <section>{article ? <Post {...article} /> : ""}</section>
      <section>
        <form></form>
      </section>
      <section>
        {comments
          ? comments.map((item, index) => (
              <CommentBlock {...item} key={item.id + index} />
            ))
          : ""}
      </section>
    </Container>
  );
};

export default withFormik({
  // mapPropsToValues: (),
})(PostView);
