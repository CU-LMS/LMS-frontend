
import Card from '../../Catalog/Card'
import { readPublishCourse } from "../../../redux/slices/Common/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsivePagination from 'react-responsive-pagination';

const PublishCourses = () => {
  const dispatch = useDispatch();
  let pageSize=10; 
  //let filterValue="newdate" 

  const [filterValue, setFilterValue] = useState('newdate');
  const totalPages = useSelector(state => state?.dashboardState?.numberOfPages);
  const [currentPage, setCurrentPage] = useState(1);
  const recordCount = useSelector(state => state?.dashboardState?.recordCount);

  useEffect(() => {
    dispatch(readPublishCourse(currentPage, pageSize, filterValue));
  }, []);
  const publishCourse = useSelector(
    (state) => state?.dashboardState?.getPublishCourseData
  );

  const handleSetCurrentPage = (num) => {
    setCurrentPage(num);
    dispatch(readPublishCourse(num, pageSize, filterValue));
  }


        const onSelectChange = (e) => {
          setFilterValue(e.target.value);
          setCurrentPage(1);
          dispatch(readPublishCourse(1,pageSize,e.target.value));         
        };
      

  return (
    <div className='catalog py-3'>
      <div className="container">
        <div className="py-2 d-flex justify-content-end align-items-center">
          <select name="filter" id="filter"
            onChange={onSelectChange}
            className='form-control w-25'>
            <option value="newdate">Newest</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="rating">Rating</option>

          </select>
        </div>

        <div className="cards py-4 d-flex align-items-center flex-wrap">
          {publishCourse?.data &&
            publishCourse?.data.map((row) => (
              <Card row={row} pageName={"publish"} />
            ))}
        </div>
        <div>
          {recordCount > pageSize && <div>
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={handleSetCurrentPage}
            />
          </div>}
        </div>
      </div>
    </div>
  )
}

export default PublishCourses