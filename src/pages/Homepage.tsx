import ProjectPreviewCard from "@/components/ProjectPreviewCard";
import NetniteThumbnail from "@/assets/netnite_project_thumbnail.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

export default function Homepage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 px-5 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto md:flex md:flex-row md:gap-16 md:items-start">
          {/* Introduction */}
          <div className="introduction md:flex-1 mb-12 md:mb-0">
            <h1 className="font-medium text-2xl md:text-3xl italic leading-relaxed text-foreground">
              This site is my thesis, as well as your introduction to my work and values.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Among others you'll find personal info here about Books, Papers, Films and Programs I find interesting.
              You can also learn software development and kinds of tech from me during my Courses that I stream on Twitch, 
              or you can reach out to me via Contacts and have private sessions or just talk.
            </p>
          </div>

          {/* Projects Section */}
          <div className="project-cards md:flex-1">
            {/* Section Divider */}
            <div className="flex items-center mb-8">
              <div className="w-8 border-t border-muted-foreground/40"></div>
              <span className="flex-shrink-0 mx-4 text-muted-foreground font-medium text-sm uppercase tracking-wider">
                Latest projects
              </span>
              <div className="flex-grow border-t border-muted-foreground/40"></div>
            </div>

            {/* Project Carousel */}
            <div className="max-w-md mx-auto">
              <Carousel>
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={index}>
                      <ProjectPreviewCard
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        linkDescription={project.linkDescription}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
