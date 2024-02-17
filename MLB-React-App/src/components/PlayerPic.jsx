import React from "react";
import "./PlayerPic.css";

const PlayerPic = (props) => {
  return (
    <img
      id="hi"
      className={props.props.revealState.reveal}
      src={props.props.url}
    ></img>
  );
};

export default PlayerPic;
