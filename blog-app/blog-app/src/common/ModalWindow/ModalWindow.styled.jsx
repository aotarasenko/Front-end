import styled from "styled-components";

export const ModalForm = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  display: ${(state) => state ? 'flex' : 'none'};
  flex-direction: column;
  transform: translate(-50%, -50%);
  
`