import {React,useEffect} from 'react';
import CourseRated from './CourseRated';
import "./CourseRatingReview.css";
import { useDispatch,useSelector } from 'react-redux';
import { readRatingData } from '../../../redux/slices/ratingCourse/RatingCourseAction';
import { isPortal } from 'react-is';

const CourseRatingReview = ({courseId}) => {

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readRatingData(courseId));   
   
  }, []);

  const ratingData = useSelector(
    (state) => state?.ratingState?.getCourseRatingData
  );
  console.log("demo hai",ratingData)
  
  return (
    <>
    
    <div className="review-container">
    <span className="review-heading">Student Reviews</span>
    <div className ="review-header">
    
      {/* <CourseRated /> */}


    {/* <p className='review-p' > 3 out of 5 Rating </p> */}
    </div>
 
    <div className="row">
  <div className="side">
    <div>5 star</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div style={ratingData.fiveRating ? {width:`${ratingData.fiveRating * 10}%`}: {width:"0%"}} className="bar-5"></div>
    </div>
  </div>
  <div className="side right">
    <div>{`${ratingData.fiveRating * 10}%`}</div>
  </div>
  <div className="side">
    <div>4 star</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div style={ratingData.fourRating ? {width:`${ratingData.fourRating * 10}%`}: {width:"0%"}} className="bar-4"></div>
    </div>
  </div>
  <div className="side right">
    <div>{`${ratingData.fourRating * 10}%`}</div>
  </div>
  <div className="side">
    <div>3 star</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div style={ratingData.threeRating ? {width:`${ratingData.threeRating * 10}%`}: {width:"0%"}} className="bar-3"></div>
    </div>
  </div>
  <div className="side right">
    <div>{`${ratingData.threeRating * 10}%`}</div>
  </div>
  <div className="side">
    <div>2 star</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div style={ratingData.secondRating ? {width:`${ratingData.secondRating * 10}%`}: {width:"0%"}} className="bar-2"></div>
    </div>
  </div>
  <div className="side right">
    <div>{`${ratingData.secondRating * 10}%`}</div>
  </div>
  <div className="side">
    <div>1 star</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div style={ratingData.firstRating ? {width:`${ratingData.firstRating * 10}%`}: {width:"0%"}} className="bar-1"></div>
    </div>
  </div>
  <div className="side right">
    <div>{`${ratingData.firstRating * 10}%`}</div>
  </div>
</div>
</div>
</>
  )
}
export default CourseRatingReview;