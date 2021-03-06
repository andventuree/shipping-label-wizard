import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ currentProgress }) => {
  return (
    <div className="progress wizard__progress">
      <div
        className="progress-bar progress-bar-animated progress-bar-striped bg-info"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  currentProgress: PropTypes.number.isRequired
};

export default ProgressBar;
