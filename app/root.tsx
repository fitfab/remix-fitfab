import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Footer, Logo, Navigation } from "~/components/index";

/**
 *
 * This  is the root layout (root route) of your app. This file is required.
 * ref: https://remix.run/docs/en/v1/api/conventions#root-layout-route
 */

// Imports Tailwind CSS generated styles
import styles from "./styles.css";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

const year = new Date().getFullYear();

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "fitfab - miguel julio - front-end developer",
  description:
    "miguel julio front-end developer, programming, web production, front end developer, reactjs developer, search engine optimization, HTML5, CSS/CSS3, JavaScript, Reactjs, Nodejs, Nextjs, Remix-run, Redux, Webpack, vitejs, JSON, ES6, Typescript, GraphQL. Established in New York City, 1999",
  keywords:
    "professional web development, front-end-web-developer, Library-ui developer, web standard compliant, user experience design, web page design services,front-end developer, intranet web development,corporate web-developer consultants,website development,web page design,small business websites,corporate websites,best web-developer, react-developer, HTML5, SaSS/CSS3, tailwindcss, styled-components, nextjs, remix-run, JavaScript, Typescript, Reactjs, Nodejs, Redux, Webpack, vitejs, storybook, JSON, GraphQL, ES6, FITFAB by miguel julio, web-developer new york city, miguel julio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const beforeClass =
    "before:content[' '] before:outline-[10vw] before:p-12 before:absolute before:left-[-100%] before:right-[calc(100%)] before:top-0 before:bottom-0 before:bg-dark-600/95 before:z-40 before:border-r-[16px] before:border-dark-600";
  return (
    <html lang="en" className=" overflow-x-hidden bg-dark-600">
      <head>
        <Meta />
        <Links />
        <link rel="preload" href="Mona-Sans.woff2" as="font" type="font/woff2" crossOrigin="true" />
      </head>
      <body className="flex items-center justify-center min-h-screen w-full relative overflow-hidden">
        <div
          className={`flex items-start justify-center flex-col min-w-[320px] h-[100vh] max-w-6xl w-full bg-white  p-4 relative ${beforeClass}`}
        >
          <header className="flex place-content-between gap-2 w-full">
            <Link
              to="/"
              aria-label="Home"
              // className="absolute left-[-306px] z-50"
            >
              <Logo height="64px" />
            </Link>

            <Navigation>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-brand" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) => (isActive ? "text-brand" : "")}
              >
                Work
              </NavLink>
            </Navigation>
          </header>
          <Outlet />
          <Footer />
          <strong className="font-black text-8xl text-white-200 rotate-90 translate-x-[-92px] block">
            {year}
          </strong>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
