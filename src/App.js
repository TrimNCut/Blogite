import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Popular from "./pages/popular";
import Latest from "./pages/latest";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="home" element={<Home />}/>
        <Route exact path="popular" element={<Popular />}/>
        <Route exact path="latest" element={<Latest />}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;