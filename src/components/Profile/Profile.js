import React, { useState } from "react";
import jwt_decode from 'jwt-decode'

//Import Actions
import * as UserActions from "../../actions/userActions.js";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Profile = props => {
    const [currentUser, setCurrentUser] = useState(props.currentUser);

    const componentDidMount = () => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setCurrentUser({
          name: decoded.name,
          username: decoded.username,
          email: decoded.email
        })
    }
    
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
};

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    };
  };

export default Profile;