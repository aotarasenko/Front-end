import { useContext, useState } from "react";
import { ModalContext } from "../CallModalButton";
import axios from "axios";
import { ModalWrapper, ModalForm } from "./ModalWindow.styled";

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
          tagList: tags.split(", "),
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
                  placeholder={`Article Title`}
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
