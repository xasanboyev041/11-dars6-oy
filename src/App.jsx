import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SinglePage from "./components/Single";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/single" element={<SinglePage />} />
    </Routes>
  );
}

export default App;
