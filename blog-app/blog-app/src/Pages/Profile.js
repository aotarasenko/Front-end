import { useHistory } from "react-router-dom";
import { useAuthState } from "../api/auth/authenticate";
import { Avatar } from "../common/Avatar";
import { Container, FlexColumn, FlexRow } from "../styles/generalStyles";
import { Post } from "../common/Post/Post";
import axios from "axios";
import { ROOT_URL } from "../api/auth/actions";
import { useEffect, useState } from "react";

export const Profile = () => {
  const user = useAuthState();
  const history = useHistory();
  if (user.isAuth === false) {
    history.push("/auth/login");
  }

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${ROOT_URL}/articles?author=${user.user.username}`)
      .then((res) => setArticles(res.data.articles));
  }, []);

  return (
    <Container>
      <section className="user-info">
        <FlexRow>
          <Avatar imgUrl={user.user.image} />
          <FlexColumn>
            <p>{user.user.username}</p>
            <p>{user.user.email}</p>
            <p>{user.user.createdAt}</p>
            <p>{user.user.bio}</p>
          </FlexColumn>
        </FlexRow>
      </section>
      <section className="my-articles">
        {articles.map((article, index) => (
          <Post key={index + article.title} {...article} />
        ))}
      </section>
    </Container>
  );
};
