import styled from "styled-components";
import { AppColors } from "../styles/variables";

export const Avatar = ({ imgUrl }) => {
  return <AvatarStyled src={imgUrl} alt={imgUrl} />;
};

const AvatarStyled = styled.img`
  display: flex;
  align-self: flex-start;
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  color: ${AppColors.white};
  font-weight: bold;
`;
