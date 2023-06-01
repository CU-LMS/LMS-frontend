import React, { useState } from "react";
import FormFieldTwo from "./FormFieldTwo";
import FormFieldThree from "./FormFieldThree";
import FormFieldFour from "./FormFieldFour";
import FormFieldFive from "./FormFieldFive";
import FormFieldSix from "./FormFieldSix";
import { BsFillPatchQuestionFill } from "react-icons/bs";
// import { BsGlobe } from "react-icons/bs";
// import { useSpring, animated } from 'react-spring';
import { Element, scroller } from "react-scroll";
import "./MiniHeader.css";
import FormFooter from "./FormFooter";

const MiniHeader = () => {
  const [name, setName] = useState("");
  const [showFooter, setShowFooter] = useState(false);

  // hiding footer
 

  // hidding footer

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  // Scroll to the bottom when footer is clicked
  const scrollToBottom = () => {
    scroller.scrollTo("footer", {
      duration: 500,
      smooth: true,
    });
  };

  // const animationProps = useSpring({
  //   bottom: showFooter ? "0px" : "-100px",
  //   config: {
  //     tension: 300,
  //     friction: 30,
  //   },
  // });

  // Attach scroll event listener on component mount
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const star = (
    <img src="https://learn.content.blackboardcdn.com/3900.67.0-rel.9+1b5c39c/images/ci/icons/required.gif" />
  );

  return (
    <>
      {/* <div className="background-picture"></div> */}
      <div className="body-nav">
        <div className="base-header">
          <p className="base-heading"> Administrator Tools </p>
          <p className="close"> close administrator pannel</p>
        </div>

        <div className="body-scroll">
          <div className="base-header2">
            <div className="base-header-1">
              <p className="base-heading2">Administrator Panel </p>
              <p className="base-heading2-1">Courses</p>
              <p className="base-heading2-2">Create Courses</p>
            </div>
            <div className="base-header-2">
              <p className="base-heading3">
                <BsFillPatchQuestionFill size={20} />
              </p>
            </div>
          </div>

          <div className="create-courses">
            <p className="courses"> Create Courses</p>
          </div>
          <div className="box1">
            <span>
              {" "}
              <p className="warning">{star} Indicates a required field.</p>{" "}
            </span>
            <div className="general">
              <span>
                {" "}
                <p className="base-heading2">General Information</p>
              </span>
            </div>
            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">{star} Course Name :</p>{" "}
              </div>
              <div className="form-field2">
                <input
                  type="text"
                  placeholder="Enter Course Name"
                  className="input-text1"
                />
              </div>
            </div>

            {/* <div className="real-form">
              <div className="form-field1">
                <p className="name-course">{star}Enter Course ID:</p>{" "}
              </div>
              <div className="form-field2">
                <input
                  type="text"
                  placeholder="Enter Course ID"
                  className="input-text1"
                />
              </div>
            </div> */}

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">Subject Area:</p>{" "}
              </div>
              <div className="form-field1">
                <select className="input-text1" name="subjects" id="subjects">
                  <option value="volvo">
                    Computer / InformationTechnology
                  </option>
                  <option value="volvo">Computer & Engineering</option>
                  <option value="volvo">Literature / Linguistics</option>
                  <option value="volvo">Social Sciences / Social Study</option>
                  <option value="volvo">Vocational</option>
                  <option value="volvo">Physical Education</option>
                  <option value="volvo">Medicine & Health</option>
                  <option value="volvo">Mathematics</option>
                  <option value="volvo">Languages</option>
                </select>
              </div>
            </div>

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">Discipline :</p>{" "}
              </div>
              <div className="form-field1">
                <select className="input-text1" name="subjects" id="subjects">
                  <option value="volvo">
                    Computer / InformationTechnology
                  </option>
                  {/* <option value="volvo">Computer & Engineering</option> */}
                  {/* <option value="volvo">Literature / Linguistics</option> */}
                  {/* <option value="volvo">Social Sciences / Social Study</option> */}
                  <option value="volvo">Vocational</option>
                  <option value="volvo">Physical Education</option>
                  <option value="volvo">Medicine & Health</option>
                  <option value="volvo">Mathematics</option>
                  <option value="volvo">Languages</option>
                  <option value="volvo">Hobbies</option>
                </select>
              </div>
            </div>

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course"> Description :</p>{" "}
              </div>
              <div className="form-field2">
                <textarea
                  className="input-desc"
                  placeholder="Start Typing Here..."
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">Term :</p>{" "}
              </div>
              <div className="form-field1">
                <select
                  className="input-text3"
                  name="subjects"
                  id="subjects"
                ></select>
              </div>
            </div>
            <div className="tab2">
              <hr />
              <FormFieldTwo />
            </div>

            <div className="tab2">
              <hr />
              <FormFieldThree />
            </div>

            <div className="tab2">
              <hr />
              <FormFieldFour />
            </div>

            <div className="tab2">
              <hr />
              <FormFieldFive />
            </div>

            <div className="tab2">
              <hr />
              <FormFieldSix />
            </div>
          </div>
          <div className="tab2">
            <hr />
            <FormFooter />
          </div>
        </div>
       
      </div>
      
    </>
  );
};

export default MiniHeader;
