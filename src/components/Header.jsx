import React from "react";
import "./styles/header.scss";

const Header = ({ filters, handleRemove }) => {
  return (
    <div className="header">
      <div className="selected-filters-box">
        {filters.map((elem) => {
          console.log(elem);
          return (
            <div>
              <span className="tag">{elem}</span>
              <button onClick={() => handleRemove(elem)}>
                <img src="../images/icon-remove.svg" alt="" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
