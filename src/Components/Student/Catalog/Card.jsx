import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <Link className='course-card col-md-4 col-lg-3 col-sm-4 mb-4 justify-content-center '>
            <div className="card-image">
                <img src="https://culmsimages.s3.ap-south-1.amazonaws.com/course-48/banner.png" alt="course-img" />
            </div>
            <div className="card-content">
                <h3>Course Name</h3>
                <p>This is the course description.</p>
            </div>
            <div className="card-footer text-center">
                <Link className='btn-primary btn mx-0 px-4'>Enroll Now</Link>
            </div>
        </Link>
    )
}

export default Card