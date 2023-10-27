import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./componenti/Navbar";
import MyFooter from "./componenti/Footer";
import Genres from "./componenti/Genres";
import Main from "./componenti/Main";

function App() {
  return (
    <div className="App bg-dark ">
      <MyNavbar />
      <Genres />
      <Main />
      <MyFooter />
    </div>
  );
}

export default App;
