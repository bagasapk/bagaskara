import Footer from "./components/Footer";
import NavbarV3 from "./components/navbar/NavbarV3";
import NavProvider from "./context/NavContext";
import Portfolio from "./pages/Portfolio";
import "./styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Portfolio></Portfolio>,
    },
  ]);

  return (
    <div className="App">
      <NavProvider>
        <NavbarV3 router={router}></NavbarV3>
        <RouterProvider router={router}></RouterProvider>
      </NavProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
