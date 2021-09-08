import { useHistory } from "react-router-dom";
import { Container, FlexColumn, FlexRow } from "../styles/generalStyles";
import { Post } from "../components/Post/Post";
import { useEffect, useState } from "react";
import EditProfileWindow from "../components/ModalWindow/EditProfileWindow";
import { AppButton } from "../components/AppButton/AppButton";
import { AppIcons, AppColors } from "../styles/variables";
import { useApi } from "../hooks/useApi";

export const Profile = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  let [articles, setArticles] = useState([]);

  console.log(user);

  const {
    getProfileApi,
    createNewSubscriptionApi,
    deleteSubscriptionApi,
    getArticlesApi,
  } = useApi();

  const handleCloseModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const getProfileData = async () => {
      const userData = await getProfileApi(`${history.location.state.author}`);
      setUser(userData.data.profile);

      const articleData = await getArticlesApi(
        `?author=${history.location.state.author}`
      );
      setArticles(articleData.data.articles);
    };
    getProfileData();
  }, [history.location.state.author]);

  const followUser = async () => {
    const res = await createNewSubscriptionApi(user.username);
    setUser(res.data.profile);
  };

  const unfollowUser = async () => {
    const res = await deleteSubscriptionApi(user.username);
    setUser(res.data.profile);
  };

  return (
    <>
      {user ? (
        <Container>
          <EditProfileWindow
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            initialState={user}
            onSubmit={setUser}
          />
          <section className="user-info">
            <FlexRow>
              <img src={user.image} alt="Avatar" />
              <FlexColumn>
                <p>{user.username}</p>
                <p>{user.createdAt}</p>
                <p>{user.bio}</p>
                {history.location.state.currentUser ? (
                  <AppButton
                    content={AppIcons.edit}
                    color={AppColors.light}
                    handle={handleCloseModal}
                  />
                ) : (
                  <AppButton
                    content={AppIcons.subscription}
                    color={AppColors.light}
                    handle={user.following ? unfollowUser : followUser}
                    isFavorited={user.following}
                  />
                )}
              </FlexColumn>
            </FlexRow>
          </section>
          <section className="my-articles">
            {articles.map((article, index) => (
              <Post key={index + article.title} {...article} />
            ))}
          </section>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};
