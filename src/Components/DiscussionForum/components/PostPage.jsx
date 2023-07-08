import React from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { BsPersonCircle } from "react-icons/bs";
import PostReply from "./createReply";
import "./PostPage.css";
import Reply from "./common/Reply";
const PostPage = ({ posts }) => {
  const { id } = useParams();
  return (
    <div>
      <div className="container col-lg-6 shadow-lg p-3 mt-3 bg-body rounded">
        <h2>Global Warming</h2>
        <p className="mt-4" style={{ color: "#505050" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          recusandae a reiciendis delectus blanditiis voluptatibus,
        </p>
        <div className="mt-1">
          Related Topics:
          <span className="badge bg-secondary m-1 p-2">Global Warming</span>
          <span className="badge bg-secondary m-1 p-2">Climate Change</span>
          <div
            class="d-flex w-100 justify-content-between"
            style={{ color: "#505050" }}
          >
            <div>
              <BsPersonCircle size={30} className="me-2" />
              Posted by None
            </div>
            <p class="mb-1">
              <Moment fromNow>20</Moment>
            </p>
          </div>
        </div>
      </div>
      <PostReply />
      <div className="container col-lg-6 shadow-lg p-3 mt-3 bg-body rounded">
        Showing 2 replies
      </div>
      <div>
        <Reply />
        <Reply />
      </div>
    </div>
  );
};

export default PostPage;
