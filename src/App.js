// Importing libraries

// Importing components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

// Importing assets
import { ReactComponent as Logo } from "./assets/images/Abstract_Wordmark-White.svg";

// Importing style
import "./App.css";

function App() {
  return (
    <div className="App">
      Abstract website
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
