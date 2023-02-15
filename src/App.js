import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./component/NavBar";
import SubNav from "./component/SubNav";
import Footer from "./component/Footer";
import TrendingNow from "./component/TrendingNow";
import WatchItAgain from "./component/WatchItAgain";
import NewReleases from "./component/NewReleases";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TvShows from "./component/TvShows";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SubNav />

        <Routes>
          <Route path="/" element={<TrendingNow />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/film/:filmId/" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
