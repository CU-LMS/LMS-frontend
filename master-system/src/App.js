import React from "react";
import { Route, Routes } from "react-router-dom";
import BulkUpload from "./Components/BulkUploda/BulkUpload";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar/Navbar2";
import CreateQuestion from "./Components/CreateQuestion/CreateQuestion";
import Find_viewQues from "./Components/Find_viewQues/Find_viewQues";
import Customize from "./Components/CustomizeTest/Customize";
import AssignTest from "./Components/AssignTest/AssignTest";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bulkUpload" element={<BulkUpload />} />
        <Route path="/create-question" element={<CreateQuestion />} />
        <Route path="/view-question" element={<Find_viewQues />} />
        <Route path="/review-question" element={<Find_viewQues />} />
        <Route path="/bulkUpload-psychometric" element={<BulkUpload />} />
        <Route path="/testmanagemet-customize" element={<Customize />} />
        <Route path="/testmanagemet-asignTest" element={<AssignTest />} />
      </Routes>
    </>
  );
}

export default App;
