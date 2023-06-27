import React from 'react';


const MyActivityTab = () => {
  return (
    <div className="profile-right-col col-lg-7">
    <h3 className='profile-right-col-title mb-4'>My Activities</h3>
    <div className="profile-right-col-content">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Activity</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Points</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default MyActivityTab