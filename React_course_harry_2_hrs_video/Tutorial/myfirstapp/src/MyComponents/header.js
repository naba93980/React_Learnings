import React from "react";
import PropTypes from "prop-types";
import "./header.css";
export function Header(props) {
  return (
    <nav className="navigationbar">
      <span className="home">
        <a href="https://www.google.com">TodoList</a>
      </span>
      <span className="about">
        <a href="https://www.google.com">About</a>
      </span>
      <span className="todolist">
        <a href="https://www.google.com">
          {props.title} {props.val} {props.roll}
        </a>
      </span>
    </nav>
  );
}
Header.propTypes = {
  var: PropTypes.number,
  title:
    PropTypes.string.isRequired /* isRequired matlab ye props arguments ka sochke pass karna hi karna hai */,
};
Header.defaultProps = {
  title: "kuch daldo",
  nam: "mera nam",
  roll: 456,
};
// export default header
