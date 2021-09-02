import { NavLink, Route, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "../../api/auth/authenticate";
import { FlexColumn, FlexRow } from "../../styles/generalStyles";
import { AppColors, AppFontSizes } from "../../styles/variables";
import { Avatar } from "../Avatar";
import { LikeButton } from "../LikeButton";
import { useState } from "react";
import axios from "axios";
import { ROOT_URL } from "../../api/auth/actions";
import { PostView } from "../../components/Layout/PostView/PostView";
import { DeleteButton } from "../DeleteButton";
import { Profile } from "../../Pages/Profile";

export const Post = (state) => {
  const user = useAuthState();
  const [post, setPost] = useState(state);
  const history = useHistory();

  const updatePost = async () => {
    const res = await axios.get(`${ROOT_URL}/articles/${post.slug}`);
    setPost(res.data.article);
  };

  return (
    <PostStyled>
      <div className="post-heading">
        <Avatar imgUrl={post.author.image} />
        <FlexColumn flexSpacing="flex-start">
          <button
            type="link"
            onClick={() => {
              history.push({
                pathname: `/profiles/${post.author.username}`,
                search: `author=${post.author.username}`,
                state: {
                  author: post.author.username,
                  currentUser:
                    post.author.username === user.user.username ? true : false,
                },
              });
            }}
          >
            {state.author.username}
          </button>
          <p>{state.createdAt}</p>
        </FlexColumn>
        <FlexRow flexSpacing="flex-end">
          <LikeButton
            state={state.favorited}
            postSlug={state.slug}
            isDisable={user.isAuth ? false : true}
            update={updatePost}
          />
          <p>{post.favoritesCount}</p>
        </FlexRow>
      </div>
      <div className="post-content">
        <button
          type="link"
          onClick={() => {
            history.push({
              pathname: `/articles/${post.slug}`,
              state: {
                author: post.author.username,
                currentUser:
                  post.author.username === user.user.username ? true : false,
              },
            });
          }}
        >
          {state.title}
        </button>
        <p className="post-body">{post.body}</p>
      </div>
      <hr />
      <FlexRow flexSpacing="space-between">
        <p className="post-description">{post.description}</p>
        <div className="post-tags">
          {post.tagList.map((tag) => {
            return <span key={post.author + tag}>{"#" + tag}</span>;
          })}
        </div>
      </FlexRow>
      <FlexRow>
        <button>
          Read More...
          <Route path="/post-view" component={PostView} />
        </button>
        {state.author.username === user.user.username ? <DeleteButton /> : null}
      </FlexRow>
    </PostStyled>
  );
};

const PostStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 12px;
  border-top: 5px solid ${AppColors.neutral};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  .post-content {
    margin-top: 20px;
    border-top: 1px solid ${AppColors.neutral};
  }

  .post-title {
    color: ${AppColors.light};
  }

  .post-body {
    min-height: 80px;
    border: 2px solid ${AppColors.primary};
  }

  .post-description,
  .post-tags {
    display: flex;
    flex-wrap: wrap;
    color: ${AppColors.neutral};
    font-style: italic;
  }

  div.post-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      font-size: ${AppFontSizes.small};
    }
    .author-name {
      font-weight: bold;
      color: ${AppColors.light};
    }
  }
`;
