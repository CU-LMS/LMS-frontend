import React from 'react';
import './AddNews.css';

const AddNews = () => {
    return (
        <div className='add-news py-3 d-flex justify-content-center align-items-center'>
            <form className="form-container">
                <div className="section-heading mb-5">
                    <h3 className="mt-0">Add News</h3>
                    <hr />
                </div>

                <div id="course-creation-form">
                    <div className="row">
                        {/* new Title */}
                        <div className="col">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="newsTitle"
                                    id="newsTitle"
                                    placeholder="Enter News Title"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* description */}
                        <div className="col">
                            <div className="form-group">
                                <textarea className='form-control' placeholder='Enter Description....'>

                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* thumbnail */}
                        <div className="col">
                            <div className="form-group">
                                <label className='me-3'>Upload Thumbnail</label>
                            </div>
                            <div className="form-group">
                                <input type="file" style={{ width: 'auto' }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* start date */}
                        <div className="col">
                            <div className="form-group">
                                <label className='me-3'>Start Date</label>
                            </div>
                            <div className="form-group">
                                <input type="date" className='form-control' style={{ width: 'auto' }} min={new Date().toISOString().split('T')[0]}/>
                            </div>
                        </div>
                        {/* end date */}
                        <div className="col">
                            <div className="form-group">
                                <label className='me-3'>End Date</label>
                            </div>
                            <div className="form-group">
                                <input type="date" className='form-control' style={{ width: 'auto' }} min={new Date().toISOString().split('T')[0]}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                    <div className="row">
                        {/* buttons */}
                        <div className="col">
                            <div className="form-group d-flex justify-content-end align-items-center">
                                <button type='button' className='btn btn-outline-warning'>Cancel</button>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNews