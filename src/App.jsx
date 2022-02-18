import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import AlertState from "./context/alert/AlertState";
import FirebaseState from "./context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path={"/"} exact element={<Home />} />
              <Route path={"/about"} element={<About />} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
