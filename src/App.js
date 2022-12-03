import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Terminal from "./pages/Terminal/Terminal";
import "./App.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collection/:id" element={<Terminal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
