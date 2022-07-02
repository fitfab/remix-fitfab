import { Carousel } from "~/components/carousel/Carousel";
export default function Index() {
  return (
    <div>
      <div className=" mb-12 w-1/2">
        <p>
          I am a Front-End Web Developer with a flair for design — committed to
          create websites that meet design and technical requirements —
          including SEO, Usability and accessibility based on web standards
          guidelines.
        </p>
        <p>Miguel Julio</p>
      </div>
      <h2 className=" text-2xl mb-4">Work</h2>

      <Carousel className=" w-full">
        <div className="bg-neutral-500 text-center font-extrabold text-9xl text-white h-full w-[480px]">
          hello world
        </div>
        <div className=" bg-slate-600 text-center text-9xl font-extrabold text-white h-full w-[780px]">
          work
        </div>
        <div className="bg-violet-900 text-center text-9xl font-extrabold text-white h-full w-[480px]">
          have fun
        </div>
        <div className=" bg-orange-700 text-center text-9xl font-extrabold text-white h-full w-96">
          Dream
        </div>
        <div className="bg-blue-900 text-center text-9xl font-extrabold text-white h-full w-96">
          Be present
        </div>
      </Carousel>
    </div>
  );
}
