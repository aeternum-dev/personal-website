import { Link } from "react-router-dom";

export default function ProjectPreviewCard({image, title, description, link, linkDescription}: {image: string, title: string, description: string, link: string, linkDescription: string}) {
  return (
    <div className="p-5 md:w-90">
        <img src={image} alt="project-thumbnail" className="bg-yellow-400 max:w-full" />
        <h1 className="text-2xl py-5">{title}</h1>
        <p className="py-5">{description}</p>
        <Link to={link}><p className="link hover:bg-blue-800 py-5">{linkDescription}</p></Link> 
    </div>
  )
}
