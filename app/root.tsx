import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
  Link,
} from "@remix-run/react";

import Logo from "~/components/Logo";

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
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex items-start justify-center min-h-screen w-full mt-12 relative overflow-hidden">
        <div className="min-w-[320px] max-w-6xl w-full">
          <header className="flex gap-6 mb-14">
            <Link to="/" aria-label="Home">
              <Logo />
            </Link>

            <nav className="bg-[#262626] text-white h-12 flex flex-grow items-center justify-end gap-6 pr-6 after:content-[''] after:absolute after:right-0 after:h-12 after:bg-[#262626] after:z-[-1] after:left-1/2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/work">Work</NavLink>
            </nav>
          </header>

          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
