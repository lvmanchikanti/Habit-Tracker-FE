import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";

const friendOptions = [
  { value: "cynthia", label: "Cynthia", userId: "1" },
  { value: "simone", label: "Simone", userId: "2" },
  { value: "lahari", label: "Lahari", userId: "3" }
];

const CreateGroup = ({ onClick, createNewGroupAPI }) => {
  const [newGroup, setNewGroup] = useState({
    name: "",
    userIds: [],
    habitIds: [],
    collectionId: ""
  });

  const handleNewGroupChange = event => {
    let friendIds = [];
    for (let i = 0; i < event.length; i++) {
      friendIds.push(event[i].userId);
    }

    if (event.target) {
      // TODO - figure out a more elegant way to set collectionId to an actual number instead of its name
      setNewGroup({
        ...newGroup,
        [event.target.name]: event.target.value,
        collectionId: event.target.value
      });
    }
    //add array of friends
    else {
      setNewGroup({ ...newGroup, userIds: friendIds });
    }
  };
  return (
    <>
      <TextField
        id="name"
        label="Group Name"
        name="name"
        value={newGroup.newGroupName}
        onChange={event => handleNewGroupChange(event)}
        margin="normal"
        variant="outlined"
      />
      <Select
        options={friendOptions}
        isMulti
        placeholder="Add Friends"
        onChange={event => handleNewGroupChange(event)}
      />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => createNewGroupAPI(newGroup)}
      >
        Create Group
      </Button>
    </>
  );
};

export default CreateGroup;
