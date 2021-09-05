import axios from "axios";

const LIMIT_ARTICLES = 10;

export const initGetArticlesApi = (baseUrl) => () => {
  return axios.get(`${baseUrl}/api/articles?limit=${LIMIT_ARTICLES}`);
};

// export const initGetArticlesApi = (baseUrl) => () => {
//   return axios.get(`${baseUrl}/api/activity`);
// };

export const initGetArticleApi = (baseUrl) => (slug) =>
  axios.get(`${baseUrl}/api/articles/${slug}`);

export const initUpdateArticleApi = (axios) => (slug, article) =>
  axios.put(`/api/articles/${slug}`, article);

export const initPostNewArticleApi = (axios) => (article) =>
  axios.post(`/api/articles`, article);
