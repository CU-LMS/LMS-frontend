import React from "react";
import "./FormFieldFive.css";
import FormFieldPictureUpload from "./FormFieldFivePictureUpload";

const FormFieldFive = () => {
  return (
    <>
      <div className="banner">
        <strong>
          <p className="headingtwo">Banner</p>
        </strong>
        <p className="bannerpara">
        In Original Course View courses, the banner displays at the top of the course's entry point page. In Ultra Course View courses, it displays at the top of the Course Content Page.
        </p>
        <div className="banner-image">
            <strong>Current Banner Image</strong>
        </div>

        <hr
         
        />
        <FormFieldPictureUpload />

      </div>
    </>
  );
};

export default FormFieldFive;
