import React, { useEffect } from "react";
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
  const { groupActions, habitActions, groups, habits } = props;

  useEffect(() => {
    groupActions.getExistingGroupsAPI();
    habitActions.getExistingHabitsAPI();
  }, []);

  console.log("props groups: ", props.groups);
  console.log("props habits: ", props.habits);

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
                existingGroups={groups.currentGroups}
                createNewHabitAPI={habitActions.createNewHabitAPI}
                createNewGroupAPI={groupActions.createNewGroupAPI}
              />
              <GroupContainer
                existingGroups={groups.currentGroups}
                deleteHabitAPI={habitActions.deleteHabitAPI}
                deleteHabitFromGroup={groupActions.deleteHabitFromGroupAPI}
                deleteGroup={groupActions.deleteGroupAPI}
                getAllHabitsInGroup={groupActions.getAllHabitsInGroupAPI}
                deleteAllHabitsFromGroup={habitActions.deleteAllHabitsFromGroup}
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
