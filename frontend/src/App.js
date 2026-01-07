import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trips" element={<Trips/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
