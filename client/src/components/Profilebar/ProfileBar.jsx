import "./profilebar.scss";

import React from "react";
import { Card } from "../index";
import { data } from "../../data/articleCard";

export const ProfileBar = () => {
  let theme = ``;

  let userData = {
    name: data[0].authorName,
    profile: data[0].authorProfile,
    membership: "Member",
  };

  let cardData = data[1];

  const Avatar = ({ props }) => {
    return (
      <div className="avatar-container">
        <img
          src={props.profile}
          alt="user-profile"
          className="avatar-profile"
        />
        <div className="avatar-info">
          <span className="name"> {props.name} </span>
          <span className="membership"> {props.membership} </span>
        </div>
      </div>
    );
  };

  return (
    <div className={`profilebar ${theme}`}>
      <Avatar props={userData} />

      <span className="sub-header">Continue Reading</span>

      <Card data={cardData} />

      

      <div className="topics">
        {[
          "Health",
          "Social Media",
          "Politics",
          "Productivity",
          "Business",
          "Money",
          "Self Development",
        ].map((topic, index) => (
          <span className="tags" key={index}>
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
