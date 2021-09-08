import { Container } from "../styles/generalStyles";
import { Post } from "../components/Post/Post";
import { useArticles } from "../hooks/useArticles";

export const Home = () => {
  const { articles, articlesCount } = useArticles();
  return (
    <main>
      <Container>
        <section>
          {articles.map((article, index) => (
            <Post key={index} {...article} />
          ))}
        </section>
        {/* <Pagination pages={pages} /> */}
      </Container>
    </main>
  );
};
