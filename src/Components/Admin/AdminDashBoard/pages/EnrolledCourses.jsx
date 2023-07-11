import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ResponsivePagination from 'react-responsive-pagination';
import { getDataBySearch, getEnrolledCourses } from '../../../../redux/slices/Common/dashboardActions';
import moment from 'moment';
import { FiSearch } from 'react-icons/fi';
import './EnrolledStudents.css';
import Spinner from '../../../Spinner/Spinner';


const EnrolledCourses = () => {

    // course name, author name, start date, end date, course id, semester

    const dispatch = useDispatch();
    const enrolledCourses = useSelector(state => state.dashboardState.enrolledCourses);
    const totalPages = useSelector(state => state?.dashboardState?.numberOfPages);
    const recordCount = useSelector(state => state?.dashboardState?.recordCount);
    const loadingState = useSelector(state => state?.dashboardState?.spinner);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    let pageSize = 10;


    const handleSetCurrentPage = (num) => {
        setCurrentPage(num);
        dispatch(getEnrolledCourses(pageSize, num));
    }

    // handle search text 
    const handleSearchText = (e) => {
        e.preventDefault();
        dispatch(getDataBySearch("enrolledCourses", searchText, pageSize, currentPage));
    }

    useEffect(() => {
        console.log('inside useEffect');
        dispatch(getEnrolledCourses(pageSize, currentPage));
    }, []);


    let content = <>
        <table className='enrolled-students-table mb-3 table-responsive'>
            <thead>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Author Name</th>
                <th>Start Date</th>
                <th>End Number</th>
                <th>Semester</th>
            </thead>
            <tbody>
                {enrolledCourses?.map(course => {

                    let startDate = moment(course?.dStartDate).format("DD-MM-YYYY");
                    let endDate = moment(course?.dEndDate).format("DD-MM-YYYY");
                    return (
                        <tr>
                            <td><p>{course?.courseId}</p></td>


                            <td title={course?.courseName}>
                                <p className='course-name-td'>{course?.courseName}</p></td>


                            <td title={course?.autherName}><p className='course-name-td'>{course?.autherName}</p></td>

                            <td title={startDate}><p>{startDate}</p></td>

                            <td title={endDate}><p>{endDate}</p></td>

                            <td ><p className='course-name-td'>{course?.semester}</p></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>

    return (
        <div className='enrolled-students pt-0'>
            <div className="py-4 text-center mb-2 bg-light mt-0">
                <h3>Enrolled Courses</h3>
            </div>
            <div className="table-enrolled">
                <form className="enrolled-search py-1 d-flex justify-content-end align-items-center mb-2" onSubmit={handleSearchText}>
                    <input type="text" className='form-control w-25 me-2' onChange={(e) => setSearchText(e.target.value)} />
                    <button className='btn-search m-0 d-flex' > <FiSearch className='enrolled-search-icon' /></button>
                </form>
                {!loadingState ? content : <> <div className='d-flex justify-content-center py-4'><Spinner /></div></>}
            </div>
            {<div >
                <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={handleSetCurrentPage}
                />
            </div>}
        </div>
    )
}

export default EnrolledCourses