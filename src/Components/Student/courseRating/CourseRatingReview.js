import { React, useEffect } from "react";
import CourseRated from "./CourseRated";
import "./CourseRatingReview.css";
import { useDispatch, useSelector } from "react-redux";
import { readRatingData } from "../../../redux/slices/ratingCourse/RatingCourseAction";
import { isPortal } from "react-is";

const CourseRatingReview = ({ courseId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readRatingData(courseId));
  }, []);

  const ratingData = useSelector(
    (state) => state?.ratingState?.getCourseRatingData
  );
  console.log("demo hai", ratingData);

  let totalRating = 1;
  totalRating =
    ratingData?.fiveRating +
    ratingData?.fourRating +
    ratingData?.threeRating +
    ratingData?.secondRating +
    ratingData?.firstRating;
  // totalRating === null ? 1 : totalRating;

  totalRating = totalRating == 0 ? 1 : totalRating;

  console.log(totalRating, "99999999999");
  
  return (
    <>
      <div className="review-container">
        <span className="review-heading">Student Reviews</span>
        <div className="review-header"></div>
        <p className="totalStar-rated">
          Total <span className="count-star">{totalRating == 1 || totalRating == 0 ? 1 : totalRating }</span> students rated
          this course.
        </p>
        <div className="row">
          <div className="side">
            <div>5 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div
                style={
                  ratingData.fiveRating
                    ? {
                        width: `${
                          Math.round((ratingData.fiveRating / totalRating) * 100)
                        }%`,
                      }
                    : { width: "0%" }
                }
                className="bar-5"
              ></div>
            </div>
          </div>
          <div className="side right">
            <div>{`${Math.round((ratingData.fiveRating / totalRating) * 100)}%`}</div>
          </div>
          <div className="side">
            <div>4 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div
                style={
                  ratingData.fourRating
                    ? {
                        width: `${
                          Math.round((ratingData.fourRating / totalRating) * 100)
                        }%`,
                      }
                    : { width: "0%" }
                }
                className="bar-4"
              ></div>
            </div>
          </div>
          <div className="side right">
            <div>{`${Math.round((ratingData.fourRating / totalRating) * 100)}%`}</div>
          </div>
          <div className="side">
            <div>3 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div
                style={
                  ratingData.threeRating
                    ? {
                        width: `${
                          Math.round((ratingData.threeRating / totalRating) * 100)
                        }%`,
                      }
                    : { width: "0%" }
                }
                className="bar-3"
              ></div>
            </div>
          </div>
          <div className="side right">
            <div>{`${Math.round((ratingData.threeRating / totalRating) * 100)}%`}</div>
          </div>
          <div className="side">
            <div>2 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div
                style={
                  ratingData.secondRating
                    ? {
                        width: `${
                          Math.round((ratingData.secondRating / totalRating) * 100)
                        }%`,
                      }
                    : { width: "0%" }
                }
                className="bar-2"
              ></div>
            </div>
          </div>
          <div className="side right">
            <div>{`${Math.round((ratingData.secondRating / totalRating) * 100)}%`}</div>
          </div>
          <div className="side">
            <div>1 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div
                style={
                  ratingData.firstRating
                    ? {
                        width: `${
                          Math.round((ratingData.firstRating / totalRating) * 100)
                        }%`,
                      }
                    : { width: "0%" }
                }
                className="bar-1"
              ></div>
            </div>
          </div>
          <div className="side right">
            <div>{`${Math.round((ratingData.firstRating / totalRating) * 100)}%`}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseRatingReview;
