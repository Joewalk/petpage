import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import "./SidebarLeft.css";
import { Avatar, Modal } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

function SidebarLeft() {
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sidebarLeft">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <input type="text" />
          <input type="file" name="" id="" />
        </div>
      </Modal>
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
        <button className="btn" onClick={() => setOpen(true)}>
          Post
        </button>
      </ul>
      <div className="sidebarLeft__footer">
        <p>@copyright 2020</p>
      </div>
    </div>
  );
}

export default SidebarLeft;
