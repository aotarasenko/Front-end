import { useHistory } from "react-router-dom";
import { useAuthState } from "../../api/auth/authenticate";
import { FlexColumn, FlexRow } from "../../styles/generalStyles";
import { AppColors, AppIcons } from "../../styles/variables";
import { Avatar } from "../Avatar";
import axios from "axios";
import { ROOT_URL } from "../../api/auth/actions";
import { AppButton } from "../AppButton/AppButton";
import { useState } from "react";
import EditArticleWindow from "../ModalWindow/EditArticleWindow";
import { PostStyled } from "./Post.styled";

export const Post = (post) => {
  const user = useAuthState();
  const history = useHistory();
  const [article, setArticle] = useState(post);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => setModalOpen(!isModalOpen);

  const deleteArticle = async () => {
    const res = await axios.delete(`${ROOT_URL}/articles/${article.slug}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    setArticle(res.data.article);
  };

  const favoriteArticle = async () => {
    const res = await axios.post(
      `${ROOT_URL}/articles/${article.slug}/favorite`,
      {},
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
    setArticle(res.data.article);
  };

  const unfavoriteArticle = async () => {
    const res = await axios.delete(
      `${ROOT_URL}/articles/${article.slug}/favorite`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
    setArticle(res.data.article);
  };

  return (
    <>
      {article ? (
        <PostStyled>
          <EditArticleWindow
            initialValues={article}
            isModalOpen={isModalOpen}
            setModalOpen={handleCloseModal}
            onSubmit={setArticle}
          />
          <div className="post-heading">
            <Avatar imgUrl={article.author.image} />
            <FlexColumn flexSpacing="flex-start">
              <button
                type="link"
                onClick={() => {
                  history.push({
                    pathname: `/profiles/${article.author.username}`,
                    search: `author=${article.author.username}`,
                    state: {
                      author: article.author.username,
                      currentUser:
                        article.author.username === user.user.username
                          ? true
                          : false,
                    },
                  });
                }}
              >
                {article.author.username}
              </button>
              <p>{article.createdAt}</p>
            </FlexColumn>
            <FlexRow flexSpacing="flex-end">
              <AppButton
                color={AppColors.light}
                content={AppIcons.like}
                handle={article.favorited ? unfavoriteArticle : favoriteArticle}
                isFavorited={article.favorited}
                likesCount={article.favoritesCount}
              />
            </FlexRow>
          </div>
          <div className="post-content">
            <button
              type="link"
              onClick={() => {
                history.push({
                  pathname: `/articles/${article.slug}`,
                  state: {
                    author: article.author.username,
                    currentUser:
                      article.author.username === user.user.username
                        ? true
                        : false,
                  },
                });
              }}
            >
              {article.title}
            </button>
            <p className="post-body">{article.body}</p>
          </div>
          <hr />
          <FlexRow flexSpacing="space-between">
            <p className="post-description">{article.description}</p>
            <div className="post-tags">
              {article.tagList.map((tag) => {
                return <span key={article.author + tag}>{"#" + tag}</span>;
              })}
            </div>
          </FlexRow>
          <FlexRow>
            {article.author.username === user.user.username ? (
              <FlexRow flexSpacing="flex-end">
                <AppButton
                  color={AppColors.error}
                  content={AppIcons.close}
                  handle={deleteArticle}
                />
                <AppButton
                  color={AppColors.primary}
                  content={AppIcons.edit}
                  handle={setModalOpen}
                />
              </FlexRow>
            ) : null}
          </FlexRow>
        </PostStyled>
      ) : (
        ""
      )}
    </>
  );
};
