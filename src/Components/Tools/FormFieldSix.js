import React from 'react'
import "./FormFieldSix.css";
const FormFieldSix = () => {
  return (
   <>
   <div className="available2">
       
       

        <div className="available">
        <strong>
          <p className='content-view-only' > Default Content View</p>
        </strong>
        <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
           <label for="yes">Icon Only</label>
          <br />
          
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
           <label for="yes">Text Only</label>
          <br />
          <input
            type="radio"
            id="available"
            name="available"
            value="available"
          />
            <label for="no">Icon And text</label>
          <br />
        </div>
        
      </div>
   
   </>
  )
}

export default FormFieldSix