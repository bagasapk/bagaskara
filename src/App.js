import "./sass/App.scss";
import { Routes, Route } from "react-router-dom";
import HomeV2 from "./pages/HomeV2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home2 from "./pages/Home2";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeV2 />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
