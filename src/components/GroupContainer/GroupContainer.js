import React from "react";
import Button from "@material-ui/core/Button";

const GroupContainer = ({
  existingGroups,
  deleteHabit,
  deleteHabitFromGroup,
  getAllHabitsInGroup
}) => {
  return (
    <div>
      {existingGroups.map(group => {
        return (
          <div className="group-container" key={group._id}>
            <h1>{group.name}</h1>
            <button
              onClick={() => getAllHabitsInGroup(group.habitIds, group._id)}
            >
              show habits
            </button>
            <h4>habit ids</h4>
            {group.habitIds.map(habitId => {
              return (
                <div key={habitId}>
                  <p>{habitId}</p>
                  <Button
                    onClick={() => {
                      deleteHabit(habitId);
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
              return <p key={userId}>{userId}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GroupContainer;
