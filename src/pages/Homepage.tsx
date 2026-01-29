import ProjectPreviewCard from "@/components/ProjectPreviewCard";
import NetniteThumbnail from "@/assets/netnite_project_thumbnail.png";

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

            {/* Project Card */}
            <div className="max-w-md mx-auto">
              <ProjectPreviewCard
                image={NetniteThumbnail}
                title="Netnite"
                description="Netnite is my passion project that I have been hard at work to bring to fruition."
                link="/projects"
                linkDescription="Learn more »"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
