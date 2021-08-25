import { useContext, useState } from "react";
import styled from "styled-components";
import { AppColors } from "../../styles/variables";
import { ModalContext } from "../AddPostButton";
import axios from "axios";

export const AddPostWindow = () => {
  const { isActive, handleActive } = useContext(ModalContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const createArticle = async (e) => {
    e.preventDefault();
    const baseURL = "https://conduit.productionready.io/api/articles";

    let token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : "";

    await axios.post(
      baseURL,
      {
        article: {
          title: title,
          description: description,
          body: body,
          tagList: tags.split(","),
        },
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    handleActive(!isActive);
  };

  return (
    <>
      {isActive ? (
        <ModalWrapper>
          <ModalForm>
            <button onClick={handleActive}>x</button>
            <fieldset>
              <legend>Add New Article </legend>
              <label>
                {" "}
                Title
                <input
                  type="text"
                  placeholder={`Article Title ${isActive}`}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                {" "}
                Description
                <input
                  type="text"
                  placeholder="Article Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <label>
                {" "}
                Body
                <input
                  type="text"
                  placeholder="Article Body"
                  onChange={(e) => setBody(e.target.value)}
                />
              </label>
              <label>
                {" "}
                Tags
                <input
                  type="text"
                  placeholder="Tags"
                  onChange={(e) => setTags(e.target.value)}
                />
              </label>
              <input
                type="button"
                value="Create Article"
                onClick={createArticle}
              />
            </fieldset>
          </ModalForm>
        </ModalWrapper>
      ) : (
        ""
      )}
    </>
  );
};

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.5);
`;

export const ModalForm = styled.form`
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
`;
