import React from "react";

const ApprovalCard = (props) => {
  console.log(props);
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="description">{props.children}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui green button">Approve</div>
            <div className="ui red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
