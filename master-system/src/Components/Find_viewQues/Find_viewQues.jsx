import React from "react";

export default function Find_viewQues() {
  return (
    <>
      <div className="outerCover">
        <div className="main cQuesMain">
          <div className="register">
            <center style={{ marginTop: "10px" }}>
              <h2>Search Question</h2>
            </center>
            <form action="" id="register">
              <label>Subject Subject :</label>
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
              <label>Subject Topic :</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Select Topic
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
              <br />
              <br />
              <label>Subject Subtopic:</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Select Subtopic
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
              <br />
              <br />
              <label>Subject Difficulty:</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Difficulty
                </option>
                <option value="">Easy</option>
                <option value="">Medium</option>
                <option value="">Hard</option>
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
