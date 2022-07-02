import React from "react";
/**
 * Internal component only consume by Carousel
 **/
export const Button = ({
  className = "js_CarouselButton",
  ...rest
}: JSX.IntrinsicElements["button"]) => {
  const btnClasses =
    "flex justify-center items-center absolute bottom-[0px] w-8 h-8 border-[1px] border-neutral-700 rounded-full transition-all duration-300 ease-linear";
  return <button className={`${btnClasses} ${className}`} {...rest} />;
};

export const CarouselWrapper = ({
  className = "js_CarouselWrapper",
  ...rest
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={`${className} w-full overflow-x-visible relative`}
      {...rest}
    />
  );
};

export const Viewport = ({
  className = "js_Viewport",
  ...rest
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={`${className} w-full relative overflow-x-scroll sm:overflow-visible`}
      {...rest}
    />
  );
};

export const Navigation = ({
  className = "js_CarouselNavigation",
  ...rest
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={`${className} relative h-14 mt-10 border-neutral-200 border-t-[1px] hidden sm:block`}
      {...rest}
    />
  );
};

export const ScrollIndicator = React.forwardRef(
  (
    { className = "js_Slider", ...rest }: JSX.IntrinsicElements["div"],
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className="py-2 absolute top-[-10px] transition-all duration-500 ease-out cursor-default"
        ref={ref}
        {...rest}
      >
        <div className={`bg-black h-[3px] w-full`}></div>
      </div>
    );
  }
);
ScrollIndicator.displayName = "ScrollIndicator";

export const Slider = React.forwardRef(
  (
    { className = "js_Slider", ...rest }: JSX.IntrinsicElements["div"],
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={`flex flex-row w-fit absolute top-0 left-0 bottom-0 transition-all duration-500 ease-out ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

Slider.displayName = "Slider";
