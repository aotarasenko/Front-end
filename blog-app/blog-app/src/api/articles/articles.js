import axios from "axios";

// get
////articles
export const initGetArticlesApi =
  (baseUrl) =>
  (additionalParam = "") =>
    axios.get(`${baseUrl}/articles/${additionalParam}`);

export const initGetFeedsApi = (axios, baseUrl) => () =>
  axios.get(`${baseUrl}/articles/feed`);

export const initGetArticleApi = (baseUrl) => (slug) =>
  axios.get(`${baseUrl}/articles/${slug}`);

export const initGetUserApi = (axios, baseUrl) => () =>
  axios.get(`${baseUrl}/user`);

export const initGetProfileApi = (baseUrl) => (username) =>
  axios.get(`${baseUrl}/profiles/${username}`);

export const initGetCommentsApi = (axios, baseUrl) => (slug) =>
  axios.get(`${baseUrl}/articles/${slug}/comments`);

export const initGetTagsApi = (baseUrl) => () => axios.get(`${baseUrl}/tags`);
//post
export const initPostNewArticleApi = (axios, baseUrl) => (article) =>
  axios.post(`${baseUrl}/articles`, article);
export const initPostNewCommentleApi = (axios, baseUrl) => (comment, slug) =>
  axios.post(`${baseUrl}/articles/${slug}/comments`, comment);

export const initPostNewUserApi = (baseUrl) => (body) =>
  axios.post(`${baseUrl}/users/`, body);

export const initPostSubscriptionApi = (axios, baseUrl) => (username) =>
  axios.post(`${baseUrl}/profiles/${username}/follow`);

export const initPostFollowApi = (axios, baseUrl) => (slug) =>
  axios.post(`${baseUrl}/articles/${slug}/favorite`);
//put
export const initUpdateArticleApi = (axios, baseUrl) => (slug, article) =>
  axios.put(`${baseUrl}/articles/${slug}`, article);
export const initUpdateProfileApi = (axios, baseUrl) => (body) =>
  axios.put(`${baseUrl}/user`, body);
//delete
export const initDeleteSubscriptionApi = (axios, baseUrl) => (username) =>
  axios.delete(`${baseUrl}/profiles/${username}/follow`);
export const initDeleteArticleApi = (axios, baseUrl) => (slug) =>
  axios.delete(`${baseUrl}/articles/${slug}`);
export const initDeleteCommentApi = (axios, baseUrl) => (slug, commentID) =>
  axios.delete(`${baseUrl}/articles/${slug}/comments/${commentID}`);
export const initDeleteFollowApi = (axios, baseUrl) => (slug) =>
  axios.delete(`${baseUrl}/articles/${slug}/favorite`);
