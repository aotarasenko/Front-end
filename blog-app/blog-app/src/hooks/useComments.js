import { useEffect, useState } from 'react';
import { useApi } from './useApi';
import { useDataFetch } from './useDataFetch';

export const useTags = () => {
  const { getCommentsApi } = useApi();
  const [comments, setComments] = useState([]);

  const [, fetchComments] = useDataFetch({
    fetchHandler: async () => {
      const res = await getCommentsApi();
      setComments(res.data.tags);
      return res;
    },
    isLazy: true,
    initialData: [],
  });

  useEffect(() => {
    fetchComments();
  }, []);

  return {
    comments,
  };
};
