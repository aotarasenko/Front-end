import styled from "styled-components";
import { AppColors, AppFontSizes } from "../../styles/variables";

export const AuthForm = styled.form`
  padding: 10px;

  margin: 40px auto;
  max-width: 500px;
  box-sizing: border-box;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
  }

  input {
    position: relative;
    margin: 10px 0;
    padding: 12px;
    border: 2px solid ${AppColors.light};
    border-radius: 5px;
    box-sizing: border-box;
  }
  button {
    padding: 10px 0;
    border-color: transparent;
    border-radius: 5px;
    background-color: ${AppColors.primary};
    font-size: ${AppFontSizes.medium};
    color: ${AppColors.white};
    text-transform: uppercase;
    cursor: pointer;
  }
`;
