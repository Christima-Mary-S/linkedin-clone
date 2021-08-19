import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widget.css";

function Widget() {
  const newsArticle = (heading, subtitle) => {
    <div className="widget__article">
      <div className="widget__article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
      <div className="widget__article-left">
        <FiberManualRecordIcon />
      </div>
    </div>;
  };
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Spacex new Launch",
        "is unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
      )}
    </div>
  );
}

export default Widget;
