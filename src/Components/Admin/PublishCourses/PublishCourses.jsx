
import Card from '../../Catalog/Card'
import { readPublishCourse } from "../../../redux/slices/Common/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PublishCourses = () => {
  const dispatch = useDispatch();
  let pageNo=1;
  let pageSige=10; 
  let recordCount=0;
  let filterValue="newdate" 

  

    useEffect(() => {
        dispatch(readPublishCourse(pageNo,pageSige,filterValue));
      }, []);
    const publishCourse = useSelector(
        (state) => state?.dashboardState?.getPublishCourseData
      );

        recordCount=publishCourse.recordCount;

console.log(publishCourse);
      

  return (
    <div className='catalog py-3'>
        <div className="container">
            <div className="py-2 d-flex justify-content-end align-items-center">
                <select name="filter" id="filter" className='form-control w-25'>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest</option>
                    <option value="trending">Trending</option>
                </select>
            </div>

            <div className="cards d-flex justify-content-between align-items-center flex-wrap py-4">
            {publishCourse.data &&
          publishCourse.data.map((row) => (
                <Card row={row}/>               
                ))}
            </div>
        </div>
    </div>
  )
}

export default PublishCourses