import React from "react";
import "./styles/header.scss";

const Header = ({ filters, handleRemove, removeAll }) => {
  return (
    <div className="header">
      <div
        className={`${
          filters.length !== 0 ? "selected-filters-box" : "hidden"
        }`}
      >
        {filters.map((elem) => {
          return (
            <div>
              <span className="tag">{elem}</span>
              <button onClick={() => handleRemove(elem)}>
                <img src="../images/icon-remove.svg" alt="" />
              </button>
            </div>
          );
        })}
        <span className="clearAll" onClick={removeAll}>
          Clear
        </span>
      </div>
    </div>
  );
};
export default Header;
