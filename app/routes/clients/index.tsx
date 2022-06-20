import { NavLink, useLoaderData } from "@remix-run/react";
import { gql } from "@apollo/client";
import { initApollo } from "~/context/apolloClient";
const CLIENTS = gql`
  query {
    clients {
      id
      name
      location
      description
      technology
    }
  }
`;

export const loader = async () => {
  const apolloClient = initApollo(true);
  const res = await apolloClient.query({ query: CLIENTS });
  console.log("res: ", res);

  return res;
};

export default function Index() {
  const data = useLoaderData();
  console.log("client: ", data);
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
