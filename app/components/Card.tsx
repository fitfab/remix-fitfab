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

export interface WorkCardProps extends React.AllHTMLAttributes<HTMLElement> {
  companyShortName?: string;
  companyName?: string;
  caption?: string;
  imgUrl?: string;
}

export function WorkCard({
  className,
  companyName,
  companyShortName,
  imgUrl = "orange",
  caption,
  ...rest
}: WorkCardProps) {
  return (
    <div className={`flex flex-col gap-2 max-w-md ${className}`} {...rest}>
      <div
        className={`flex items-end justify-start text-white h-72 w-72 text-4xl overflow-hidden`}
      >
        <img
          className="object-contain"
          src="/media/mcd.svg"
          alt="Man looking at item at a store"
        />
      </div>
      {companyName && <p className="text-dark-900">{companyName}</p>}
      {caption && <p className="text-dark-500">{caption}</p>}
    </div>
  );
}
