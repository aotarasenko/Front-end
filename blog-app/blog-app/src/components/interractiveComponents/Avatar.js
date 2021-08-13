import styled from "styled-components";

export const Avatar = ({ imgUrl }) => {
  return <AvatarStyled src={imgUrl} alt="avatar" />;
};

const AvatarStyled = styled.img`
  display: flex;
  align-self: flex-start;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
