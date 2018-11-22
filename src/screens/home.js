import React from "react";
import { fetchUsers } from "../functions/functions";
import Spinner from "../components/Spinner";
import User from "../components/User";
import Modal from "../components/Modal";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
  }

  componentDidMount() {
    fetchUsers().then(users =>
      this.setState({
        users: users.results
      })
    );
  }

  render() {
    const { users } = this.state;
    const { modal } = this.props;

    if (users) {
      return (
        <div>
          <h1>Boldare</h1>
          {modal && <Modal {...this.props} users={users} />}
          <div className="list-users">
            {users.map((user, i) => (
              <User key={i} {...user} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Boldare</h1>
          <Spinner />
        </div>
      );
    }
  }
}

export default Index;
