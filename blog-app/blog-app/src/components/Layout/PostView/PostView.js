import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ROOT_URL } from "../../../api/auth/actions";
import { Post } from "../../../common/Post/Post";
import { Container } from "../../../styles/generalStyles";
import { CommentBlock } from "../../CommentBlock/CommentBlock";

export const PostView = () => {
  const history = useHistory();

  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);

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

  return (
    <Container>
      <section>{article ? <Post {...article} /> : ""}</section>
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
