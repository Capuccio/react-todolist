import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../reducers/reducer";

import "./styles/InputText.scss";

import Button from "./Button";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

const InputText = (props) => {
  const [text, setText] = useState("");

  const handleInput = (task) => {
    return setText(task);
  };

  const saveTask = () => {
    let task = text;
    let d = new Date();
    let date = `${d.getDate()}-${
      d.getMonth() + 1
    }-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    setText("");
    return text.trim() ? props.addTask({ task, date, done: false }) : void 0;
  };

  return (
    <div className="input">
      <input
        className="input__field"
        type="text"
        placeholder="Add..."
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <Button
        click={saveTask}
        color="#53bd78"
        icon={faCalendarPlus}
        size="2x"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = {
  addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(InputText);
