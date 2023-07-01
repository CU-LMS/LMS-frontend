import React from 'react'
import Card from './Catalog/Card'

const Catalog = () => {
  return (
    <div className='catalog py-3'>
        <div className="container">
            <div className="py-2 d-flex justify-content-end align-items-center">
                <select name="filter" id="filter" className='form-control w-25'>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest</option>
                    <option value="trending">Trending</option>
                </select>
            </div>

            <div className="cards d-flex justify-content-between align-items-center flex-wrap py-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Catalog