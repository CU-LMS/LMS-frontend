import React, { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { FaCamera } from 'react-icons/fa';
import ProfileTab from './profile/ProfileTab';
import MessagesTab from './profile/MessagesTab';
import MyActivityTab from './profile/MyActivityTab';
import './Profile.css';

const Profile = () => {

    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className='profile'>
            <div className="profile-header">
                <h3 className='mb-0'>Profile</h3>
            </div>
            <div className="profile-tabs d-flex">
                <div className={`profile-tab ${activeTab === "profile" ? "active-tab" : ""}`} onClick={() => setActiveTab('profile')}>
                    <p className='mb-0' >Profile</p>
                </div>
                <div className={`profile-tab ${activeTab === "messages" ? "active-tab" : ""}`} onClick={() => setActiveTab('messages')}>
                    <p className='mb-0'>Messages</p>
                </div>
                <div className={`profile-tab ${activeTab === "myActivity" ? "active-tab" : ""}`} onClick={() => setActiveTab('myActivity')}>
                    <p className='mb-0'>My Activity</p>
                </div>
            </div>
            <div className="profile-content row p-0">
                <div className="profile-left-col col-lg-2">
                    <div className="profile-picture mb-3">
                        <RxAvatar className='avatar-icon' />
                        <button className='camera-icon-btn'>
                            <FaCamera className='camera-icon' />
                        </button>
                    </div>


                    <p className='mb-3 profile-name'>Leonardo da Vinci</p>

                    <div className="profile-section">
                        <p className='mb-0'><strong>Username</strong></p>
                        <p className='make-ellipses'>Leonardo da Vinci</p>
                    </div>
                    <div className="profile-section">
                        <p className='mb-0'><strong>Email</strong></p>
                        <p className='make-ellipses'>leonardo.da.vinci@gmail.com</p>
                    </div>
                    <div className="profile-section">
                        <p className='mb-0'><strong>Department</strong></p>
                        <p >IDOL</p>
                    </div>

                    <button className='btn btn-primary mb-2 w-100'>Edit Profile</button>
                    <button className='btn btn-primary w-100'>Change Password</button>


                </div>
                {activeTab === "profile" && <ProfileTab />}
                {activeTab === "messages" && <MessagesTab />}
                {activeTab === "myActivity" && <MyActivityTab />}
            </div>
        </div>
    )
}

export default Profile