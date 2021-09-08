import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Post } from "../components/Post/Post";
import { useApi } from "../hooks/useApi";
import { Container } from "../styles/generalStyles";

export const Feeds = () => {
  const { getFeeds } = useApi();

  const [feeds, setFeeds] = useState([]);

  const handeGetFeeds = async () => {
    const res = await getFeeds();
    console.log(res);
    setFeeds(res.data.articles);
  };

  useEffect(() => {
    handeGetFeeds();
  }, []);

  return (
    <Container>
      <section>
        {feeds.map((article, index) => (
          <Post key={index + article.title} {...article} />
        ))}
      </section>
    </Container>
  );
};
