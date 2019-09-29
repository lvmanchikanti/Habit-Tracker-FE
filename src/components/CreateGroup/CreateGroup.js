import React from "react";
import { Button } from "reactstrap";

const CreateGroup = ({ onClick }) => {
  return (
    <React.Fragment>
      <label>
        Add to New Collection:
        <input type="text" name="newCollectionName" />
      </label>
      <label>
        Add Friends:
        <input type="text" name="friendName" />
      </label>
      <Button color="primary" type="button" onClick={onClick}>
        Create Group
      </Button>
    </React.Fragment>
  );
};

export default CreateGroup;
