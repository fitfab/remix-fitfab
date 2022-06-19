import { NavLink } from "@remix-run/react";
export default function Index() {
  return (
    <div className="h-[100vh] max-w-5xl">
      <h1>clients</h1>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/clients">Clients</NavLink>
      </nav>
      <blockquote>hello</blockquote>
      {["artnet", "HudsonBay", "CitiBank", "Equinox"].map((client, i) => (
        <p key={i}>-- {client}</p>
      ))}
    </div>
  );
}
