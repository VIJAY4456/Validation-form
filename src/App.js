import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./Components/Form";
import Details from "./Components/Details"; 
import "./Styles.css";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Navigate to="/form" />} />
      </Routes>
    </div>
  );
}

export default App;
