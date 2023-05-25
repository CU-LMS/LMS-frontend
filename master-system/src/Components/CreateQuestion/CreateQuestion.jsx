import React from "react";

import "./createQues.css";

export default function CreateQuestion() {
  return (
    <>
      <div className="outerCover">
        <div className="main cQuesMain">
          <div className="register">
            <center style={{ marginTop: "10px" }}>
              <h2>Create Question</h2>
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

              {/* <input type="submit" value="submit" name="submit" id="submit" /> */}
            </form>
          </div>
        </div>

        {/* question text */}

        <div className="main cQuesMain">
          <div className="register">
            {/* <center style={{ marginTop: "10px" }}>
              <h5>Please type the Question text in the area given below.</h5>
            </center> */}
            <form action="" id="register">
              <br />
              <label>Type Question text in the area given below:</label>
              <br />
              <textarea
                id="qText"
                name="qText"
                rows="4"
                cols="65"
                style={{ fontSize: "15px" }}
              />
              <br />
              <br />
              <label>
                Type Options text in the area given below and select{" "}
                <u>Correct</u> option
              </label>
              <br />

              <div className="QinutOption">
                {" "}
                <input type="radio" name="correctAnswer" value={1} />
                <label for="html">
                  <textarea cols={50} type="text" name="" id="" />
                </label>
              </div>
              <div className="QinutOption">
                {" "}
                <input type="radio" name="correctAnswer" value={1} />
                <label for="html">
                  <textarea cols={50} type="text" name="" id="" />
                </label>
              </div>
              <div className="QinutOption">
                {" "}
                <input type="radio" name="correctAnswer" value={1} />
                <label for="html">
                  <textarea cols={50} type="text" name="" id="" />
                </label>
              </div>
              <div className="QinutOption">
                {" "}
                <input type="radio" name="correctAnswer" value={1} />
                <label for="html">
                  <textarea cols={50} type="text" name="" id="" />
                </label>
              </div>
              {/* <br />
              <input type="radio" name="correctAnswer" value={2} />
              <label for="html">
                <textarea cols={50} type="text" name="" id="" />
              </label>
              <br />
              <input type="radio" name="correctAnswer" value={3} />
              <label for="html">
                <textarea cols={50} type="text" name="" id="" />
              </label>
              <br />
              <input type="radio" name="correctAnswer" value={4} />
              <label for="html">
                <textarea cols={50} type="text" name="" id="" />
              </label> */}
              <br />
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
