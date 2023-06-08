import React from "react";
import "./FormFieldThree.css";

const FormFieldThree = () => {
  return (
    <>
      <div className="course-view-option">
        <strong>
          <p className="headingtwo">Course View option</p>
        </strong>
        {/* <hr
          className="line"
          style={{
            color: "black",
            height: 1,
          }}
        /> */}

        <div className="available2">
          <div className="threeLine">
            <p className="three">Choose a course view</p>
            <p className="three">Option</p>
            <u className="que">what's the difference?</u>
            <br />
          </div>
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
           <label for="yes"> Default Course View</label>
          <br />
          <p className="que1">
            This course uses the Original Course View. Instructors can't change
            the course view.
          </p>
          <br />
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
            <label for="no">Restricted Course View</label>
          <br />
          <p className="que1">
            This course uses the Ultra Course View. Instructors can't change the
            course view.
          </p>
          <br />

          {/* <input
            type="radio"
            id="available"
            name="available"
            value="available"
          /> */}
          {/*   <label for="no"> Instructor Choice</label>
          <br />
          <p className="que1">
          Instructors can choose which course view is right for them.
          </p>
          <br /> */}
        </div>

      

       
      </div>
    </>
  );
};

export default FormFieldThree;
