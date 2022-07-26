// Importing libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer";

// Importing style
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
