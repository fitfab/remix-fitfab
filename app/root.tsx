import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

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
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex h-full justify-center">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
