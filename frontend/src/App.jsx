import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MenuSelection from "./pages/MenuSelection";
import MenuPreview from "./pages/MenuPreview";
import ReviewMenu from "./pages/ReviewMenu.jsx";
import BrandIntro from "./components/BrandIntro";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/menu" element={<MenuSelection />} />
        <Route path="/view-menu" element={<MenuPreview />} />
        <Route path="/review" element={<ReviewMenu />} />
        <Route path="/intro" element={<BrandIntro />} />
      </Routes>
    </BrowserRouter>
  );
}
