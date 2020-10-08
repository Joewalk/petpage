import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import "./SidebarLeft.css";
import { Avatar } from "@material-ui/core";

function SidebarLeft() {
  return (
    <div className="sidebarLeft">
      <div className="sidebarLeft__header">
        <Avatar alt="Devjoe" src="/static/images/avatar/1.png" />
        <p>Devjoe</p>
        <MoreHorizIcon />
      </div>
      <ul className="sidebarLeft__items">
        <li className="sidebarLeft__item">
          <MailOutlineIcon />
          <p>Message</p>
          <span>3</span>
        </li>
        <li className="sidebarLeft__item">
          <NotificationsNoneIcon />
          <p>Notifications</p>
          <span>4</span>
        </li>
        <li className="sidebarLeft__item">
          <PeopleOutlineIcon />
          <p>Find Vert</p>
          <h5 className="new">new</h5>
        </li>
        <li className="sidebarLeft__item">
          <MoreHorizIcon />
          Trending
        </li>
        <li className="sidebarLeft__item">
          <PersonIcon />
          Explore
        </li>
        <button className="btn">Post</button>
      </ul>
      <div className="sidebarLeft__footer">
        <p>@copyright 2020</p>
      </div>
    </div>
  );
}

export default SidebarLeft;
