import { useEffect, useState } from 'react';
import { useApi } from './useApi';
import { useDataFetch } from './useDataFetch';

export const useArticles = () => {
  const { getArticlesApi } = useApi();
  const [articles, setArticles] = useState([]);

  const [, fetchArticles] = useDataFetch({
    fetchHandler: async () => {
      const res = await getArticlesApi(`?limit=5`);
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
  };
};
