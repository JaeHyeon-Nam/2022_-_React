import React from "react";
import propTypes from "prop-types";

export const Popup = ({ dept, course, year, semester }) => {
  return (
    <div className="popup">
      <div className="popup-header">{`${dept} ${course}`}</div>
      <div className="popup-body">
        <div>
          <span>Department</span>
          <span className="popup-data department">{dept}</span>
        </div>
        <div>
          <span>Course</span>
          <span className="popup-data">{course}</span>
        </div>
        <div>
          <span>Year</span>
          <span className="popup-data">{year}</span>
        </div>
        <div>
          <span>Semester</span>
          <span className="popup-data semester">{semester}</span>
        </div>
      </div>
    </div>
  );
};