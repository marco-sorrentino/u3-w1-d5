import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import SubNav from "./component/SubNav";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNav />
      <Footer />
    </div>
  );
}

export default App;
