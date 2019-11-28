import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import ButtonUI from "@material-ui/core/Button";

const LoginUser = ({
    history
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [loginUser, setLogInUser] = useState({
        email: "",
        password: ""
      });

      const handleUserChange = (event, name) => {
        //name change
        if (event.target) {
          setLogInUser({ ...loginUser, [event.target.name]: event.target.value });
        }
      };
  return(
    <>
      <Button style={{backgroundColor: "#A27DB1", 
              border: "#A27DB1",
              width: 186,
              height: 51,
              fontSize: "24px", 
              borderRadius: "8px"}} type="button" onClick={() => setModalOpen(true)}>
        LOGIN
      </Button>
      <Modal
        className="modal-dialog-centered"
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Login
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
          <TextField
            id="email"
            label="Email"
            name="email"
            value={loginUser.email}
            onChange={event => handleUserChange(event)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            value={loginUser.password}
            onChange={event => handleUserChange(event)}
            margin="normal"
            variant="outlined"
          />
          </form>
        </div>
        <div className="modal-footer">
          <ButtonUI
            color="primary"
            type="button"
            variant="outlined"
            onClick={() => {
              history.push(`/dashboard`)
              setModalOpen(false);
              //TODO: login user and redirect to dashboard
            }}
          >
            Login
          </ButtonUI>
        </div>
      </Modal>
    </>
  )

};

export default LoginUser;