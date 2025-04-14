import Blog from '@/pages/blog'
import Contacts from '@/pages/contacts'
import Hobbies from '../pages/hobbies'
import Homepage from '@/pages/homepage'
import NotFound from '@/pages/notFound'
import Photography from '@/pages/photography'
import Projects from '@/pages/projects'
import { Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}