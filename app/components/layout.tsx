import React from "react";

export function Navigation({
  className,
  ...rest
}: React.AllHTMLAttributes<HTMLElement>) {
  const after =
    " after:content-[' '] after:absolute after:w-2 after:bg-red after:h-9 after:right-[-8px] after:bottom-[-36px]";
  const defaultStyles =
    "border-t-8 border-r-8 text-xl leading-[15px] border-red text-dark-900 font-black h-9 flex flex-grow items-end justify-end gap-4 px-4 relative";
  return <nav {...rest} className={`${defaultStyles} ${after} ${className}`} />;
}

export function Hero({
  className,
  children,
}: React.AllHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex justify-end mb-12 gap-6  pt-14 pr-6 border-red border-r-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function Footer({
  className,
  ...rest
}: React.AllHTMLAttributes<HTMLElement>) {
  return (
    <footer className={`bg-red p-6 text-white mt-14 ${className}`} {...rest}>
      About Work (copy right)
    </footer>
  );
}
