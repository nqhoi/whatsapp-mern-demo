import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return <div className="sidebarChat">
    <Avatar src=""/>
    <div className="sidebarChat__info">
      <h2>Room Name</h2>
      <p>this is the last message</p>
    </div>
  </div>;
}

export default SidebarChat;
