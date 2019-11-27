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

// Import Material UI Components
import CircularProgress from "@material-ui/core/CircularProgress";

const Dashboard = props => {
  const [groups, setGroups] = useState(props.groups);
  const [habits, setHabits] = useState(props.habits);

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

  /*
  prevents infintie loops by depending on props.existingGroups and habits (which are redux states)
  instead of the groups and habits. we're setting groups and habits when we make these calls, so groups
  and habits can't be in the dependency array
  reload the page when we add/delete/update a habit or group through redux.
  automatically fetch the new data
  TODO: do what you did a walmart. change the data in the front end and make the change in the backend,
  but don't call the backend after each change. only change the redux state so it renders faster. next 
  time you load the page it will do an API call and that will get the updated data from the database
  */
  useEffect(() => {
    // fetchGroups();
    // fetchHabits();
    props.groupActions.getExistingGroupsAPI(setGroups);
    props.habitActions.getExistingHabitsAPI(setHabits);
  }, []);

  // setGroups(props.existingGroups);
  // setHabits(props.habits);

  console.log("props groups: ", props.groups);
  console.log("props habits: ", props.habits);

  console.log("state groups: ", groups);
  console.log("state habits: ", habits);

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
          <header>
            <h1>Habit Tracker</h1>
          </header>
          <CreateHabit
            existingGroups={groups}
            createNewHabitAPI={habitActions.createNewHabitAPI}
            createNewGroupAPI={groupActions.createNewGroupAPI}
          />
          <h1>Habits Created</h1>
          {habits.map(habit => {
            return (
              <div key={habit._id}>
                <h3>{habit.habitName}</h3>
                <h3>{habit.habitGroup ? habit.habitGroup : ""}</h3>
              </div>
            );
          })}

          <GroupContainer
            existingGroups={groups}
            deleteHabit={habitActions.deleteHabitAPI}
            deleteHabitFromGroup={groupActions.deleteHabitFromGroupAPI}
            deleteGroup={groupActions.deleteGroupAPI}
            getAllHabitsInGroup={groupActions.getAllHabitsInGroupAPI}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
