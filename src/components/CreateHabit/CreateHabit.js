import React, { useState } from "react";
import { Button, Modal, Collapse } from "reactstrap";
import CreateGroup from "../CreateGroup";

const CreateHabit = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleCreateGroup, setToggleCreateGroup] = useState(false);

  const userCollections = [
    "Health",
    "Education",
    "Beauty",
    "Hobby",
    "Self Care"
  ];

  return (
    <React.Fragment>
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
              <input type="text" name="habitName" />
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
                <select>
                  {userCollections.map(collection => {
                    return <option value={collection}>{collection}</option>;
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
          <Button color="primary" type="button">
            Create Habit
          </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default CreateHabit;
