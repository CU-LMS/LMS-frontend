import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom/client';
import "./FAQs.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import {readFAQData} from "../../redux/slices/courses/coursesActions"


export default function FAQs() {    
    
    const [expanded, setExpanded] = React.useState<string | false>(false);

   
      
    const dispatch = useDispatch();
      useEffect(() => {
        dispatch(readFAQData());
      }, []);
      const FAQsList = useSelector((state) => state.courseState.FAQList);
    return (
        <div class="container">
        <div style={{}}>

           <div class="section-header text-center ">
                    <h2>Frequently Asked Questions</h2>
                    <div class="inner-text text-center">
                        <p>Chandigarh University CU-DigiClass </p>
                    </div>
            </div>
            {FAQsList && FAQsList.map(FAQ =>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ color:green,boxSizing:"border-box" }}>
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
            {FAQ.faqAnswers && FAQ.faqAnswers.map(Ans =>
            <AccordionDetails>
                
              <Typography>
                <div>{Ans.answer}</div></Typography>
            </AccordionDetails>
            )}
          </Accordion>
            )}
        </div>
        </div>
      );
};