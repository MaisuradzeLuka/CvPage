import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";

import "react-toastify/dist/ReactToastify.css";
import CvPage from "./pages/CvPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/portfolio" element={<CvPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
