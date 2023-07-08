
import Card from '../../Catalog/Card'
import { readDraftCourse } from "../../../redux/slices/Common/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DraftCourses = () => {
  const dispatch = useDispatch();
  let pageNo=1;
  let pageSige=10; 
  let recordCount=0;
  let filterValue="newdate" 

    useEffect(() => {
        dispatch(readDraftCourse(pageNo,pageSige,filterValue));
      }, []);
    
      const publishCourse = useSelector(
        (state) => state?.dashboardState?.getDraftCourseData
      );

        recordCount=publishCourse?.recordCount;

console.log(publishCourse);
      

  return (
    <div className='catalog py-3'>
        <div className="container">
           

            <div className="cards d-flex justify-content-between align-items-center flex-wrap py-4">
            {publishCourse?.data &&
          publishCourse?.data.map((row) => (
                <Card row={row}/>               
                ))}
            </div>
        </div>
    </div>
  )
}

export default DraftCourses