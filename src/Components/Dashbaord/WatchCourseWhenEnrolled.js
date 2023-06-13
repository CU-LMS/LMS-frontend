import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./WatchCourse.css";
import PdfViewerComponent from "./PdfViewerComponent";
import MainFooter from "./MainFooter";

const WatchCourseWhenEnrolled = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const courseId = queryParameters.get("courseId");
  let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
  const [documentData, setDocumentData] = useState([]);
  const [activeFileUrl, setActiveFileUrl] = useState("");
  const [activeFileType, setActiveFileType] = useState("");

  const getCourseDetails = async () => {
    let data = {
      userId: credentials.userId,
      courseId: courseId,
    };
    let config = {
      method: "post",
      url: "http://43.240.66.78:7263/api/Course/GetEnrollCourseFileList",
      data,
    };
    const response = await axios(config);
    if (response?.data?.statusCode === 200) {
      console.log(response?.data?.data);
      setDocumentData(response?.data?.data);
    } else {
      toast.error("Error While Fetching");
    }
  };

  const handleDocClick = (fileName, fileUrl) => {
    let lastdot = 0;

    for (var i = fileName.length; i > 0; i--) {
      if (fileName.charAt(i) === ".") {
        lastdot = i;
        break;
      }
    }
    if (fileName.slice(lastdot + 1) === "mp4") {
      setActiveFileType("mp4");
    } else {
      setActiveFileType("txt");
      window.open(fileUrl);
    }

    setActiveFileUrl(fileUrl);
  };

  // useEffect(() => {
  //   if(activeFileUrl && activeFileType === "mp4") {
  //     window.open(activeFileUrl);
  //   }
  // }, [activeFileUrl])

  useEffect(() => {
    getCourseDetails();
  }, []);

  return (
    <>
      {console.log(documentData, "DDDDDDDDDDDDDDDDDDDDDDD")}
      <div class="video-player">
        <div class="video-container">
         
          {activeFileType === "mp4" ? (
            
            <video id="main-video" controls>
              <source src={activeFileUrl} type="video/mp4" />
            </video>
          ) : null}
        </div>
        <div class="recommended-videos">
          <h2 className="head1">Content</h2>
          <hr className="lineHR" />
          {documentData &&
            documentData.map((ele) => {
              return (
                <>
                  <div className="videoIsHere">
                
                    <div
                      onClick={() => handleDocClick(ele.fileName, ele.fileUrl)}
                      class="video-thumbnail"
                    >
                      <p className="pdf">{ele.fileName}</p>
                    
                    </div>
                    <hr className="lineHR" />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    
      <div>
        <MainFooter />
      </div>
    </>
  );
};

export default WatchCourseWhenEnrolled;
