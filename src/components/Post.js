import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TextsmsIcon from "@material-ui/icons/Textsms";
import ShareIcon from "@material-ui/icons/Share";

function Post({ user }) {
  return (
    <div className="post">
      <div className="post__head">
        <Avatar alt={user?.user} src="/static/images/avatar/1.png" />
        <p>{user?.user}</p>
        <Button>follow</Button>
      </div>
      <div className="post__body">
        <img
          src="https://cloudspoint.xyz/wp-content/uploads/2020/02/CODE-1.jpg"
          alt=""
        />
        <p>
          <b>_devjoe: </b>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            ducimus.
          </small>
        </p>
      </div>
      <div className="post__footer">
        <ul>
          <li>
            <TextsmsIcon />
            <span>22</span>
          </li>
          <li>
            <FavoriteBorderIcon />
            <span>212</span>
          </li>
          <li>
            <VisibilityIcon />
            <span>7</span>
          </li>
          <li>
            <ShareIcon />
            <span>4</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Post;
