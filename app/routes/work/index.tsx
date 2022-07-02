import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";

import { graphqlClient } from "~/lib/graphqlClient";

const CLIENTS = gql`
  query (
    $first: Int
    $skip: Int
    $where: ClientWhereInput
    $orderBy: ClientOrderByInput
  ) {
    clients(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
      name
      description
      technology
      location
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

export type LoaderData = {
  data: { clients: Client[] };
  errors?: any[];
};
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
          className="mt-4 border-solid border-[1px]  border-gray-300 p-4 rounded-lg w-[48%]"
        >
          <h2 className="text-2xl font-extralight">
            {client.name}{" "}
            <em className="inline-block ml-9 text-neutral-500">
              {client.location}
            </em>
          </h2>
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

export const loader: LoaderFunction = async (): Promise<any> => {
  const variables = {
    first: 25,
    skip: 0,
    orderBy: "endDate_DESC",
  };
  const data: LoaderData = await graphqlClient.request(CLIENTS, variables);
  return json(data);
};

export default function Index() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <h1>Work</h1>
      <RenderClients
        className="mt-6 flex flex-wrap gap-6"
        clients={data.clients}
      />
    </>
  );
}
