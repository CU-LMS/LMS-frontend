import React from 'react'
import News from './LatestNews/News';
import './LatestNews.css';

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
                <News />
                <News />
            </div>
        </div>
    )
}

export default LatestNews