import { ModalWrapper, ModalForm } from "./ModalWindow.styled";
import { useState, useContext } from "react";
import axios from "axios";
import { ROOT_URL } from "../../api/auth/actions";
import { ModalContext } from "../CallModalButton";
import { useAuthState } from "../../api/auth/authenticate";

export const EditProfileWindow = () => {
  const { isActive, handleActive } = useContext(ModalContext);
  const user = useAuthState();
  console.log(user);

  const [username, setName] = useState(user.user.username);
  const [bio, setBiography] = useState(user.user.bio);
  const [email, setEmail] = useState(user.user.email);
  const [image, setImage] = useState(user.user.image);
  const [password, setPassword] = useState("");

  const handleEdit = async (e) => {
    e.preventDefault();

    await axios.put(
      `${ROOT_URL}/user`,
      {
        image,
        username,
        bio,
        email,
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
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
              <legend>Edit your personal data</legend>
              <label>
                {" "}
                Avatar
                <input
                  type="text"
                  value={image || ""}
                  placeholder={`Paste image url here`}
                  onChange={(e) => setImage(e.target.value)}
                />
              </label>
              <label>
                {" "}
                Name
                <input
                  type="text"
                  value={username}
                  placeholder={`Set new name`}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                {" "}
                Biography
                <input
                  type="text"
                  value={bio}
                  placeholder="Update  your`s story"
                  onChange={(e) => setBiography(e.target.value)}
                />
              </label>
              <label>
                {" "}
                Email
                <input
                  type="text"
                  value={email}
                  placeholder="Actual email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                {" "}
                Confirm
                <input
                  type="text"
                  placeholder="Confirm password"
                  value=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <input type="button" value="Save changes" onClick={handleEdit} />
            </fieldset>
          </ModalForm>
        </ModalWrapper>
      ) : (
        ""
      )}
    </>
  );
};
