import { Carousel, Card, WorkCard, Footer, Hero } from "~/components/index";

export default function Index() {
  return (
    <div className="">
      <Hero>
        <div
          className="bg-dark-500/75 w-48 h-48 p-2 flex justify-center items-center"
          style={{ borderRadius: "30% 70% 70% 30% / 42% 41% 59% 58% " }}
        ></div>
        <p className="font-light text-base text-justify tracking-wide  w-1/2">
          I am a Front-End Web Developer with a flair for design — committed to
          create websites that meet design and technical requirements —
          including SEO, Usability and accessibility based on web standards
          guidelines.
          <em className="text-base block mt-4">
            Miguel Julio{" "}
            <a
              className="text-blue underline underline-offset-1"
              href="mailto:mjulio.developer@gmail.com"
            >
              mjulio.developer@gmail.com
            </a>
          </em>
        </p>
      </Hero>
      <h2 className=" text-2xl mb-4 font-black tracking-wide text-dark-500">
        Work
      </h2>

      <Carousel className=" w-full">
        <WorkCard
          companyShortName="artnet"
          companyName="Artnet Worldwide Corporation"
          caption="Tech stack"
        />
        <WorkCard
          companyShortName="HBC"
          companyName="Hudson's Bay Company"
          caption="Tech stack"
        />
        <WorkCard
          companyShortName="Citibank"
          companyName="Citigroup Private Bank"
          caption="Tech stack"
        />
        <WorkCard
          companyShortName="Equinox"
          companyName="Equinox Fitness"
          caption="Tech stack"
        />
        <WorkCard
          companyShortName="Equinox"
          companyName="Equinox Fitness"
          caption="Tech stack"
        />
        <WorkCard
          companyShortName="Equinox"
          companyName="Equinox Fitness"
          caption="Tech stack"
        />
      </Carousel>
    </div>
  );
}
