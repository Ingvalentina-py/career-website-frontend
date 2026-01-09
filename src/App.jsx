import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
