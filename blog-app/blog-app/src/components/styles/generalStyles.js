import styled from "styled-components";
import { AppColors } from "./variables";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.flexSpacing || "space-between"};
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.flexSpacing || "space-between"};
`;
