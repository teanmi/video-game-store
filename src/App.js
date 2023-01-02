import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home"
import Search from "./pages/search"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search />}/>
      </Routes>
    </Router>
  );
}

export default App;
