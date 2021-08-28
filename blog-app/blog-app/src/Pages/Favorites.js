import axios from "axios";
import { useEffect, useState } from "react";
import { ROOT_URL } from "../api/auth/actions";
import { useAuthState } from "../api/auth/authenticate";
import { Post } from "../common/Post/Post";
import { Container } from "../styles/generalStyles";

export const Favorites = () => {
  const user = useAuthState();

  const [articles, setArticles] = useState([]);

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
