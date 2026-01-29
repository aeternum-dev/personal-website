import { Link } from "react-router-dom";
import NetniteThumbnail from "@/assets/netnite_project_thumbnail.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Netnite",
      description: "Netnite is my passion project that I have been hard at work to bring to fruition. A comprehensive platform for connecting developers.",
      image: NetniteThumbnail,
      tags: ["React", "TypeScript", "Node.js"],
    },
  ];

  return (
    <main className="min-h-screen py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground mb-12">
          A collection of my work and passion projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-accent font-medium hover:underline inline-flex items-center gap-1"
                >
                  View Project »
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
