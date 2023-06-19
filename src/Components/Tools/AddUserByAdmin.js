import React from "react";
import "./AddUserByAdmin.css";

const AddUserByAdmin = () => {
  return (
    <>
      {" "}
      <div className="add-user">
        <div className="add-user-heading">
          <h2 className="heading-user">Admin Page</h2>
          <hr className="hr-line" />
        </div>
      </div>
      <div className="main">
        {/* <div className="form-container"> */}
        <form className=" form-container row g-3 needs-validation" novalidate>
          <div className="section-heading mb-5">
            <h3 className="mt-0">Create New User</h3>
            <hr />
          </div>

          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              required
              placeholder="User First Name"
            />
            <div className="invalid-feedback">
              Please provide first name of user.
            </div>
          </div>

          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              required
              placeholder="User Middle Name"
            />
            <div className="invalid-feedback">Enter user middle name.</div>
          </div>

          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              required
              placeholder="User Last Name"
            />
            <div className="invalid-feedback">Enter user last name.</div>
          </div>

          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              Gender
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Female
              </label>
            </div>
            {/* <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Dont't want to disclose
              </label>
            </div> */}
            <div className="invalid-feedback">Password Didn't Match.</div>
          </div>

          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              Phone Code
            </label>
            <input
              type="tel"
              className="form-control"
              id="validationCustom03"
              required
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="e.g: +91"
            />
            <div className="invalid-feedback">Please provide phone code.</div>
          </div>

          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
              placeholder="+91 8888-XYZ-987"
            />
            <div className="invalid-feedback">Please provide phone number.</div>
          </div>

          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              Employee ID
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              required
              placeholder="e.g .e123XX"
            />
            <div className="invalid-feedback">Enter Employee ID.</div>
          </div>

          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Role ID:
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Role ID: 1</option>
              <option>Role ID: 2</option>
              <option>Role ID: 3</option>
              <option>Role ID: 4</option>
              <option>Role ID: 5</option>
            </select>
            <div class="invalid-feedback">Please give a valid role id</div>
          </div>

          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              Created By
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              value="admin"
              disabled
            />
            <div className="invalid-feedback">No one can change</div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </>
  );
};

export default AddUserByAdmin;
