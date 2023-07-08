import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div className="list-group">
      {posts.map((post) => (
        <Link
          className="w-100 p-4 list-group-item list-group-item-action flex-column align-items-start"
          to={`/discussion-forum/post/${post.id}`}
        >
          <div className="d-flex w-100 justify-content-between" key={post.id}>
            <h5 className="mb-1">{post.title}</h5>
          </div>
          {/* <small>Created by {post.author.name}</small> */}
          <br />
          <small className="overflow-hidden">{post.body}</small>
          <div className="mt-1">
            Related Topics:
            {post.tags.map((tag) => (
              <span className="badge bg-secondary m-1 p-2">{tag}</span>
            ))}
            {/* <h6 className="mt-2">
              {post.upvotes.length} Likes | {post.views} Views
            </h6> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
