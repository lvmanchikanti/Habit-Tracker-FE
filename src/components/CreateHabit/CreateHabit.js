import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import CreateGroup from "../CreateGroup";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import ButtonUI from "@material-ui/core/Button";
import Select from "react-select";

const CreateHabit = ({ existingGroups, postNewHabit, postNewGroup }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [newHabit, setNewHabit] = useState({
    habitName: "",
    habitGroupName: "",
    habitGroupID: ""
  });

  const handleHabitChange = (event, name) => {
    //name change
    if (event.target) {
      setNewHabit({ ...newHabit, [event.target.name]: event.target.value });
    }
    //dropdown group change
    else {
      console.log(event);
      setNewHabit({ ...newHabit, [name]: event.value });
    }
  };
  return (
    <>
      <Button color="primary" type="button" onClick={() => setModalOpen(true)}>
        Create Habit
      </Button>
      <Modal
        className="modal-dialog-centered"
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Create A Habit
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setModalOpen(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="create-habit-modal-form">
            <FormControlLabel
              control={
                <Switch
                  checked={showCreateGroup}
                  onChange={() => setShowCreateGroup(!showCreateGroup)}
                  value="createNewGroup"
                />
              }
              label="Create New Group"
            />
            {!showCreateGroup && (
              <>
                <TextField
                  id="habitName"
                  label="Habit Name"
                  name="habitName"
                  value={newHabit.habitName}
                  onChange={event => handleHabitChange(event)}
                  margin="normal"
                  variant="outlined"
                />
                <Select
                  defaultValue={newHabit.habitGroupName}
                  onChange={event => handleHabitChange(event, "habitGroupID")}
                  name="habitGroupID"
                  options={existingGroups.map(group => ({
                    value: group._id,
                    label: group.name
                  }))}
                  placeholder="Choose Group"
                />
              </>
            )}
            {showCreateGroup && (
              <CreateGroup
                onClick={() => setShowCreateGroup(!showCreateGroup)}
                postNewGroup={postNewGroup}
              />
            )}
          </form>
        </div>
        <div className="modal-footer">
          <ButtonUI
            color="secondary"
            variant="outlined"
            data-dismiss="modal"
            type="button"
            onClick={() => setModalOpen(false)}
          >
            Close
          </ButtonUI>
          <ButtonUI
            color="primary"
            type="button"
            variant="outlined"
            onClick={() => {
              console.log(newHabit);
              postNewHabit(newHabit);
              //reset values in newHabit
              setNewHabit({
                habitName: "",
                habitGroupName: ""
              });
              setModalOpen(false);
            }}
            disabled={showCreateGroup}
          >
            Create Habit
          </ButtonUI>
        </div>
      </Modal>
    </>
  );
};

export default CreateHabit;
