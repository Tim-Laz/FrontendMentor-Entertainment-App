// import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Main from "./MainPage.jsx";
import "./App.css";
import { MediaProvider } from "./MediaContext.jsx";

export default function App() {
  return (
    <MediaProvider>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </MediaProvider>
  );
}
