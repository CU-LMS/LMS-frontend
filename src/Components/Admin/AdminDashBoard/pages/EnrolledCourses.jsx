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
import ExportExcel from '../../../DownloadData/ExcelExport';


const EnrolledCourses = () => {
    const titleToBeDownload = [
        "courseName",
        "dStartDate",
        "dEndDate",
        "semester",
        "learnerUserId",
        "isActive",
    ];

    // course name, author name, start date, end date, course id, semester

    const dispatch = useDispatch();
    const enrolledCourses = useSelector(state => state.dashboardState.enrolledCourses);
    const totalPages = useSelector(state => state?.dashboardState?.numberOfPages);
    const loadingState = useSelector(state => state?.dashboardState?.spinner);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    let pageSize = 10;


    const handleSetCurrentPage = (num) => {
        setCurrentPage(num);
        dispatch(getEnrolledCourses(pageSize, num));
    };

    // handle search text 
    const handleSearchText = (e) => {
        e.preventDefault();
        let trimmedText = searchText.trim();
        dispatch(getDataBySearch("enrolledCourses", searchText, pageSize, currentPage));
    }

    useEffect(() => {
        console.log("inside useEffect");
        dispatch(getEnrolledCourses(pageSize, currentPage));
    }, []);


    let content = <>
        <table className='enrolled-students-table mb-3 table-responsive'>
            <thead>
                <th>SR No</th>
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
                                <p className="course-name-td">{course?.courseName}</p>
                            </td>

                            <td title={course?.authorName}>
                                <p className="course-name-td">{course?.authorName}</p>
                            </td>

                            <td title={course?.authorName}><p className='course-name-td'>{course?.authorName}</p></td>

                            <td title={endDate}>
                                <p>{endDate}</p>
                            </td>

                            <td>
                                <p className="course-name-td">{course?.semester}</p>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>


    return (
        <>
            {loadingState && <Spinner />}
            <div className='enrolled-students pt-0'>
                <div className="py-4 text-center mb-2 bg-light mt-0">
                    <h3 className='enrolled-heading'>Enrolled Courses</h3>
                </div>
                <div className="table-enrolled  mb-2">
                    <form className="enrolled-search py-1 d-flex justify-content-end align-items-center mb-2" onSubmit={handleSearchText}>
                        <input type="text" className='form-control w-25 me-2' onChange={(e) => setSearchText(e.target.value)} />
                        <button className='btn-search m-0 d-flex' > <FiSearch className='enrolled-search-icon' /></button>
                    </form>
                    <div className="export-button">
                        <ExportExcel
                            excelData={enrolledCourses}
                            fileName={"Enrolled Courses Data"}
                        />
                    </div>
                </div>
                {<div >
                    <ResponsivePagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={handleSetCurrentPage}
                    />
                </div>}
            </div>
        </>
    )
}
