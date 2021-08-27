import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "../../api/auth/authenticate";
import { FlexColumn, FlexRow } from "../../styles/generalStyles";
import { AppColors, AppFontSizes } from "../../styles/variables";
import { Avatar } from "../Avatar";
import { LikeButton } from "../LikeButton";
import { useState } from "react";
import axios from "axios";
import { ROOT_URL } from "../../api/auth/actions";

export const Post = (state) => {
  const { isAuth } = useAuthState();

  const [post, setPost] = useState(state);

  console.log(post);
  const updatePost = () => {
    axios
      .get(`${ROOT_URL}/articles/${post.slug}`)
      .then((res) => setPost(res.data.article));

    console.log(post);
  };

  return (
    <PostStyled>
      <div className="post-heading">
        <Avatar imgUrl={state.author.image} />
        <FlexColumn flexSpacing="flex-start">
          <p className="author-name">{state.author.username}</p>
          <p>{state.createdAt}</p>
        </FlexColumn>
        <FlexRow flexSpacing="flex-end">
          <LikeButton
            state={state.favorited}
            postSlug={state.slug}
            isDisable={isAuth ? false : true}
            update={updatePost}
          />
          <p>{post.favoritesCount}</p>
        </FlexRow>
      </div>
      <div className="post-content">
        <NavLink to="/post-view" className="post-title">
          {post.title}
        </NavLink>
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
