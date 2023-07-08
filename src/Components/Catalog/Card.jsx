import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({row}) => {
    
    return (
        <Link   className='course-card col-md-4 col-lg-3 col-sm-4 mb-4 justify-content-center '>
            <div className="card-image">
                <img src="https://culmsimages.s3.ap-south-1.amazonaws.com/course-48/banner.png" alt="course-img" />
            </div>
            <div className="card-content">
                <h3>{row?.courseName}</h3>
                <p>{row.autherName}</p>
            </div>
           
        </Link>
    )
}

export default Card