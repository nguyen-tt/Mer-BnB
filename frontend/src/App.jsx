import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
