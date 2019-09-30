import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import CreateGroup from "../CreateGroup";

const CreateHabit = ({ existingGroups, createNewHabit }) => {
  console.log(existingGroups);
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleCreateGroup, setToggleCreateGroup] = useState(false);
  const [newHabit, setNewHabit] = useState({ habitName: "", habitGroup: "" });

  const handleHabitChange = event => {
    setNewHabit({ ...newHabit, [event.target.name]: event.target.value });
    console.log(newHabit);
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
            <label>
              Habit Name:
              <input
                type="text"
                onChange={event => handleHabitChange(event)}
                name="habitName"
              />
            </label>
            <Button
              color="primary"
              onClick={() => setToggleCreateGroup(!toggleCreateGroup)}
            >
              {toggleCreateGroup ? "Cancel" : "Create New Group"}
            </Button>
            {!toggleCreateGroup && (
              <label>
                Add to Existing Collection:
                <select
                  name="habitGroup"
                  onClick={event => handleHabitChange(event)}
                >
                  {existingGroups.map(group => {
                    return <option value={group}>{group}</option>;
                  })}
                </select>
              </label>
            )}
            {toggleCreateGroup && (
              <CreateGroup
                onClick={() => setToggleCreateGroup(!toggleCreateGroup)}
              />
            )}
          </form>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => setModalOpen(false)}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={() => {
              createNewHabit(newHabit);
              setModalOpen(false);
            }}
          >
            Create Habit
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CreateHabit;
