import { useEffect, useState } from "react";
import { useApi } from "./useApi";
import { useDataFetch } from "./useDataFetch";

export const useHome = () => {
  const { getArticlesApi } = useApi();
  const [articles, setArticles] = useState([]);

  const [, fetchArticles] = useDataFetch({
    fetchHandler: async () => {
      const res = await getArticlesApi();

      setArticles(res.data.articles);

      return res;
    },
    isLazy: true,
    initialData: [],
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    articles,
    setArticles,
  };
};
