import React, { useEffect, useState } from "react";

import * as UserActions from "../../actions/userActions.js";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
 
const Landing = props => {
    const [users, setUsers] = useState(props.users);

    const usersURL = "http://localhost:8000/users/";

    const fetchUsers = async () => {
        let response = await fetch(usersURL);
        let data = await response.json();
        setUsers(data);
    };


    useEffect(() => {
        fetchUsers();
    }, [props.existingUsers]);

    console.log(users)

    return (
        <div>
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
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Landing);