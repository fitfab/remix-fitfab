import { NavLink } from "@remix-run/react";
export default function Index() {
  return (
    <div>
      <h1>clients</h1>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/clients">Clients</NavLink>
      </nav>
      {["artnet", "HudsonBay", "CitiBank", "Equinox"].map((client, i) => (
        <p key={i}>-- {client}</p>
      ))}
    </div>
  );
}
