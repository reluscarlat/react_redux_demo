import React from "react";
import { fetchUsers } from "../redux/user/UserActions";
import { connect } from "react-redux";

function UserContainer(props) {
  return (
    <div>
      <h2>Users</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
