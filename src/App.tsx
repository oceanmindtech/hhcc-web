import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { HistoryPage } from "./pages/HistoryPage";
import { FaithPage } from "./pages/FaithPage";
import { GuidelinesPage } from "./pages/GuidelinesPage";
import { WorshipPage } from "./pages/WorshipPage";
import { MinistriesPage } from "./pages/MinistriesPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/faith" element={<FaithPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/worship" element={<WorshipPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}