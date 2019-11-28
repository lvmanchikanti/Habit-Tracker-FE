import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import "./Landing.css";

//This page handles fetching users from DB, button for sign up w/ modal, button for login w/ modal

//Import Actions
import * as UserActions from "../../actions/userActions.js";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//Import Components
import CreateUser from "../../components/CreateUser";
import LoginUser from "../LoginUser/LoginUser.js";
const Landing = props => {
  const [users, setUsers] = useState(props.users);

  //Users url
  const usersURL = "http://localhost:8000/users/";

  //Retrieves user from DB
  const fetchUsers = async () => {
    let response = await fetch(usersURL);
    let data = await response.json();
    setUsers(data);
  };

  //Keeps fetching for new users
  useEffect(() => {
    fetchUsers();
  }, [props.existingUsers]);

  //Define props
  const { userActions } = props;

  return (
    <div className="landing-page">
      <div className="header">
        <h2 className="logo">habit tracker</h2>
      </div>
      <div className="title-container">
        <h1 className="title">
          Motivate yourself to <br></br>achieve your goals today
        </h1>
        <h3 className="subtitle">
          Create, track, and organize your habits alongside your friends!
        </h3>
        <div className="button1">
          <LoginUser
            loginUserAPI={userActions.loginUserAPI}
            history={props.history}
          />
        </div>
        <div className="button2">
          <CreateUser createNewUserAPI={userActions.createNewUserAPI} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    existingUsers: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(UserActions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Landing)
);
