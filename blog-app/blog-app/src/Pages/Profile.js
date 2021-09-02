import { useHistory } from "react-router-dom";
import { useAuthState } from "../api/auth/authenticate";
import { Container, FlexColumn, FlexRow } from "../styles/generalStyles";
import { Post } from "../common/Post/Post";
import axios from "axios";
import { ROOT_URL } from "../api/auth/actions";
import { createContext, useEffect, useState } from "react";
import { CallModalButton } from "../common/CallModalButton";
import { EditProfileWindow } from "../common/ModalWindow/EditProfileWindow";
import { AppIcons } from "../styles/variables";

export const EditContext = createContext();

export const Profile = () => {
  // const currentUser = useAuthState();
  const history = useHistory();

  // if (user.isAuth === false) {
  //   history.push("/auth/login");
  // }

  let [articles, setArticles] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getProfileData = async () => {
      const articleData = await axios.get(
        `${ROOT_URL}/articles${history.location.search}`
      );

      const userData = await axios.get(
        `${ROOT_URL}${history.location.pathname}${history.location.search}`
      );
      setUser(userData.data.profile);
      setArticles(articleData.data.articles);
    };

    getProfileData();
  }, []);

  // const deletePost = async (slug) => {
  //   await axios.delete(`${ROOT_URL}/articles/${slug}`, {
  //     headers: {
  //       Authorization: `Token ${localStorage.getItem("token")}`,
  //     },
  //   });
  //   // articles = articles.filter((item) => item.slug !== slug);
  // };

  return (
    <Container>
      <section className="user-info">
        <FlexRow>
          <img src={user.image} alt="Avatar" />
          <FlexColumn>
            <p>{user.username}</p>
            <p>{user.createdAt}</p>
            <p>{user.bio}</p>
            {history.location.state.currentUser ? (
              <CallModalButton
                children={<EditProfileWindow />}
                icon={AppIcons.edit}
              />
            ) : null}
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
