import { NavLink } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>fitfab</h1>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/clients">Clients</NavLink>
      </nav>
      <p>
        Front-End Web Developer with a flair for design — committed to create
        websites that meet design and technical requirements — including SEO,
        Usability and accessibility based on web standards guidelines.
      </p>
    </div>
  );
}
