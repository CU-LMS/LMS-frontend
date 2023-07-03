import Buk from '../../../asset/buk.jpg';
import { useDispatch,useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { readNewsData } from '../../../redux/slices/Common/dashboardActions';

const News = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readNewsData());   
   
  }, []);

  const newsData = useSelector(
    (state) => state?.dashboardState?.getNewsData
  );

  console.log("news data",newsData);
  return (
    <>
    {newsData &&
          newsData.map((row) => (
    <div className='news row'>
        <div className="col-lg-3 p-0">
            <img src={row?.thumbNailUrl} alt="news-img" className='news-image'/>
        </div>
        <div className="col-lg-9 px-4 py-2">
            <h3 className='news-title text-start'>{row?.newsTitle}</h3>
            <hr className='mb-3'/>
            <p className='news-content'>{row?.newsDesc}</p>
        </div>
    </div>))}
    </>
  )
}

export default News