import React from "react";
import { connect } from "react-redux";
import { doneTask, deleteTask } from "../reducers/reducer";

import "./styles/ListContainer.scss";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const ListContainer = (props) => {
  const handleCheckbox = (e, index) => {
    return props.doneTask(index, e.target.checked);
  };

  const deleteTask = (index) => {
    return props.deleteTask(index);
  };

  return (
    <div className="list">
      {props.tasks.map(({ task, date, done }, i) => (
        <div key={i} className="list__row">
          <label className="list__row__check">
            <input
              type="checkbox"
              onChange={(e) => handleCheckbox(e, i)}
              checked={done ? "checked" : ""}
            />
            <span className="checkbox"></span>
          </label>
          <div className="list__row__task">
            <div
              className="task"
              style={
                done
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {task}
            </div>
            <div className="date">{date}</div>
          </div>
          <div className="list__row__options">
            <Button
              color="#ff9ca9"
              icon={faTrash}
              size="1x"
              marginLeft="30px"
              click={deleteTask}
              index={i}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ tasks: state });
const mapDispatchToProps = {
  doneTask,
  deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
