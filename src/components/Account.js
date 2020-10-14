import React from "react";
import SidebarLeft from "./SidebarLeft";

function Account({ currentUser }) {
  return (
    <div>
      <SidebarLeft currentUser={currentUser} />
    </div>
  );
}

export default Account;
