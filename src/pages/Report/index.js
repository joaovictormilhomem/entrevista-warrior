import { Fragment, useEffect, useState } from "react";

function Report(props) {

  const [lastPlayReport, setLastPlayReport] = useState(false);

  function getLastPlayReport() {
    const storageLastPlayReport = JSON.parse(localStorage.getItem("LAST_PLAY_REPORT"));
    setLastPlayReport(storageLastPlayReport);
  }

  useEffect(() => { getLastPlayReport() }, [])

  return (lastPlayReport && <Fragment>
    {JSON.stringify(lastPlayReport)}
  </Fragment>);
}

export default Report;