import React from "react";
import Header from "./notes/Nav";
import Home from "./notes/Home";
import CreateNote from "./notes/CreateNote";
import EditNote from "./notes/EditNote";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Notes( {setIsLogin} ) {
  return (
    <Router>
    <div className="notes-page">
      <Header setIsLogin={setIsLogin} />
      <Home/>
      <CreateNote/>
      
    </div>
    </Router>
  );
}
