import React, { useState } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import "./SidebarLeft.css";
import firebase from "firebase";
import { storage, db } from "../firebase";
import { Avatar, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function SidebarLeft({ currentUser }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);

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
      border: "none",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = (e) => {
    e.preventDefault();

    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageURL: url,
                username: currentUser.displayName,
                email: currentUser.email,
              });

              setImage(null);
              setCaption("");
              setOpen(false);
            });
        }
      );
    } else {
      alert("make sure you select a file");
    }
  };

  return (
    <div className="sidebarLeft">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form onSubmit={handleUpload}>
            <div>
              <input
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="caption"
                placeholder="Enter a caption..."
                type="text"
              />
            </div>
            <div>
              <label className="post__label" htmlFor="post__file">
                choose photo
              </label>
              <input
                onChange={handleChange}
                className="file"
                type="file"
                name=""
                id="post__file"
              />
              <button disabled={!image} className="post__button" type="submit">
                Post
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="sidebarLeft__header">
        <Avatar
          alt={currentUser?.displayName}
          src="/static/images/avatar/1.png"
        />
        <p>{currentUser.displayName}</p>
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
          Add Post
        </button>
      </ul>
      <div className="sidebarLeft__footer">
        <p>@copyright 2020</p>
      </div>
    </div>
  );
}

export default SidebarLeft;
