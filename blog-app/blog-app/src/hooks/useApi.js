import axios from "axios";
import {
  initGetArticleApi,
  initGetArticlesApi,
  initUpdateArticleApi,
  initPostNewArticleApi,
} from "../api/articles/articles";

export const useApi = () => {
  const baseURL = "https://conduit.productionready.io";

  let token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "";

  const authInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return {
    getArticlesApi: initGetArticlesApi(baseURL),
    getArticleApi: initGetArticleApi(baseURL),
    updateArticleApi: initUpdateArticleApi(authInstance),
    createNewArticleApi: initPostNewArticleApi(authInstance),
  };
};
