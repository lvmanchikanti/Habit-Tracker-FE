import React from "react";
import Button from "@material-ui/core/Button";

const GroupContainer = ({
  existingGroups,
  deleteHabitAPI,
  deleteHabitFromGroup
}) => {
  return (
    <div>
      {existingGroups.map(group => {
        return (
          <div className="group-container">
            <h1>{group.name}</h1>
            <h4>habit ids</h4>
            {group.habitIds.map(habitId => {
              return (
                <div>
                  <p>{habitId}</p>
                  <Button
                    onClick={() => {
                      deleteHabitAPI(habitId);
                      deleteHabitFromGroup(habitId, group._id);
                    }}
                  >
                    Delete Habit
                  </Button>
                </div>
              );
            })}

            <h4>user ids</h4>
            {group.userIds.map(userId => {
              return <p>{userId}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GroupContainer;
