
import styled from "styled-components";

import { AppColors, AppFontSizes } from "../../styles/variables";

export const PostStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding: 12px 6px;
  border-top: 5px solid ${AppColors.neutral};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;

  .post-content {
    margin-top: 20px;
    border-top: 1px solid ${AppColors.neutral};
  }

  .post-title {
    color: ${AppColors.light};
  }

  .post-body {
    min-height: 80px;
    border: 2px solid ${AppColors.primary};
  }

  .post-description,
  .post-tags {
    display: flex;
    flex-wrap: wrap;
    color: ${AppColors.neutral};
    font-style: italic;
  }

  div.post-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      font-size: ${AppFontSizes.small};
    }
    .author-name {
      font-weight: bold;
      color: ${AppColors.light};
    }
  }
`;
