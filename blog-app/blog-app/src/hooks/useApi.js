import axios from "axios";
import {
  initGetArticleApi,
  initGetArticlesApi,
  initUpdateArticleApi,
  initPostNewArticleApi,
} from "../api/articles/articles";

export const useApi = () => {
  const baseURL = "https://conduit.productionready.io";

  const authInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Token someToken`,
    },
  });

  return {
    getArticlesApi: initGetArticlesApi(baseURL),
    getArticleApi: initGetArticleApi(baseURL),
    updateArticleApi: initUpdateArticleApi(authInstance),
    createNewArticleApi: initPostNewArticleApi(authInstance),
  };
};
