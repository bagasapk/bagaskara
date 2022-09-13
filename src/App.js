import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home2 from "./pages/Home2";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/version2" element={<Home2 />} /> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
