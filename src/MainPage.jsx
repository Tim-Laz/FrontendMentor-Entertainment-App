import SearchBar from "./SearchBar.jsx";
import Content from "./Content.jsx";

export default function Main({ category }) {
  return (
    <main className="main">
      <SearchBar category={category} />
      <Content category={category} />
    </main>
  );
}
