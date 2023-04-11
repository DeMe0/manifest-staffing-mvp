import "./App.css";
import "./App-responsive.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
