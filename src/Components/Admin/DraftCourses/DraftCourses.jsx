import Card from '../../Catalog/Card'
import { readDraftCourse } from "../../../redux/slices/Common/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsivePagination from 'react-responsive-pagination';

const DraftCourses = () => {
    const dispatch = useDispatch();
    let pageSize = 10;
    let filterValue = "newdate"


    const totalPages = useSelector(state => state?.dashboardState?.numberOfPages);
    const [currentPage, setCurrentPage] = useState(1);
    const recordCount = useSelector(state => state?.dashboardState?.recordCount);


    useEffect(() => {
        dispatch(readDraftCourse(currentPage, pageSize, filterValue));
    }, []);

    const publishCourse = useSelector(
        (state) => state?.dashboardState?.getDraftCourseData
    );
    const handleSetCurrentPage = (num) => {
        setCurrentPage(num);
        dispatch(readDraftCourse(num, pageSize, filterValue));
    }



    return (
        <div className='catalog py-3'>
            <div className="container">


                <div className="cards d-flex justify-content-between align-items-center flex-wrap py-4">
                    {publishCourse?.data &&
                        publishCourse?.data.map((row) => (
                            <Card row={row} pageName={"draft"} />
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

export default DraftCourses