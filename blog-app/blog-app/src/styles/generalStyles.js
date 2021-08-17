import styled from "styled-components";
import { AppSizes } from "./variables";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.flexSpacing || "space-between"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  width: 100%;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.flexSpacing || "space-between"};
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${AppSizes.laptop};
`;
