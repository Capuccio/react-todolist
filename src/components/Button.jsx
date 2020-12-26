import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  const style = {
    color: props.color,
    cursor: "pointer",
    marginLeft: props.marginLeft
  };

  return (
    <FontAwesomeIcon
      onClick={() => props.click(props.index)}
      style={style}
      icon={props.icon}
      size={props.size}
    />
  );
};

export default Button;
