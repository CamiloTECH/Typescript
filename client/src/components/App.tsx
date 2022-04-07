import { User, fetchUser } from "../redux/actions";
import { connect } from "react-redux";
import { StoreState } from "../redux/reducer";
import { useEffect } from "react";

interface AppProps {
  users: User[];
  fetchUser: any;
}

function App(props: AppProps): JSX.Element {
  useEffect(() => {
    props.fetchUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <button onClick={props.fetchUser}>FETCH USERS!</button>
      {props.users.map((user: User) => (
        <div key={user.id}>
          {user.id}) {user.name}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
