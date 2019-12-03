import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar  style={{backgroundColor: "#A27DB1"}}>
        <Typography variant="h6">Habit Tracker</Typography>
        <div className="header-button-container">
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Log Out</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
