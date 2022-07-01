import React from "react"
 import SignUp from "./Components/SignUp";
import './App.css';
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
 import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
import Classes from "./Components/Classes";
import Home from "./Components/Home";
import Students from "./Components/Students";
import Challan1 from "./Components/Challan1";
import GetClasses from "./Components/GenerateChallanClass"
import Records from "./Components/SelectMode";
import DisplayChallan from "./Components/DisplayChallan";
function App() {
  return (
    <div className="App">
      {/* <Records/> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Create-Class" element={<Classes />} />
          <Route path="/Create-Challan" element={<Challan1/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/Create-Students" element={<Students />} />
          <Route path="/display-challan" element={<DisplayChallan/>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


       

// import React from "react";
// import "./App.css";
// import Login from "./pages/Login/index";
// import Home from "./router";
// import SignUp from "./pages/SignUp/index";
// import { Route, Switch, Redirect } from "react-router-dom";
// function App() {
//   const token = localStorage.getItem("token");
//   return (
//     <div className="App">
//       <Switch>
//         {token ? (
//           <Home />
//         ) : (
//           <>
//             <Route exact path="/" component={Login} />
//             <Route exact path="/login" component={Login} />
//             <Route path="/signup" component={SignUp} />
//             <Route path="**" component={Login} />
//           </>
//         )}
//         {console.log("sdfsdfsdfsdf")}
//         <Route render={() => <Login />} />
//         <Redirect to={"/*"} />
//       </Switch>
//     </div>
//   );
// }
// export default App;

