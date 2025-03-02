import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import Congrats from "./components/Congrats";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/congrats/:sender/:recipient" element={<Congrats />} />
      </Routes>
    </Router>
  );
};

export default App;
