import "./App.css";
import MyHeader from "./Components/Header";
import MyNav from "./Components/Nav";
import MyAside from "./Components/Aside";
import MyMain from "./Components/Main";
import MySearchBar from "./Components/SearchBar";

//Ovo je wrapper u koji se sve komponente salju i u kojem se one slazu.
function App() {
  return (
    <div className="container_column" id="App">
      <MyNav />
      <MyHeader />
      <MySearchBar />
      <div className="container_row" id="aside_main">
        <MyAside />
        <MyMain />
      </div>
    </div>
  );
}

export default App;
