import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ArtSection from "./components/ArtSection";
import ProjectsSection from "./components/ProjectsSection";
import CatSection from "./components/CatSection";
import Footer from "./components/Footer";
import WriteupsPage from "./pages/WriteupsPage";
import WriteupDetail from "./pages/WriteupDetail";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ProjectsSection />
      <ArtSection />
      <CatSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/delmii-page">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writeups" element={<WriteupsPage />} />
          <Route path="/writeups/:id" element={<WriteupDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
