import React from "react";

export default function AssignTest() {
  return (
    <>
      <div className="outerCover">
        <div className="main cQuesMain">
          <div className="register">
            <center style={{ marginTop: "10px" }}>
              <h2>Assign Test From</h2>
            </center>
            <form action="" id="register">
              <label>Subject Company :</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Select Company
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
              <br />
              <br />
              <label>Subject Domain :</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Subject Domain
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
              <br />
              <br />
              <label>Select Test Name:</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Test Name
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
              <br />
              <br />
              {/* <label>Subject Difficulty:</label>
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
              <br /> */}

              {/* <input type="submit" value="submit" name="submit" id="submit" /> */}
              <br />
              <br />
            </form>
          </div>
        </div>
        <div className="main cQuesMain">
          <div className="register">
            <center style={{ marginTop: "10px" }}>
              <h2>Assign Test to</h2>
            </center>
            <form action="" id="register">
              <label>Subject Company :</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Select Company
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
              <br />
              <br />
              <label>Subject Domain :</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Subject Domain
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
              <br />
              <br />
              <label>Select Test Name:</label>
              <br />
              <select
                name="subject"
                id="subject"
                className="dropdown_input"
                style={{ color: "grey" }}
              >
                <option value="" selected disabled>
                  Test Name
                </option>
                <option value="">MCA</option>
                <option value="">MBA</option>
                <option value="">BCA</option>
                <option value="">BBA</option>
              </select>
              <br />
              <br />
              {/* <label>Subject Difficulty:</label>
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
              <br /> */}

              <input type="submit" value="submit" name="submit" id="submit" />
            </form>
          </div>
        </div>
        {/* question text */}
      </div>
    </>
  );
}
