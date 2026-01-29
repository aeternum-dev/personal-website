import { Link } from "react-router-dom";

interface ProjectPreviewCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkDescription: string;
}

export default function ProjectPreviewCard({
  image,
  title,
  description,
  link,
  linkDescription,
}: ProjectPreviewCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="font-bold text-xl text-card-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          to={link}
          className="text-accent font-medium hover:underline inline-flex items-center gap-1"
        >
          {linkDescription}
        </Link>
      </div>
    </div>
  );
}
