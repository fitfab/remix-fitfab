import { NavLink } from "@remix-run/react";
import { gql, useQuery } from "@apollo/client";
// import { initApollo } from "~/context/apolloClient";
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

export interface Client {
  name: string;
  description: string;
  id: string;
  location: string;
  technology: string[];
  __typename: string;
}

export interface RenderClientProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  clients: Client[];
}

function RenderClients(props: RenderClientProps) {
  const { clients, className } = props;
  if (!clients) {
    return null;
  }

  return (
    <div className={className}>
      {clients.map((client, index) => (
        <div
          key={index}
          className="mt-4 border-solid border-[1px]  border-gray-300 p-4 rounded-lg"
        >
          <h2 className="text-lg">{client.name}</h2>
          <p className="mb-4">{client.description}</p>
          {client.technology.map((tech, index) => (
            <span
              key={index}
              className="rounded-full p-[4px_12px] mr-2 bg-emerald-500 text-cyan-50 inline-block"
            >
              {tech}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Index() {
  const { data, loading, error } = useQuery(CLIENTS);

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="h-[100vh] max-w-5xl">
      <h1>clients</h1>
      <nav className="bg-gradient-to-l from-cyan-500 to-blue-500">
        <NavLink to="/">Home</NavLink> | <NavLink to="/work">Work</NavLink>
      </nav>
      <blockquote>hello</blockquote>
      <RenderClients className="mt-6" clients={data.clients} />
    </div>
  );
}
