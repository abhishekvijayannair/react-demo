import React from "react";

const welcome = (props) => {
  return (
    <input
      type="text"
      placeholder={props.name}
      onChange={props.changed}
      value={props.name}
    />
  );
};

export default welcome;
