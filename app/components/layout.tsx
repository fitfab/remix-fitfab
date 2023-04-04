import React from "react";

export function Navigation({
  className,
  ...rest
}: React.AllHTMLAttributes<HTMLElement>) {
  const defaultStyles =
    "text-xl leading-[15px] text-white-200 font-black h-9 flex flex-grow items-end justify-end gap-4 relative";
  return <nav {...rest} className={`${defaultStyles} ${className}`} />;
}

export function Hero({
  className,
  children,
}: React.AllHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex justify-start mb-12 gap-6 pt-8  md:pt-14 text-dark-900 text-xl ${className}`}
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
    <footer className={`p-6 ml-16 text-white-200 mt-14 ${className}`} {...rest}>
      About Work (copy right)
    </footer>
  );
}
