import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./component/NavBar";
import SubNav from "./component/SubNav";
import Footer from "./component/Footer";
import TrendingNow from "./component/TrendingNow";
import WatchItAgain from "./component/WatchItAgain";
import NewReleases from "./component/NewReleases";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNav />
      <TrendingNow />
      <WatchItAgain />
      <NewReleases />
      <Footer />
    </div>
  );
}

export default App;
