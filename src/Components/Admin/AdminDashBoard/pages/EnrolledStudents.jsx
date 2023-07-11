import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './EnrolledStudents.css';
import ResponsivePagination from 'react-responsive-pagination';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataBySearch, getEnrolledStudents } from '../../../../redux/slices/Common/dashboardActions';
import moment from 'moment';
import { FiSearch } from 'react-icons/fi';
import Spinner from '../../../Spinner/Spinner';

const EnrolledStudents = () => {

    const dispatch = useDispatch();
    const enrolledStudents = useSelector(state => state.dashboardState.enrolledStudents);
    const totalPages = useSelector(state => state?.dashboardState?.numberOfPages);
    const recordCount = useSelector(state => state?.dashboardState?.recordCount);
    const loadingState = useSelector(state => state?.dashboardState?.spinner);
    console.log(loadingState);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    let pageSize = 10;

    const handleSetCurrentPage = (num) => {
        setCurrentPage(num);
        dispatch(getEnrolledStudents(pageSize, num));
    }

    // handle search text 
    const handleSearchText = (e) => {
        e.preventDefault();
        dispatch(getDataBySearch("enrolledStudents", searchText, pageSize, currentPage));
    }


    useEffect(() => {
        console.log('inside useEffect');
        dispatch(getEnrolledStudents(pageSize, currentPage));
    }, []);


    let content = <>
        <table className='enrolled-students-table mb-3 table-responsive'>
            <thead>
                <th>ID</th>
                <th>Learner Name</th>
                <th>Course Name</th>
                <th>Enrollement Date</th>
                <th>Mobile Number</th>
                <th>Email</th>
            </thead>
            <tbody>
                {enrolledStudents?.map(student => {
                    let enrollmentDate = moment(student?.firstEnteredOn).format("DD-MM-YYYY");
                    return (
                        <tr>
                            <td><p>{student?.id}</p></td>
                            <td title={`${student?.firstName} ${student?.lastName}`}>
                                <p className='course-name-td'>{`${student?.firstName} ${student?.lastName}`}</p></td>
                            <td title={student?.courseName}><p className='course-name-td'>{student?.courseName}</p></td>
                            <td title={enrollmentDate}><p>{enrollmentDate}</p></td>
                            <td title={student?.phoneNumber}><p className='course-name-td'>{student?.phoneNumber}</p></td>
                            <td title={student?.userId}><p className='course-name-td'>{student?.userId}</p></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>

    return (
        <div className='enrolled-students pt-0'>
            <div className="py-4 text-center mb-2 bg-light mt-0">
                <h3>Enrolled Students</h3>
            </div>
            <div className="table-enrolled">
                <form className="enrolled-search py-1 d-flex justify-content-end align-items-center mb-2" onSubmit={handleSearchText}>
                    <input type="text" className='form-control w-25 me-2' onChange={(e) => setSearchText(e.target.value)} />
                    <button type='submit' className='btn-search m-0 d-flex'> <FiSearch className='enrolled-search-icon' /></button>
                </form>
                {!loadingState ? content : <> <div className='d-flex justify-content-center py-4'><Spinner /></div></> }
            </div>
            {<div>
                <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={handleSetCurrentPage}
                />
            </div>}
        </div>
    )
}

export default EnrolledStudents