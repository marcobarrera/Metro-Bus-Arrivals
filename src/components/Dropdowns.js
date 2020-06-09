import React from "react";

export const Dropdowns = (props) => {
  return (
    <div className="item">
      <h2 className="ui header">
        <div className="sub header">{props.subHeader}</div>
      </h2>
    </div>
  );
};

export const ArrivalTime = (props) => {
  return (
    <div className="item">
      <div className="ui label large">
        <h2 className="ui header">
          <div className="sub header">{props.subHeader}</div>
        </h2>
        <i className="clock icon large"></i>
        {props.times.minutes} {props.description}
      </div>
    </div>
  );
};
