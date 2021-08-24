import { useHistory } from "react-router-dom";
import { useAuthState } from "../api/auth/authenticate";
import { Avatar } from "../common/Avatar";
import { Container, FlexColumn, FlexRow } from "../styles/generalStyles";

export const Profile = () => {
  const user = useAuthState();
  const history = useHistory();

  if (user.isAuth === false) {
    history.push("/auth/login");
  }

  return (
    <Container>
      <section className="user-info">
        <FlexRow>
          <Avatar imgUrl={user.user.image} />
          <FlexColumn>
            <p>{user.user.username}</p>
            <p>{user.user.email}</p>
            <p>{user.user.createdAt}</p>
          </FlexColumn>
        </FlexRow>
        <p>{user.user.bio}</p>
      </section>
    </Container>
  );
};
