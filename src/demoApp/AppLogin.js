import React from "react";
import { TextField, Button } from "@material-ui/core";

function AppLogin(props) {
  const { handleFormSubmit, value } = props;
  return (
    <div>
      <h1>DemoApp - Backend Implementation in progress</h1>
      <h3>Coming Soon!</h3>
      <form name="submission" id="submission" onSubmit={handleFormSubmit}>
        <TextField
          name="searchbox"
          value={value}
          //onChange={setValue}
        ></TextField>
        <Button
          name="submit"
          type="submit"
          color="primary"
          variant="contained"
          style={{ marginLeft: "5%" }}
        >
          submit
        </Button>
      </form>
    </div>
  );
}

export default AppLogin;
