import styled from "styled-components";
import { AppSizes } from "../../styles/variables";

export const Main = () => {
  return <ContentWrapper className="content-wrapper" />;
};

const ContentWrapper = styled.main`
  margin: 0 auto;
  max-width: ${AppSizes.desktop};
`;
