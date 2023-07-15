import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Slide from "./components/Slide";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/slide" element={<Slide />}></Route>
      </Routes>
    </div>
  );
}

export default App;
