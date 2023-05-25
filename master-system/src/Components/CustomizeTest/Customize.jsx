import React from "react";

export default function Customize() {
  return (
    <>
      <div className="outerCover">
        <div className="main cQuesMain">
          <div className="register">
            <center style={{ marginTop: "10px" }}>
              <h2>Question Bank</h2>
            </center>
            <form action="" id="register">
              <label>Subject Question Bank :</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Select Subject
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
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
