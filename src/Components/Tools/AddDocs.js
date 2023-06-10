import React, { useContext, useEffect, useState } from 'react';
import './AddDocs.css';
import BaseHeader from './BaseHeader';
import { sidebarContext } from '../../context/SidebarContext';
import { toast } from "react-toastify";

const AddDocs = () => {

    
    const { handleCloseSidebar } = useContext(sidebarContext);
    const [selectedFiles, setSelectedFiles] = useState();

    // handle form submit
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
           
        }catch(e) {
            console.log(e);
        }

    }

    useEffect(() => {
        handleCloseSidebar();
    }, []);
    return (
        <>
            <BaseHeader />
            <div className='add-docs'>
                <div className="add-docs-header">
                    <h3>Add docs</h3>
                </div>

                <div className="add-docs-body">
                    <form className="add-docs-form">
                        <input type="file" className='add-docs-input' accept='.doc, .pdf, .pptx, .txt, .ppt, .xlsx' multiple 
                        onChange={(e) => setSelectedFiles(e.target.files)}/>
                        <button type='button' className='add-docs-btn' onClick={handleFormSubmit}>Upload docs</button>
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

export default AddDocs