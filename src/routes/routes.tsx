import { Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Blog from "@/pages/Blog";
import Projects from "@/pages/Projects";
import Photography from "@/pages/Photography";
import Contact from "@/pages/Contact";
import Books from "@/pages/Books";
import Guitar from "@/pages/Guitar";
import Poetry from "@/pages/Poetry";
import TikTokVideos from "@/pages/TikTokVideos";
import People from "@/pages/People";
import Papers from "@/pages/Papers";
import Websites from "@/pages/Websites";
import Tools from "@/pages/Tools";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/books" element={<Books />} />
      <Route path="/guitar" element={<Guitar />} />
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/tiktok-videos" element={<TikTokVideos />} />
      <Route path="/people" element={<People />} />
      <Route path="/papers" element={<Papers />} />
      <Route path="/websites" element={<Websites />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
