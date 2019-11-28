import React, { useState } from "react";
import { Progress } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

const IndividualHabit = ({ habitName, progress, deleteHabit }) => {
  const [progressCounter, setProgressCounter] = useState(progress);

  return (
    <div>
      <p className="progress-habit-name">{habitName}</p>

      <div className="progress-icons">
        <Progress className="progress-bar" value={progressCounter} />

        <IconButton onClick={() => setProgressCounter(progressCounter + 10)}>
          <CheckIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={deleteHabit}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default IndividualHabit;
