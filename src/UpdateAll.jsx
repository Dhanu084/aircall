import React from "react";
import "./css/util.css";

const UpdateAll = ({ showAll, updateAllDetails }) => {
  return (
    <div>
      <button className='full-width' onClick={updateAllDetails}>
        {showAll ? "Archive All" : "Unarchive All"}
      </button>
    </div>
  );
};

export default UpdateAll;
