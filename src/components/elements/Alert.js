import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import React, { useState } from "react";
import { Collapse } from "reactstrap";

const Alert = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`alert alert-${props.type} custom-alert-${props.type} ${
        props.isToggled ? "toggled" : ""
      }`}
      style={{ backgroundColor: props.bgcolor }}
    >
      <div className="title mb-3" onClick={toggleHandler}>
        {props.isToggled ? (
          <span className="plus-icon">
            {isOpen ? <FaMinusCircle /> : <FaPlusCircle />}
          </span>
        ) : (
          ""
        )}
        {props.title}
      </div>
      {props.isToggled ? (
        <Collapse isOpen={isOpen}>
          <div className="body">{props.children}</div>
        </Collapse>
      ) : (
        <div className="body">{props.children}</div>
      )}
    </div>
  );
};

export default Alert;
