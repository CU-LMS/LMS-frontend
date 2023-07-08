import React from "react";

const NewPostModal = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              New Post
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
              />
            </div>
            <div class="mb-3">
              <textarea
                placeholder="Describe the topic"
                class="form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Tags (separated by commas)"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary "
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn-newpost">
              Submit Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
