import News from './LatestNews/News';
import './LatestNews.css';
import { readNewsData } from '../../redux/slices/Common/dashboardActions';
import { useDispatch,useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const LatestNews = () => {

   
    return (
        <div className='latest-news py-3'>
            <div className="container">
                <div className="section-heading text-center mb-5">
                    <h3 className='mt-0'>All Latest News</h3>
                    <hr />
                </div>
            </div>

            <div className="container">
                <News />             
            </div>
        </div>
    )
}

export default LatestNews