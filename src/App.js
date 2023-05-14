import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"
import Mockbee from "./Pages/MockBee/Mockbee"
import Footer from "./Components/Footer/Footer"
import "./App.css";


function App() {
  return (
    <>
      <Nav />
      <Routes>
      <Route path="/mockman" element={<Mockbee />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
