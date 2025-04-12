import Blog from '@/pages/blog'
import Contacts from '@/pages/contact'
import Hobbies from '@/pages/hobbies'
import Homepage from '@/pages/homepage'
import NotFound from '@/pages/notFound'
import Photography from '@/pages/photography'
import Projects from '@/pages/projects'
import { createBrowserRouter } from 'react-router-dom'

export default function routes() {
  return (
    <div>routes</div>
  )
}


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <NotFound />,
        children: [
            {  path: "/blog", element: <Blog /> },
            {  path: "/contacts", element: <Contacts /> },
            {  path: "/hobbies", element: <Hobbies /> },
            {  path: "/photography", element: <Photography /> },
            {  path: "/projects", element: <Projects /> }
        ]
    }]);