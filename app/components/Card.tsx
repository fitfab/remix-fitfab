export function Card() {
  return (
    <div className="w-[320px] bg-white overflow-hidden md:w-[640px]">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48 rounded-[30%_70%_70%_30%_/_42%_41%_59%_58%]"
            src="/media/univision.png"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-slate-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export type ImageProps = {
  url: string;
  title: string;
  height: string;
  width: string;
};

export interface WorkCardProps {
  className?: string;
  technology?: string[];
  name?: string;
  description?: string;
  location: string;
  media: ImageProps;
}

export function WorkCard({
  className,
  name,
  location,
  description,
  media,
  technology,
  ...rest
}: WorkCardProps) {
  return (
    <div
      className={`card max-w-xs md:max-w-lg bg-secondary ${className}`}
      {...rest}
    >

      <div className="card-body">
      {name && (
        <h2 className="card-title text-neutral text-2xl font-black mb-2 tracking-wide">{name}</h2>
      )}
      <p className="text-base font-light">{description}</p>
      <div className="overflow-hidden flex flex-wrap gap-2  mt-4">
        {technology!.map((tech, index) => (
          <div
            key={index}
            className="badge badge-accent badge-outline p-[4px_12px]"
          >
            {tech}
          </div>
        ))}
      </div>
</div>

    </div>
  );
}
