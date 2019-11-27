import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router'

//This page handles fetching users from DB, button for sign up w/ modal, button for login w/ modal

//Import Actions
import * as UserActions from "../../actions/userActions.js";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//Import Components
import CreateUser from "../../components/CreateUser";
import LoginUser from "../LoginUser/LoginUser.js";
 
const Landing = props => {
    const [users, setUsers] = useState(props.users);

    //Users url
    const usersURL = "http://localhost:8000/users/";

    //Retrieves user from DB
    const fetchUsers = async () => {
        let response = await fetch(usersURL);
        let data = await response.json();
        setUsers(data);
    };

    //Keeps fetching for new users
    useEffect(() => {
        fetchUsers();
    }, [props.existingUsers]);

    console.log(users)

    //Define props
    const { userActions } = props;

    return (
        <div>
            <h1>Landing Page</h1>
            <CreateUser
                createNewUserAPI={userActions.createNewUserAPI}
            />
            <LoginUser
                loginUserAPI={userActions.loginUserAPI}
                history={props.history}
            />
            <h2>Users</h2>
            {users && users.map(user => {
                return (
                  <div key={user._id}>
                    <h3>{user.name}</h3>
                  </div>
                );
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
      existingUsers: state.users
    };
  };
  
const mapDispatchToProps = dispatch => {
return {
    userActions: bindActionCreators(UserActions, dispatch),
};
};
  
export default withRouter(connect(
mapStateToProps,
mapDispatchToProps
)(Landing));