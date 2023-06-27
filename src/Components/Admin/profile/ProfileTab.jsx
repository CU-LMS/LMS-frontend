import React from 'react'

const ProfileTab = () => {
    return (
        <div className="profile-right-col col-lg-7">
            <h3 className='profile-right-col-title mb-4'>Profile Information</h3>
            <div className="profile-right-col-content">
                <div className="profile-section">
                    <p className='mb-0'><strong>First Name</strong></p>
                    <p>Leonardo</p>
                </div>
                <hr />
                <div className="profile-section">
                    <p className='mb-0'><strong>Middle Name</strong></p>
                    <p>Da</p>
                </div>
                <hr />
                <div className="profile-section">
                    <p className='mb-0'><strong>Last Name</strong></p>
                    <p>Vinci</p>
                </div>
                <hr />
                <div className="profile-section">
                    <p className='mb-0'><strong>Username</strong></p>
                    <p>leonardoDaVinci</p>
                </div>
                <hr />
                <div className="profile-section">
                    <p className='mb-0'><strong>Email</strong></p>
                    <p>leonardo.da.vinci@gmail.com</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ProfileTab