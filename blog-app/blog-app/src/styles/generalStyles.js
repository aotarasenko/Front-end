import styled from "styled-components";
import { AppSizes } from "./variables";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${(props) => props.flexAlign || "center"};
  justify-content: ${(props) => props.flexSpacing || "space-between"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  width: 100%;

  @media screen and (min-width: ${AppSizes.tablet}) {
    flex-direction: row;
    max-width: ${(props) => props.maxWidth || "none"};
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.flexSpacing || "space-between"};
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 12px 6px;
  width: 100%;
  max-width: ${AppSizes.desktop};
`;

export const SectionInner = styled.section`
  width: 100%;
  max-width: ${AppSizes.laptop};
`;
