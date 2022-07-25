// Importing libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero";

// Importing assets
// import { ReactComponent as Logo } from "./assets/images/Abstract_Wordmark-White.svg";

// Importing style
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
