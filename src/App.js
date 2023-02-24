import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import Cart from "./pages/cart";
import Game from "./pages/game";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({ duration: 1000, });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/game/:game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
