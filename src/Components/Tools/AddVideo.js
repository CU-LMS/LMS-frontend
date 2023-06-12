import React, { useContext, useEffect, useState } from "react";
import "./AddVideo.css";
import { sidebarContext } from "../../context/SidebarContext";
import BaseHeader from "./BaseHeader";
import { toast } from "react-toastify";
import swal from "sweetalert";

const AddVideo = () => {
  const { handleCloseSidebar } = useContext(sidebarContext);
  const [selectedFiles, setSelectedFiles] = useState();

  const handleFormSubmit = async () => {
    const newFormData = new FormData();
    Array.from(selectedFiles)?.map((file) => {
      newFormData.append("file", file, file.name);
    });
    newFormData.append("courseId", localStorage.getItem("courseId"));

    try {
      const response = await fetch(
        "http://43.240.66.78:7263/api/aws/UploadDocument",
        {
          method: "POST",
          body: newFormData,
        }
      );

      const data = await response.json();
      if (data == 201) {
        const response = await fetch(
          "http://43.240.66.78:7263/api/course/AddCourseFilesDoc",
          {
            method: "POST",
            body: newFormData,
          }
        );

        const data = await response.json();
      
        swal({
            title: "Video Uploaded!",
            text: "The video has been added to dashboard!.",
            icon: "success",
            button: "Done",
          });
      }
      console.log("DATA",data);
    } catch (e) {
      console.log(e);
    }
  };


 
  useEffect(() => {
    if (selectedFiles?.length !== 0) {
      console.log(selectedFiles);
    }
  }, [selectedFiles]);

  useEffect(() => {
    handleCloseSidebar();
    setSelectedFiles([]);
  }, []);

  return (
    <>
      <BaseHeader />
      <div className="add-video">
        <div className="add-video-header">
          <h3>Add Videos</h3>
        </div>

        <div className="add-video-body">
          <form className="add-docs-form">
            <input
              type="file"
              className="add-docs-input"
              onChange={(e) => setSelectedFiles(e.target.files)}
            />
        
            <button
              type="button"
              className="add-docs-btn"
              onClick={handleFormSubmit}
            >
              Upload Video
            </button>
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
  );
};

export default AddVideo;



// import React, { useContext, useEffect, useState } from "react";
// import "./AddVideo.css";
// import { sidebarContext } from "../../context/SidebarContext";
// import BaseHeader from "./BaseHeader";
// import { toast } from "react-toastify";
// import swal from "sweetalert";

// const AddVideo = () => {
//   const { handleCloseSidebar } = useContext(sidebarContext);
//   const [selectedFiles, setSelectedFiles] = useState();
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadStatus, setUploadStatus] = useState(""); // State variable for upload status

//   const handleFormSubmit = async () => {
//     const newFormData = new FormData();
//     Array.from(selectedFiles)?.map((file) => {
//       newFormData.append("file", file, file.name);
//     });
//     newFormData.append("courseId", localStorage.getItem("courseId"));

//     try {
//       const response = await fetch(
//         "http://43.240.66.78:7263/api/aws/UploadDocument",
//         {
//           method: "POST",
//           body: newFormData,
//         }
//       );

//       const contentLength = response.headers.get("Content-Length");
//       const reader = response.body.getReader();

//       let uploadedBytes = 0;
//       let chunks = [];

//       while (true) {
//         const { done, value } = await reader.read();

//         if (done) {
//           break;
//         }

//         chunks.push(value);
//         uploadedBytes += value.length;

//         const progress = (uploadedBytes / contentLength) * 100;
//         setUploadProgress(progress);
//       }

//       const fileData = new Uint8Array(uploadedBytes);
//       let offset = 0;
//       for (const chunk of chunks) {
//         fileData.set(chunk, offset);
//         offset += chunk.length;
//       }

//       console.log("File data:", fileData);

//       // Handle the completion of the upload
//       if (response.status === 201) {
//         const addFilesResponse = await fetch(
//           "http://43.240.66.78:7263/api/course/AddCourseFilesDoc",
//           {
//             method: "POST",
//             body: newFormData,
//           }
//         );

//         const addFilesData = await addFilesResponse.json();

//         swal({
//           title: "Video Uploaded!",
//           text: "The video has been added to the dashboard.",
//           icon: "success",
//           button: "Done",
//         });

//         setUploadStatus("uploaded"); // Set upload status to "uploaded" when data is 201
//       } else {
//         setUploadStatus("failed"); // Set upload status to "failed" for other responses
//       }
//     } catch (e) {
//       console.log(e);
//       setUploadStatus("failed"); // Set upload status to "failed" for error cases
//     }
//   };

//   useEffect(() => {
//     if (selectedFiles?.length !== 0) {
//       console.log(selectedFiles);
//     }
//   }, [selectedFiles]);

//   useEffect(() => {
//     handleCloseSidebar();
//     setSelectedFiles([]);
//   }, []);

//   return (
//     <>
//       <BaseHeader />
//       <div className="add-video">
//         <div className="add-video-header">
//           <h3>Add Videos</h3>
//         </div>

//         <div className="add-video-body">
//           <form className="add-docs-form">
//             <input
//               type="file"
//               className="add-docs-input"
//               onChange={(e) => setSelectedFiles(e.target.files)}
//             />

//             <button
//               type="button"
//               className="add-docs-btn"
//               onClick={handleFormSubmit}
//             >
//               Upload Video
//             </button>
//           </form>

//           <table>
//             <thead>
//               <tr>
//                 <th>File Name</th>
//                 <th>Format</th>
//                 <th>Size</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Render the file information */}
//             </tbody>
//           </table>

//           {/* Display the progress bar */}
//           <progress value={uploadProgress} max="100" />

//           {/* Display the upload status */}
//           {uploadStatus === "uploaded" && (
//             <p className="upload-status">File uploaded successfully!</p>
//           )}
//           {uploadStatus === "failed" && (
//             <p className="upload-status">File upload failed. Please try again.</p>
//           )}
//           {uploadStatus === "" && (
//             <p className="upload-status">Upload in progress...</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddVideo;
