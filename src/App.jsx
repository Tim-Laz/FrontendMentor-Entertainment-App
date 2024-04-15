import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Main from "./MainPage.jsx";
import { MediaProvider } from "./MediaContext.jsx";

export default function App() {
  const [category, setCategory] = useState("home");
  /* git */

  return (
    <MediaProvider>
      <div className="App">
        <Navbar category={category} setCategory={setCategory} />
        <Main category={category} />
      </div>
    </MediaProvider>
  );
}
