import React, { useState } from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { FiPhoneOutgoing } from "react-icons/fi";
import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineUnarchive } from "react-icons/md";
import "./css/app.css";

const ActivityLog = ({ log, updateDetail }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <li key={log.id} className='log' onClick={() => setExpanded(!expanded)}>
      {log.direction === "inbound" ? <FiPhoneIncoming /> : <FiPhoneOutgoing />}{" "}
      {`${log.from} to ${log.to}`}
      {expanded ? (
        <div>
          From: {log.from}
          To: {log.to}
          Duration: {log.duration}
          {log.is_archived ? (
            <h1>
              <MdOutlineUnarchive onClick={() => updateDetail(log.id, false)} />
            </h1>
          ) : (
            <h1>
              <IoArchiveOutline onClick={() => updateDetail(log.id, true)} />
            </h1>
          )}
        </div>
      ) : null}
    </li>
  );
};

export default ActivityLog;
