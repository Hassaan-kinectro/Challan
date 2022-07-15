import React from "react";
import './App.css';
 import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Dashboard from "./pages/dashboard";
import CreateClassPage from "./pages/Class";
import CreateStudentPage from "./pages/student";
import GeneratedChallan from "./pages/challan/generatechallan";
import DisplayChallanTable from "./pages/challan/displaychallan";
import UpdatedChallan from "./pages/challan/updatechallan";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/create-class" element={<CreateClassPage />} />
          <Route path="/add-student" element={<CreateStudentPage />} />
          <Route path="/create-challan" element={<GeneratedChallan />} />
          <Route path="/display-challan" element={<DisplayChallanTable />} />
          <Route path="/update-challan" element={<UpdatedChallan />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;


       

