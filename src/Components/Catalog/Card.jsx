import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Card = ({row,pageName}) => {
    const navigate = useNavigate();



const editDraftCourse = (courseId) => {
    //navigate("/save-draft");
    //window.location.href = 
    if(pageName=="draft")
    {
    navigate(`/save-draft?courseId=${courseId}`);
    }
    else if(pageName=="publish")
    {
        navigate("/view-content", {state: { courseId } });
    }
  };
    
    return (
        <div onClick={() => editDraftCourse(row?.courseId)}   className='course-card col-md-4 col-lg-3 col-sm-4 mb-4 justify-content-center '>
            <div className="card-image">
                <img src="https://culmsimages.s3.ap-south-1.amazonaws.com/course-48/banner.png" alt="course-img" />
            </div>
            <div className="card-content">
                <h3>{row?.courseName}</h3>
                <p>{row.authorName}</p>
            </div>
           
        </div>
    )
}

export default Card