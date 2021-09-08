import styled from "styled-components";
import { AppColors } from "../../styles/variables";

export const PaginationWrapper = styled.div`
  display: flex;

  button{
    width: 20px;
    height: 20px;
    border: 0.5 px solid ${AppColors.primary};
    background-color: ${({selected}) => selected? AppColors.primary : 'transparent'};

    &:hover {
      background-color: ${AppColors.primary};
    }
  }
`