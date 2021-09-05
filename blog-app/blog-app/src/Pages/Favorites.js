import axios from "axios";
import { useEffect, useState } from "react";
import { ROOT_URL } from "../api/auth/actions";
import { useAuthState } from "../api/auth/authenticate";
import { Post } from "../components/Post/Post";
import { Container } from "../styles/generalStyles";
import { useHistory } from "react-router";

export const Favorites = () => {
  const user = useAuthState();

  const [articles, setArticles] = useState([]);

  const history = useHistory();
  if (user.isAuth === false) {
    history.push("/auth/login");
  }

  useEffect(() => {
    axios
      .get(`${ROOT_URL}/articles?favorited=${user.user.username}`)
      .then((res) => setArticles(res.data.articles));
  }, []);

  return (
    <Container>
      <section className="favorited">
        {articles.map((article, index) => (
          <Post key={index + article.title} {...article} />
        ))}
      </section>
    </Container>
  );
};
