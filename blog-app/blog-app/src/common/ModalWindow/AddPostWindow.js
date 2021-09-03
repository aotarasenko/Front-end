import { useContext, useState } from "react";
import axios from "axios";
import { ModalWrapper, ModalForm } from "./ModalWindow.styled";
import {
  Formik,
  Form,
  Field,
  withFormik,
  FastField,
  useFormik,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import { values } from "lodash";

export const AddPostWindow = ({ isModalOpen, handleCloseModal }) => {
  const initialValues = {
    title: "test",
    body: "test",
    description: "test",
    tags: ["test1", "test2"],
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const baseURL = "https://conduit.productionready.io/api/articles";

      let token = localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : "";

      await axios.post(
        baseURL,
        {
          article: values,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      handleCloseModal();
    },
    validate: (values) => {},
  });

  return (
    <>
      {isModalOpen ? (
        <ModalWrapper>
          <ModalForm onSubmit={formik.handleSubmit}>
            <button onClick={handleCloseModal}>x</button>
            <fieldset>
              <legend>Add New Article </legend>
              <label>
                {" "}
                Title
                <input
                  name="title"
                  type="text"
                  placeholder="Article Title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </label>
              <label>
                {" "}
                Description
                <input
                  name="description"
                  type="text"
                  placeholder="Article Description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </label>
              <label>
                {" "}
                Body
                <input
                  name="body"
                  type="text"
                  placeholder="Article Body"
                  onChange={formik.handleChange}
                  value={formik.values.body}
                />
              </label>
              <label>
                {" "}
                Tags
                <input
                  name="tags"
                  placeholder="Tags"
                  onChange={formik.handleChange}
                  value={formik.values.tags}
                />
              </label>
              <input type="submit" value="Create Article" />
            </fieldset>
          </ModalForm>
        </ModalWrapper>
      ) : (
        ""
      )}
    </>
  );
};
