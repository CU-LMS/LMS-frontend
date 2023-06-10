import React, { useContext, useEffect, useState } from 'react';
import './AddVideo.css';
import { sidebarContext } from '../../context/SidebarContext';
import BaseHeader from './BaseHeader';
import { toast } from "react-toastify";

const AddVideo = () => {

    const { handleCloseSidebar } = useContext(sidebarContext);
    const [selectedFiles, setSelectedFiles] = useState();


    const handleFormSubmit = async () => {

        const newFormData = new FormData();
        Array.from(selectedFiles)?.map(file => {
            newFormData.append('file', file, file.name);
        })       
        newFormData.append('courseId', localStorage.getItem('courseId'));

        try {
            const response = await fetch('http://43.240.66.78:7263/api/aws/UploadDocument', {
                method: "POST",
                body: newFormData
            });

            const data = await response.json();
            if(data==201)
            {
                const response = await fetch('http://43.240.66.78:7263/api/course/AddCourseFilesDoc', {
                    method: "POST",
                    body: newFormData
                });
    
                const data = await response.json(); 
                toast.success("Upload Successfully", { autoClose: 6000 });
            }
            console.log(data);
        }catch(e) {
            console.log(e);
        }

    }



    useEffect(() => {
        if(selectedFiles?.length !== 0){
            console.log(selectedFiles);
        }
    }, [selectedFiles])

    useEffect(() => {
        handleCloseSidebar();
        setSelectedFiles([]);
    }, []);

    return (
        <>
            <BaseHeader />
            <div className='add-video'>
                <div className="add-video-header">
                    <h3>Add Videos</h3>
                </div>

                <div className="add-video-body">
                    <form className="add-docs-form">
                        <input type="file" className='add-docs-input'  
                        onChange={(e) => setSelectedFiles(e.target.files)}/>
                        <button type='button' className='add-docs-btn' onClick={handleFormSubmit}>Upload  Video</button>
                    </form>

                    <table>
                        <tr>
                            <th>File Name</th>
                            <th>Format</th>
                            <th>Size</th>
                        </tr>
                    </table>
                </div>
            </div>
        </>

    )
}

export default AddVideo