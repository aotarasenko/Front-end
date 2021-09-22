import { useEffect, useState } from 'react';
import { useApi } from './useApi';
import { useDataFetch } from './useDataFetch';

export const useProfile = (username) => {
  const { getProfileApi } = useApi();
  const [profile, setProfile] = useState({});

  const [, fetchProfile] = useDataFetch({
    fetchHandler: async () => {
      const res = await getProfileApi(username);
      setProfile(res.data.profile);
      return res;
    },
    isLazy: true,
    initialData: [],
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
  };
};
