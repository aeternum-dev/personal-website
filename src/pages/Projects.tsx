import ProjectPreviewCard from "@/components/ProjectPreviewCard";
import NetniteThumbnail from "@/assets/netnite_project_thumbnail.png";

const projects = [
  {
    title: "MÜZLI",
    description: "Hungary's newest startup incubator programme, aiming to bring the culture of innovation into our campuses. [quantify how big müzli is with numbers]. I am the leading contributor behind MÜZLI's website.",
    link: "/projects",
    linkDescription: "Learn more »",
    image: NetniteThumbnail,
  },
  {
    title: "GuitarCharged",
    description: "An innovative application to aid you learn the guitar. Guitarcharged uses AI to make hearing out, remembering and playing chords and songs easy.",
    link: "/projects",
    linkDescription: "Learn more »",
    image: NetniteThumbnail,
  },
  {
    title: "Netnite",
    description: "Netnite is my passion project that I have been hard at work to bring to fruition.",
    link: "/projects",
    linkDescription: "Learn more »",
    image: NetniteThumbnail,
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground mb-12">
          A collection of my work and contributions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectPreviewCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              linkDescription={project.linkDescription}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
