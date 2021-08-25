import { Container } from "../styles/generalStyles";
import { Post } from "../common/Post/Post";
import { useHome } from "../hooks/useHome";
import { useAuthState } from "../api/auth/authenticate";

export const Home = () => {
  const { articles } = useHome();
  const user = useAuthState();
  console.log(user);
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
