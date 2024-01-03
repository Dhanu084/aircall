import React from "react";
import "./css/util.css";

const LogTypes = ({ showAll, setShowAll }) => {
  return (
    <div className='flex'>
      <div
        className={showAll ? "selected" : ""}
        onClick={() => setShowAll(true)}
      >
        {" "}
        All Logs
      </div>
      <div
        className={!showAll ? "selected" : ""}
        onClick={() => setShowAll(false)}
      >
        Archived Logs
      </div>
    </div>
  );
};

export default LogTypes;
