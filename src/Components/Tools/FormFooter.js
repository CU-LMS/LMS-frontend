import React from 'react'
import "./FormFooter.css";

const FormFooter = () => {
  return (
   <>
    <div className="footerTool">
          <div className="leftFooter">Click Submit to proceed</div>
          <div className="rightFooter">
            <button className="cancel">Cancel</button>
            <button className="submit">Submit</button>
          </div>
        </div>
   </>
  )
}

export default FormFooter