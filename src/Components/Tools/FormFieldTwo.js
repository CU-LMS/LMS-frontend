import React from "react";
import "./FormFieldTwo.css";

const FormFieldTwo = () => {
  return (
    <>
      <form className="available">
        <strong>
          <p className="headingtwo">Availability</p>
        </strong>
        {/* <hr
            className="line"
            style={{
              color: "black",
              height: 1,
            }}
          /> */}

        <div className="available2">
          <p className="avai">Available</p>
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
           <label for="yes">Yes</label>
          <br />
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
            <label for="no">No</label>
          <br />
        </div>

        <hr />

        <div className="available2">
          <p className="avai">Duration</p>
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
           <label for="yes">Continuous</label>
          <br />
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
            <label for="no">Select Dates</label>
          <br />
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
            <label for="no">Days from the Date of Enrollment</label> {"   "}
          <span>
            <input className="input-text3" type="text" id="days" name="enrollment"  />
          </span>
        </div>
      </form>
    </>
  );
};

export default FormFieldTwo;
