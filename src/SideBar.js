import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./SideBar.css";

function SideBar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentitem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar">{/* {user.email[0]} */}</Avatar>
        <h2>Christima Mary</h2>
        <h4>christima123@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNum">2314</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNum">5671</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("SoftwareEngineering")}
        {recentItem("Data Structures")}
        {recentItem("WebDevelopment")}
        {recentItem("Blockchain")}
        {recentItem("EdTech")}
      </div>
    </div>
  );
}

export default SideBar;
