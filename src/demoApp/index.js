import React, { useState } from "react";

import api from "../api/client";
import { connect } from "react-redux";
import AppLogin from "./AppLogin";

function MyApp(props) {
  const [output, setOutput] = useState([]);
  const [value, setValue] = useState();

  async function handleFormSubmit(event) {
    event.preventDefault();

    let formdata = document.getElementById("submission");
    const form = new FormData(formdata);
    let json = null;
    form.forEach((value, key) => {
      json = { data: value };
    });

    const p = await api.post("/send", json);

    if (p.status === 200) {
      setOutput(p.data);
    }
  }

  return props.auth ? (
    <div style={{ marginLeft: "10%" }}>
      <AppLogin value={value} handleFormSubmit={handleFormSubmit} />
      <pre>{JSON.stringify(output, 2, null)}</pre>
    </div>
  ) : (
    <h2>Login failed</h2>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.signSuccess
});

export default connect(mapStateToProps)(MyApp);
