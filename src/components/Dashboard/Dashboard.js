import React, { useEffect, useState } from "react";
import "./Dashboard.css";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Import Redux Actions
import * as GroupActions from "../../actions/groupActions.js";
import * as HabitActions from "../../actions/habitActions.js";

// Import Components
import CreateHabit from "../../components/CreateHabit";
import GroupContainer from "../../components/GroupContainer";
import Header from "../../components/Header";
import UserSideProfile from "../../components/UserSideProfile";

// Import Material UI Components
import CircularProgress from "@material-ui/core/CircularProgress";

const Dashboard = props => {
  const [groups, setGroups] = useState(props.groups);
  const [habits, setHabits] = useState(props.habits);
  const [groupsWithHabits, setGroupsWithHabits] = useState();

  // Fetch Habits and Groups from endpoint
  const collectionsURL = "http://localhost:8000/collections/";
  const habitsURL = "http://localhost:8000/habits/";

  const fetchGroups = async () => {
    let response = await fetch(collectionsURL);
    let data = await response.json();
    setGroups(data);
  };

  const fetchHabits = async () => {
    let response = await fetch(habitsURL);
    let data = await response.json();
    setHabits(data);
  };

  const populateGroupWithHabitObjects = () => {
    console.log("hey");
    console.log(groups);
    groups.forEach(group => {
      console.log("current group: ", group.name);
      //props.groupActions.getAllHabitsInGroupAPI(group.habitIds, group._id);
    });
  };

  useEffect(() => {
    // fetchGroups();
    // fetchHabits();
    props.groupActions.getExistingGroupsAPI(setGroups);
    props.habitActions.getExistingHabitsAPI(setHabits);
    // populateGroupWithHabitObjects(groups);
  }, []);

  // setGroups(props.existingGroups);
  // setHabits(props.habits);

  console.log("props groups: ", props.groups);
  console.log("props habits: ", props.habits);

  console.log("state groups: ", groups);
  console.log("state habits: ", habits);

  // if (groups.length > 0) {
  //   populateGroupWithHabitObjects();
  // }
  const { groupActions, habitActions } = props;

  return (
    <div>
      {groups.length === 0 && habits.length === 0 && (
        <div>
          <CircularProgress />
        </div>
      )}

      {(groups.length !== 0 || habits.length !== 0) && (
        <div>
          <Header />
          <div className="dashboard-container">
            <div className="dashboard-profile">
              <UserSideProfile />
            </div>

            <div className="dashboard-content">
              <CreateHabit
                existingGroups={groups}
                createNewHabitAPI={habitActions.createNewHabitAPI}
                createNewGroupAPI={groupActions.createNewGroupAPI}
              />
              <GroupContainer
                existingGroups={groups}
                deleteHabitAPI={habitActions.deleteHabitAPI}
                deleteHabitFromGroup={groupActions.deleteHabitFromGroupAPI}
                getAllHabitsInGroup={groupActions.getAllHabitsInGroupAPI}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    groups: state.groups,
    habits: state.habits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    groupActions: bindActionCreators(GroupActions, dispatch),
    habitActions: bindActionCreators(HabitActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
