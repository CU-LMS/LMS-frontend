import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom/client";
import "./FAQs.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { readFAQData } from "../../redux/slices/courses/coursesActions";
import Spinner from "../Spinner/Spinner";
// import ReactHtmlParser from "react-html-parser";

export default function FAQs() {
  // const [expanded, setExpanded] = (false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readFAQData());
  }, []);
  const FAQsList = useSelector((state) => state.courseState.FAQList);
  const loadingState = useSelector(state => state?.dashboardState?.spinner);
  console.log("FAQQQQQ", FAQsList);
  return (
    <>
    {loadingState && <Spinner />}
      <div class="container">
        <div style={{}}>
          <div class="section-header text-center ">
            <h2>Frequently Asked Questions</h2>
            <div class="inner-text text-center">
              <p>Chandigarh University CU-DigiClass </p>
            </div>
          </div>
          {FAQsList &&
            FAQsList.map((FAQ) => (
              <Accordion style={{ color: green, boxSizing: "border-box" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography
                    style={{
                      fontWeight: 10,

                    }}
                  >
                    {FAQ.question}
                  </Typography>
                </AccordionSummary>

                {FAQ.faqAnswers &&
                  FAQ.faqAnswers.map((Ans) => (
                    <AccordionDetails>
                      <Typography style={{ color: "#680000", backgroundColor: "#919DB7", width: "100%", height: "100px" }}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: Ans.answer
                              .replace(/<p>/g, "")
                              .replace(/<\/p>/g, ""),
                          }}
                        />
                        {/* Displaying href tags */}
                        {Ans.answer.match(/href="/g) &&
                          Ans.answer.match(/href="/g).map((href, index) => (
                            <div key={index}>
                              href:{" "}
                              <span className="black-href">
                                {Ans.answer.substring(
                                  Ans.answer.indexOf(href) + href.length,
                                  Ans.answer.indexOf(
                                    '"',
                                    Ans.answer.indexOf(href) + href.length
                                  )
                                )}
                              </span>
                            </div>
                          ))}
                      </Typography>
                    </AccordionDetails>
                  ))}
              </Accordion>
            ))}
        </div>
      </div>
    </>

  );
}
