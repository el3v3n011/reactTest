import React from "react";
import ReactDOM from "react-dom/client";


import PersonalInformation from "./pInfo";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="cv">
      <PersonalInformation />
    </div>
  </React.StrictMode>,
);
