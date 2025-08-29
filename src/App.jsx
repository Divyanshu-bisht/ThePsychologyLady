import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import "./App.css";
import Footer from "../components/footer/footer";
import Services from "../pages/services/Services";
import Cursor from "../components/cursor/Cursor";


function App() {
  return (
    <Router>
      <Cursor/>
      <div className="main">
        {/* Menu shows on ALL pages */}
        <Header/>
        <Navbar />
        <Menu />

        <div className="content">
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;