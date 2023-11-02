import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./componenti/Navbar";
import MyFooter from "./componenti/Footer";
import Genres from "./componenti/Genres";
import MyTvShows from "./componenti/TVShows";
import Main from "./componenti/Main";
import MovieDetails from "./componenti/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark ">
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Genres />
                <Main />
              </div>
            }
          />
          <Route path="/tvshows" element={<MyTvShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
