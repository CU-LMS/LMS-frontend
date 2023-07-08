import React from "react";

const PostPage = () => {
  return (
    <div>
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        <form>
          <div className="form-group">
            <label htmlFor="description">Post Reply</label>
            <textarea
              className="border border-primary form-control"
              style={{ height: 150 }}
              // value={data.comment}
              // onChange={this.handleChange}
              name="comment"
              type="comment"
              id="comment"
            />
            {/* {errors.description && (
              <div className="alert-info">{errors.description}</div>
            )} */}
            <div className="text-center">
              <button
                className="btn btn-primary mt-4"
                // disabled={this.validate()}
              >
                Post Reply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPage;
