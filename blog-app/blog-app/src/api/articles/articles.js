import axios from 'axios';

// get
////articles
export const initGetArticlesApi =
  (baseUrl) =>
  (additionalParam = '') =>
    axios
      .get(`${baseUrl}/articles/${additionalParam}`)
      .catch((e) => console.log('Error when gets articles'));

export const initGetFeedsApi = (axios, baseUrl) => () =>
  axios
    .get(`${baseUrl}/articles/feed`)
    .catch((e) => console.log('Error when gets feeds'));

export const initGetArticleApi = (baseUrl) => (slug) =>
  axios
    .get(`${baseUrl}/articles/${slug}`)
    .catch((e) => console.log('Error when gets single article'));

export const initGetUserApi = (axios, baseUrl) => () =>
  axios
    .get(`${baseUrl}/user`)
    .catch((e) => console.log('Error when gets user'));

export const initGetProfileApi = (baseUrl) => (username) =>
  axios
    .get(`${baseUrl}/profiles/${username}`)
    .catch((e) => console.log('Error when gets profile'));

export const initGetCommentsApi = (axios, baseUrl) => (slug) =>
  axios
    .get(`${baseUrl}/articles/${slug}/comments`)
    .catch((e) => console.log('Error when gets comments'));

export const initGetTagsApi = (baseUrl) => () =>
  axios
    .get(`${baseUrl}/tags`)
    .catch((e) => console.log('Error when gets tags'));
//post
export const initPostNewArticleApi = (axios, baseUrl) => (article) =>
  axios
    .post(`${baseUrl}/articles`, article)
    .catch((e) => console.log('Error when creating new article'));
export const initPostNewCommentleApi = (axios, baseUrl) => (comment, slug) =>
  axios
    .post(`${baseUrl}/articles/${slug}/comments`, comment)
    .catch((e) => console.log('Error when creating new comment'));

export const initPostNewUserApi = (baseUrl) => (body) =>
  axios
    .post(`${baseUrl}/users/`, body)
    .catch((e) => console.log('Error when creating new user'));

export const initPostSubscriptionApi = (axios, baseUrl) => (username) =>
  axios
    .post(`${baseUrl}/profiles/${username}/follow`)
    .catch((e) => console.log('Error when creating new subscription'));

export const initPostFollowApi = (axios, baseUrl) => (slug) =>
  axios
    .post(`${baseUrl}/articles/${slug}/favorite`)
    .catch((e) => console.log('Error when creating new follow'));
//put
export const initUpdateArticleApi = (axios, baseUrl) => (slug, article) =>
  axios
    .put(`${baseUrl}/articles/${slug}`, article)
    .catch((e) => console.log('Error when updating article'));
export const initUpdateProfileApi = (axios, baseUrl) => (body) =>
  axios
    .put(`${baseUrl}/user`, body)
    .catch((e) => console.log('Error when updating profile'));
//delete
export const initDeleteSubscriptionApi = (axios, baseUrl) => (username) =>
  axios
    .delete(`${baseUrl}/profiles/${username}/follow`)
    .catch((e) => console.log('Error when deleting subscription'));
export const initDeleteArticleApi = (axios, baseUrl) => (slug) =>
  axios
    .delete(`${baseUrl}/articles/${slug}`)
    .catch((e) => console.log('Error when deleting article'));
export const initDeleteCommentApi = (axios, baseUrl) => (slug, commentID) =>
  axios
    .delete(`${baseUrl}/articles/${slug}/comments/${commentID}`)
    .catch((e) => console.log('Error when deleting comment'));
export const initDeleteFollowApi = (axios, baseUrl) => (slug) =>
  axios
    .delete(`${baseUrl}/articles/${slug}/favorite`)
    .catch((e) => console.log('Error when deleting follow'));
