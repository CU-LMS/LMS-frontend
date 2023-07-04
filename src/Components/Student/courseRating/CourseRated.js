import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ratingCourseAction } from "../../../redux/slices/ratingCourse/RatingCourseAction";


import "./CourseRated.css";
import { useDispatch } from "react-redux";

const CourseRated = ({courseId,cRating}) => {
const dispatch = useDispatch();


  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${courseId}`);
    
      setRating(cRating);
    
  }, [courseId]);

  const handleRating = (courseRating) => {
    
   
    setRating(courseRating);
    dispatch(ratingCourseAction(courseId, courseRating));
    localStorage.setItem(`rating-${courseId}`, courseRating.toString());

}
  return (

    <>
    {console.log(courseId, "XXXXXXXXXXX")}
{console.log(cRating, "UUUUUUUUUUU")}
      <div className="top-ratingHeader">
        <div className="starrate">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={currentRating}>
                <input className="ratingradio"
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => handleRating(currentRating)}
                />
                <FaStar
                  className="star"
                  size={20}
                  color={
                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default CourseRated;
