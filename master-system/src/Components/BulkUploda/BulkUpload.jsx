import React from "react";
import "./BulkUpload.css";

export default function BulkUpload() {
  return (
    <>
      {/* <div className="container_bulk">
        <h2>MCQ Bulk Upload</h2>

        <div className="formArea">
          <div className="bulkUpload">
            <select name="subject" id="subject" className="selectSubject">
              <option value="" selected disabled>
                Select Subject
              </option>
              <option value="">Maths</option>
              <option value="">Science</option>
              <option value="">MCA</option>
              <option value="">BCA</option>
            </select>
          </div>
          <div className="bulkUpload">
            <input
              type="file"
              name="file"
              id="file"
              className="custom-file-input uploadFile"
            />
          </div>
        </div>
      </div> */}

      <div className="outerCover">
        <div className="main ">
          <div className="register">
            <center style={{ marginTop: "10px" }}>
              <h2>Bulk Upload</h2>
            </center>
            <form action="" id="register">
              <label>Subject Name :</label>
              <br />
              <input
                type="text"
                name="Sub"
                id="name"
                placeholder="Enter Subject"
              />
              <br />
              <br />
              <label> Enter Question File :</label>
              <br />
              <input
                type="file"
                name="question"
                id="name"
                placeholder="Enter Question"
              />
              <br />
              <br />
              <input type="submit" value="submit" name="submit" id="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
