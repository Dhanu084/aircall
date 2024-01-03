import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime";

import Header from "./Header.jsx";
import ActivityDetails from "./ActivityDetails.jsx";
import LogTypes from "./LogTypes.jsx";
import UpdateAll from "./UpdateAll.jsx";
const URL = "https://cerulean-marlin-wig.cyclic.app";

const App = () => {
  const [activityDetails, setActivityDetails] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const nonArchivedLogs = useMemo(
    () => activityDetails.filter(({ is_archived }) => !is_archived),
    [activityDetails]
  );

  const archivedLogs = useMemo(
    () => activityDetails.filter(({ is_archived }) => is_archived),
    [activityDetails]
  );
  async function fetchActivityDetails() {
    fetch(`${URL}/activities`)
      .then((res) => res.json())
      .then((data) => setActivityDetails(data));
  }
  useEffect(() => {
    fetchActivityDetails();
  }, []);

  const updateDetail = async (id, value) => {
    fetch(`${URL}/activities/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ is_archived: value }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => fetchActivityDetails());
  };

  const updateAllDetails = async () => {
    async function updateDetailsLog(id) {
      fetch(`${URL}/activities/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ is_archived: showAll }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then((res) => res.json());
    }
    const logList = showAll ? nonArchivedLogs : archivedLogs;
    const promises = logList.map((log) => updateDetailsLog(log.id));
    await Promise.all(promises).then(() => fetchActivityDetails());
  };

  return (
    <div className='container'>
      <Header />
      <LogTypes showAll={showAll} setShowAll={setShowAll} />
      <UpdateAll showAll={showAll} updateAllDetails={updateAllDetails} />
      <ActivityDetails
        logs={showAll ? nonArchivedLogs : archivedLogs}
        updateDetail={updateDetail}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
