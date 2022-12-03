import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Terminal from "./pages/Terminal/Terminal";
import "./App.scss";
import Portfolio from "./pages/Portfolio/Portfolio";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collection/:id" element={<Terminal />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
