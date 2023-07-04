import React from "react";
import ListGroup from "./components/listgroup";
import Posts from "./components/posts";
import "./DiscussionForum.css";
import NewPostModal from "./components/common/NewPostModal";

const DiscussionForum = () => {
  const posts = [
    {
      id: 1,
      title: "Global Warming",
      body: "Global warming is a pressing issue. Rising temperatures, melting ice caps, extreme weather events, and species extinction are alarming consequences. Urgent action is needed to mitigate greenhouse gas emissions and protect our planet's future.",
      tags: ["Global Warming", "Climate Change", "Environment"],
    },
    {
      id: 2,
      title: "Mental Health",
      body: "Mental health is crucial to overall well-being. It affects emotions, thoughts, and behaviors. Addressing mental health stigma, promoting self-care, and accessing support can lead to improved quality of life and resilience.",
      tags: ["Mental health", "Depression", "Anxiety", "Stress"],
    },
    {
      id: 3,
      title: "Flutter app development",
      body: "Flutter is a cross-platform mobile app development framework. Developed by Google, it enables building high-performance, visually appealing apps for Android and iOS using a single codebase, saving time and resources for developers.",
      tags: ["Flutter", "Cross-Platform"],
    },
    {
      id: 4,
      title: "Next JS",
      body: "Next.js is a popular React framework for building server-side rendered and statically generated websites. It offers features like automatic code splitting, hot module replacement, and serverless deployment, making it a powerful choice for building modern web applications.",
      tags: ["Web-Dev", "Cross-Platform"],
    },
  ];
  const tags = [
    "Global Warming",
    "Climate Change",
    "Environment",
    "Mental health",
    "Depression",
    "Anxiety",
    "Stress",
    "Flutter",
    "Cross-Platform",
    "Web-Dev",
  ];

  return (
    <div>
      <NewPostModal />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex w-100 justify-content-between m-3 align-items-center">
              <p className="total-posts">Total posts : {posts.length}</p>
              <button
                type="button"
                class="btn btn-success me-3 w-auto"
                style={{ marginBottom: 20 }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                New Post
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <Posts posts={posts} />
          </div>
          <div className="col-3">
            <ListGroup
              items={tags}
              //   selectedTag={this.state.selectedTag}
              //   onTagSelect={this.handleTagSelect}
            />
          </div>
          {/* <Pagination
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;
