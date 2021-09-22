import { Container, FlexRow, SectionInner } from '../styles/generalStyles';
import { Post } from '../components/Post/Post';
import { useArticles } from '../hooks/useArticles';
import { AppButton } from '../components/AppButton/AppButton';
import { useTags } from '../hooks/useTags';

export const Home = () => {
  const { articles } = useArticles();
  const { tags } = useTags();

  return (
    <main>
      <Container>
        <FlexRow
          flexSpacing="space-around"
          flexAlign="flex-start"
          direction="column-reverse"
        >
          <SectionInner>
            {articles ? (
              articles.map((article, index) => (
                <Post key={index} {...article} />
              ))
            ) : (
              <div>No articles avalaible yet...</div>
            )}
          </SectionInner>
          <FlexRow flexWrap="wrap" maxWidth="200px" flexSpacing="flex-start">
            {tags ? (
              tags.map((tag, index) => (
                <AppButton key={index + tag} content={tag} margin="5px" />
              ))
            ) : (
              <div>Not tags avalaible yet...</div>
            )}
          </FlexRow>
        </FlexRow>
      </Container>
    </main>
  );
};
