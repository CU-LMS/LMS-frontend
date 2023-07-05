import React from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { BsHandThumbsUpFill, BsPersonCircle } from "react-icons/bs";
import PostReply from "./createReply";

const PostPage = ({ posts }) => {
  const { id } = useParams();
  return (
    <div>
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        <h2>Global Warming</h2>
        <p className="mt-4" style={{ color: "#505050" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          recusandae a reiciendis delectus blanditiis voluptatibus,
        </p>
        <div className="mt-1">
          Related Topics:
          <span className="badge bg-secondary m-1 p-2">Global Warming</span>
          <span className="badge bg-secondary m-1 p-2">Climate Change</span>
          {/* {posts[id].tags &&
            posts[id].tags.map((tag) => (
              <span className="badge badge-success m-1 p-2">{tag.name}</span>
            ))} */}
          <div className="d-flex w-100 justify-content-between mt-3 mb-3">
            <button className={"btn btn-primary"}>
              <BsHandThumbsUpFill className="me-2" />
              10
            </button>
            <p>20 Views</p>
          </div>
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
      {/* {user && <PostReply id={this.props.match.params.id} />} */}
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        Showing 2 replies
      </div>
      <div>
        <div className="container col-lg-6 shadow-lg p-3 mt-3 bg-body rounded">
          <div className="me-4">
            <BsPersonCircle size={30} className="me-3" />
            Posted by None
          </div>
          <div className="m-4">Good work</div>
          <div className="d-flex w-100 justify-content-between mt-3 mb-3">
            <button
              className={"btn btn-outline-primary"}
              // disabled={!user}
              onClick={() => {
                // this.handleReplyUpvote(reply._id);
              }}
            >
              <BsHandThumbsUpFill className="mr-2" />
              10
              {/* {reply.upvotes.length} */}
            </button>
            <p class="mb-1">
              <Moment fromNow style={{ color: "#505050" }}>
                {/* {reply.time} */}
              </Moment>
            </p>
          </div>
        </div>
        <div className="container col-lg-6 shadow-lg p-3 mt-3 bg-body rounded">
          <div className="me-4">
            <BsPersonCircle size={30} className="me-3" />
            Posted by None
          </div>
          <div className="m-4">Working</div>
          <div className="d-flex w-100 justify-content-between mt-3 mb-3">
            <button
              className={"btn btn-outline-primary"}
              // disabled={!user}
              onClick={() => {
                // this.handleReplyUpvote(reply._id);
              }}
            >
              <BsHandThumbsUpFill className="mr-2" />
              10
              {/* {reply.upvotes.length} */}
            </button>
            <p class="mb-1">
              <Moment fromNow style={{ color: "#505050" }}>
                {/* {reply.time} */}
              </Moment>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
