import React from "react";
import Moment from "react-moment";
import { BsPersonCircle } from "react-icons/bs";

const Reply = () => {
  return (
    <div className="container col-lg-6 shadow-lg p-3 mt-3 mb-3 bg-body rounded">
      <div className="me-4">
        <BsPersonCircle size={30} className="me-3" />
        Posted by None{" "}
        <span className="ms-2">
          <Moment fromNow style={{ fontSize: "14px", color: "#505050" }}>
            {/* {reply.time} */}
          </Moment>
        </span>
      </div>
      <div className="m-4">Working</div>
    </div>
  );
};

export default Reply;
