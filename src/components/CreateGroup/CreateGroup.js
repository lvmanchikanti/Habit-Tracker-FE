import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";

const friendOptions = [
  { value: "cynthia", label: "Cynthia" },
  { value: "simone", label: "Simone" },
  { value: "lahari", label: "Lahari" }
];

const CreateGroup = ({ onClick, createNewGroup }) => {
  const [newGroup, setNewGroup] = useState({
    groupName: "",
    groupFriends: []
  });

  const handleNewGroupChange = event => {
    console.log(event);
    if (event.target) {
      console.log(event.target.name);
      console.log(event.target.value);

      setNewGroup({ ...newGroup, [event.target.name]: event.target.value });
    }
    //add array of friends
    else {
      setNewGroup({ ...newGroup, groupFriends: event });
    }

    console.log(newGroup);
  };
  return (
    <>
      <TextField
        id="groupName"
        label="Group Name"
        name="groupName"
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
        onClick={() => createNewGroup(newGroup)}
      >
        Create Group
      </Button>
    </>
  );
};

export default CreateGroup;
