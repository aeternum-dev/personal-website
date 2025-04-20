import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectPreviewCard from "@/components/projectPreviewCard";
import NetniteThumbnail from "@/assets/netnite_project_thumbnail.png";
import GuitarChargedThumbnail from "@/assets/guitar_charged_thumbnail.png";

export default function Homepage() {
  return (
    <section>
      <section className="pt-20 md:flex md:flex-row md:px-20">
        <div className="introduction px-20 my-auto">
          <h1 className="font-medium text-2xl italic">
            This site is my thesis and your introduction to what I do and think
            in this world.
          </h1>
        </div>
        <div className="project-cards w-[60%] mx-auto">
          <p className="text-white">Latest projects...</p>

          <Carousel className=" mx-auto">
            <CarouselContent className="">
              <CarouselItem>
                <ProjectPreviewCard
                  image={NetniteThumbnail}
                  title={"Netnite"}
                  description={
                    "Netnite is my passion project that I have been hard at working to bring to fruition."
                  }
                  link={"/blog"}
                  linkDescription={"Learn more »"}
                />
              </CarouselItem>
              <CarouselItem>
                <ProjectPreviewCard
                  image={GuitarChargedThumbnail}
                  title={"GuitarCharged"}
                  description={
                    "An innovative application to aid you learn the guitar. Guitarcharged uses AI to make hearing out, remembering and playing chords and songs easy."
                  }
                  link={"/blog"}
                  linkDescription={"Learn more »"}
                />
              </CarouselItem>
              <CarouselItem>
                <ProjectPreviewCard
                  image={NetniteThumbnail}
                  title={"MÜZLI"}
                  description={
                    "Hungary's newest startup incubator programme, aiming to bring the culture of innovation into our campuses. [quantify how big müzli is with numbers]. I am the leading contributor behind MÜZLI's website."
                  }
                  link={"/blog"}
                  linkDescription={"Learn more »"}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </section>
  );
}
