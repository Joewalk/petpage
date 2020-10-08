import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRight.css";

function SidebarRight() {
  return (
    <div className="trending">
      <h4>Trending Posts</h4>
      <div className="trends">
        <div className="trend">
          <Avatar alt="Devjoe" src="/static/images/avatar/1.png" />
          <span>
            <h3>Devjoe</h3>
            <span>@devjoe</span>
          </span>
          <p>125k views</p>
        </div>
        <div className="trend">
          <Avatar alt="Qazi" src="/static/images/avatar/1.png" />
          <span>
            <h3>Clever Qazi</h3>
            <span>@cleverqazi</span>
          </span>
          <p>120k views</p>
        </div>
        <div className="trend">
          <Avatar alt="Sonny" src="/static/images/avatar/1.png" />
          <span>
            <h3>Sonny Sangah</h3>
            <span>@sonnysangah</span>
          </span>
          <p>119k views</p>
        </div>
        <div className="trend">
          <Avatar alt="Traversy" src="/static/images/avatar/1.png" />
          <span>
            <h3>Traversy media</h3>
            <span>@traversymedia</span>
          </span>
          <p>110k views</p>
        </div>
        <div className="trend">
          <Avatar alt="Netninja" src="/static/images/avatar/1.png" />
          <span>
            <h3>Netninja </h3>
            <span>@netninja</span>
          </span>
          <p>109k views</p>
        </div>
        <div className="trend">
          <Avatar alt="MM tuts" src="/static/images/avatar/1.png" />
          <span>
            <h3>MM tuts </h3>
            <span>@mmtuts</span>
          </span>
          <p>100k views</p>
        </div>
        <div className="trend">
          <Avatar alt="Devs Life" src="/static/images/avatar/1.png" />
          <span>
            <h3>Devs Life </h3>
            <span>@devslife</span>
          </span>
          <p>96k views</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
