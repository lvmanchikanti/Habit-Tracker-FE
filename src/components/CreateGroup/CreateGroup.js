import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";

const friendOptions = [
  { value: "cynthia", label: "Cynthia" },
  { value: "simone", label: "Simone" },
  { value: "lahari", label: "Lahari" }
];

const CreateGroup = ({ onClick, setNewGroupCreated }) => {
  return (
    <>
      <TextField
        id="newGroupName"
        label="Group Name"
        name="newGroupName"
        value={""}
        onChange={() => console.log("test")}
        margin="normal"
        variant="outlined"
      />
      <Select options={friendOptions} isMulti placeholder="Add Friends" />
      <Button variant="outlined" color="secondary" onClick={setNewGroupCreated}>
        Create Group
      </Button>
    </>
  );
};

export default CreateGroup;
