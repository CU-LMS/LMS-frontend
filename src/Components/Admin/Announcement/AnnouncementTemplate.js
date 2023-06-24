import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./AnnouncementTamplate.css"
import { showAnnouncement } from "../../../redux/slices/courses/coursesActions";
import { useDispatch } from "react-redux";

const AnnouncementTemplate = ({ data }) => {
  const [announcement, setAnnouncement] = useState('');

  

    
  const [announcementList, setAnnouncementList] = useState([]);
  const dispatch = useDispatch();

  const announceData = useSelector(
    (state) => state?.courseState?.announcementResponse
  );
  console.log(announceData, "zzzzzzzzzzzz");
  let announcData = { 
    announcementId: 4,  
    visibleRole: "4",
    accessId: "2"
   };
  useEffect(() => {
    dispatch(showAnnouncement());    
  }, []);

  return (
    <>
      <div className="template-body">
        <div className="template-inner">
          <div className="inner-container">
            <div className="container-left">
              <div className="speaker">
                <p className="speaker-name">CU-DIGI CLASS</p>
                <p className="name">Announcement</p>
              </div>
            </div>

            <div className="container-right">
              <div className="container-right-inner">
                {/* <p className="announcement-headline">Hello Everyone Big Announcement Here... The 17th International Conference on Information Technology. We Welcome you here Hello Everyone Big Announcement Here Hello Everyone Big Announcement Here </p> */}
                <p>{announceData?.announcements}</p>
              </div>
            </div>
          </div>
          <div className="inner-body-2 row">
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card-inbody1">
                <p className="passage">
                  The 17th International Conference on Information Technology
                  and Applications (ICITA 2023) will be held in Turin, Italy on
                  20 - 22 October 2023. conferences in Information Technology{" "}
                </p>
                <p className="read-more">
                  <u>Read More</u>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card-inbody1">
                <p className="passage">
                  The 17th International Conference on Information Technology
                  and Applications (ICITA 2023) will be held in Turin, Italy on
                  20 - 22 October 2023. conferences in Information Technology{" "}
                </p>
                <p className="read-more">
                  <u>Read More</u>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card-inbody1">
                <p className="passage">
                  The 17th International Conference on Information Technology
                  and Applications (ICITA 2023) will be held in Turin, Italy on
                  20 - 22 October 2023. conferences in Information Technology{" "}
                </p>
                <p className="read-more">
                  <u>Read More</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementTemplate;
