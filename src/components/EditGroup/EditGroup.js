import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";

const EditGroup = ({ existingGroups, editGroupAPI }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editedGroup, setEditedGroup] = useState({
    name: "",
    userIds: [],
    habitIds: [],
    collectionId: ""
  });
};

export default EditGroup;
