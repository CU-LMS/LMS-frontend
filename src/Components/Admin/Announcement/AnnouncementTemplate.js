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
                <p className="dynamic-heading">{announceData?.global?.announcements}</p>
              </div>
            </div>
          </div>
          <div className="inner-body-2 row">
          

            {announceData?.stream!=null?(
            <div className="col-lg-6 col-md-6 mb-3 ">
              <div className="card-inbody1 courseAnno">
                <p className="dynamic-heading">
                {announceData?.stream?.announcements}
                </p>
                {/* <p className="read-more">
                  <u>Read More</u>
                </p> */}
              </div>
            </div>):null
}
            {announceData?.course!=null?(
            <div className="col-lg-6 col-md-6 mb-3 ">
              <div className="card-inbody1 courseAnno">
                <p className="dynamic-heading">
                {announceData?.course?.announcements}
                </p>
                {/* <p className="read-more">
                  <u>Read More</u>
                </p> */}
              </div>
            </div>):null}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementTemplate;
