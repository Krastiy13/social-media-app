import React from "react";
import "./leftbar.scss";
import { useDispatch, useSelector } from "react-redux";

const Leftbar = () => {
  const authUser = useSelector((state) => state.userAuth.userAuth);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={authUser.coverPic} alt="" />
            <span></span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img alt="" />
            <span>Courses</span>
            <span>Courses</span> <span>Courses</span> <span>Courses</span>v{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>{" "}
            <span>Courses</span> <span>Courses</span> <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
