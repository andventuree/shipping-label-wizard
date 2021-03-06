import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ handleClick, labelCompleted, showWizard }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">Shipping Label Maker</div>
        <div className="navbar__button">
          {labelCompleted ? (
            <button className="btn btn-light" onClick={handleClick}>
              {showWizard ? "View Label" : "Back to Wizard"}
            </button>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  labelCompleted: PropTypes.bool.isRequired,
  showWizard: PropTypes.bool.isRequired
};
