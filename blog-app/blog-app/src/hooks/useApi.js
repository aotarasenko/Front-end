import axios from 'axios';
import * as api from '../api/articles/articles';

export const ARTICLES_LIMIT = 5;

export const useApi = () => {
  const baseURL = 'https://conduit.productionready.io/api';

  let token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '';

  const authInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Token ${token}`,
      'Content-type': 'application/json',
    },
  });

  return {
    getArticlesApi: api.initGetArticlesApi(baseURL),
    getArticleApi: api.initGetArticleApi(baseURL),
    getCommentsApi: api.initGetCommentsApi(authInstance, baseURL),
    getProfileApi: api.initGetProfileApi(baseURL),
    getUserApi: api.initGetUserApi(authInstance, baseURL),
    getTagsApi: api.initGetTagsApi(baseURL),
    getFeeds: api.initGetFeedsApi(authInstance, baseURL),

    createNewUserApi: api.initPostNewUserApi(authInstance, baseURL),
    createNewCommentApi: api.initPostNewCommentleApi(authInstance, baseURL),
    createNewSubscriptionApi: api.initPostSubscriptionApi(
      authInstance,
      baseURL
    ),
    createNewArticleApi: api.initPostNewArticleApi(authInstance, baseURL),
    createNewFollowApi: api.initPostFollowApi(authInstance, baseURL),

    updateArticleApi: api.initUpdateArticleApi(authInstance, baseURL),
    updateProfileApi: api.initUpdateProfileApi(authInstance, baseURL),

    deleteArticleApi: api.initDeleteArticleApi(authInstance, baseURL),
    delereFollowApi: api.initDeleteFollowApi(authInstance, baseURL),
    deleteCommentApi: api.initDeleteCommentApi(authInstance, baseURL),
    deleteSubscriptionApi: api.initDeleteSubscriptionApi(authInstance, baseURL),
  };
};
