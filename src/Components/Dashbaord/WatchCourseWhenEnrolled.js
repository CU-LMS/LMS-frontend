import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./WatchCourse.css";
import PdfViewerComponent from "./PdfViewerComponent";

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
      window.open(fileUrl)
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
      <div class="video-player">
        <div class="video-container">
          {activeFileType === "mp4" ? (
            <video id="main-video" controls>
              <source src={activeFileUrl} type="video/mp4" />
            </video>
          ) : null}
        </div>
        <div class="recommended-videos">
          <h2 className="head1">Documents</h2>
          {documentData && documentData.map((ele) => {
                return (
                  <div
                    onClick={() => handleDocClick(ele.fileName, ele.fileUrl)}
                    class="video-thumbnail"

                  ><p className="">{ele.fileName}</p></div>
                );
              })
          }
        </div>
      </div>
      <div className="footer-social">
        <p className="heading-view-books3">
          For more Information, say Hello CU!, we will get back to you.
        </p>
        <div className="iconsSocial">
          <a
            href="https://www.facebook.com/chandigarhuniversitygharuan/"
            target="_blanl"
            class="fa fa-facebook"
          ></a>
          <a
            href="https://twitter.com/Chandigarh_uni?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blanl"
            class="fa fa-twitter"
          ></a>
          <a
            href="https://cucet.cuchd.in/?type=gsn-cucet&gad=1&gclid=CjwKCAjw-IWkBhBTEiwA2exyO8vjl4ggGZZwFMLyaRfDicPQ909Wh8XuGfohw2Bw8KB_D9hoJsUxYhoCdw4QAvD_BwE"
            target="_blanl"
            class="fa fa-google"
          ></a>
          <a
            href="https://www.linkedin.com/school/chandigarh-university/?originalSubdomain=in"
            target="_blanl"
            class="fa fa-linkedin"
          ></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
    </>
  );
};

export default WatchCourseWhenEnrolled;
