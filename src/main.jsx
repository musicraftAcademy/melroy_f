import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import Projects from "./pages/Projects.jsx";
import Gallery from "./pages/Gallery.jsx";
import Tracks from "./pages/Tracks.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/nav" element={<Navigation />} />
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
				<Route path="/tracks" element={<Tracks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/test" element={<Footer />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
