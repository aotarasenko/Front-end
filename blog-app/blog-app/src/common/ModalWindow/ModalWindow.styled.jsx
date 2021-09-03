import styled from "styled-components";
import { AppColors } from "../../styles/variables";

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.5);

  form{
    position: relative;
    left: 50%;
    top: 50%;
    display: flex;
    max-width: 600px;
    width: 100%;
    background-color: ${AppColors.white};
    border-radius: 5px;
    transform: translate(-50%, -50%);

    button {
      position: absolute;
      right: 0;
      top: 0;
      color: ${AppColors.neutral};
    }

    fieldset {
      display: flex;
      flex-direction: column;
      width: 100%;
      border: none;
      * {
        margin: 5px 0;
        border-radius: 4px;
      }

      label {
        display: flex;
        flex-direction: column;
      }

      input {
        height: 40px;
        border: 0.5px solid ${AppColors.neutral};

        &:focus {
          border-color: ${AppColors.light};
        }
      }

      input[type="submit"] {
        border: none;
        background-color: ${AppColors.primary};
        color: ${AppColors.white};
        text-transform: uppercase;
      }
    }
  }
`;