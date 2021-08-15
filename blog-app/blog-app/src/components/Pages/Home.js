import { Container } from "../styles/generalStyles";
import { Post } from "../interractiveComponents/Post/Post";
import { useHome } from "../../hooks/useHome";

export const Home = () => {
  const { articles } = useHome();
  return (
    <main className="container">
      <Container>
        {articles.map((article, index) => (
          <Post key={index} {...article} />
        ))}
      </Container>
    </main>
  );
};
