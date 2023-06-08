import React, { useState } from "react";

const FormFieldPictureUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Same upload logic as before...
  };

  return (
    <div>
      {previewUrl && (
        <div>
          {/* <h2 className="next">Preview:</h2> */}
          <img src={previewUrl} alt="Preview" style={{ maxWidth: "300px" }} />
        </div>
      )}
      <input type="file" onChange={handleFileChange} />
      <button className="next1" style={{ backgroundColor:"grey" , color: "white", borderRadius: "5px", }} onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FormFieldPictureUpload;
