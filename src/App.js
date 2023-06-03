import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contac from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Login_SignUp from "./Components/Login_signUp/Login_SignUp";
import MiniHeader from "./Components/Tools/MiniHeader";
import { AuthProvider } from "./AuthManagement/AuthContext";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contac />} />
          <Route path="/login" element={<Login_SignUp />} />
          <Route path="/tool" element={<MiniHeader />} />
          {/* <Route path="/tool" element={<AdministratorTools />} /> */}
          {/* <Route path="/tool" element={<SideNavBar />} /> */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
