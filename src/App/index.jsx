import Navbar from "../Components/Navbar";
import Main from "../Pages/MainPage";
import { MediaProvider } from "../MediaContextReducer.jsx";
import { useCategory } from "../useCategory.js";

export default function App() {
  const category = useCategory();

  return (
    <MediaProvider>
      <div className="App">
        <Navbar category={category} />
        <Main category={category} />
      </div>
    </MediaProvider>
  );
}
