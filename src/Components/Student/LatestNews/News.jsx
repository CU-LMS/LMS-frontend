import React from 'react';
import Buk from '../../../asset/buk.jpg';

const News = () => {
  return (
    <div className='news row'>
        <div className="col-lg-3 p-0">
            <img src={Buk} alt="news-img" className='news-image'/>
        </div>
        <div className="col-lg-9 px-4 py-2">
            <h3 className='news-title text-start'>This is a Demo News Title</h3>
            <hr className='mb-3'/>
            <p className='news-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo modi rem harum quaerat cupiditate consectetur explicabo perspiciatis, deleniti vel at animi ab unde, debitis dolor numquam praesentium soluta. Eligendi error modi numquam corporis doloremque quaerat iusto, officia non reiciendis dolore!</p>
        </div>
    </div>
  )
}

export default News