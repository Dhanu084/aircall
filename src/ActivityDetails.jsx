import React from "react";
import ActivityLog from "./ActivityLog.jsx";

const ActivityDetails = ({ logs, updateDetail }) => {
  return (
    <ul>
      {logs.map((log) => {
        return (
          <ActivityLog log={log} key={log.id} updateDetail={updateDetail} />
        );
      })}
    </ul>
  );
};

export default ActivityDetails;
