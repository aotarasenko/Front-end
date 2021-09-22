import { useEffect, useState } from 'react';
import { useApi } from './useApi';
import { useDataFetch } from './useDataFetch';

export const useTags = () => {
  const { getTagsApi } = useApi();
  const [tags, setTags] = useState([]);

  const [, fetchTags] = useDataFetch({
    fetchHandler: async () => {
      const res = await getTagsApi();
      setTags(res.data.tags);
      return res;
    },
    isLazy: true,
    initialData: [],
  });

  useEffect(() => {
    fetchTags();
  }, []);

  return {
    tags,
  };
};
