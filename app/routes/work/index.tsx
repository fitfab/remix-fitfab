import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { Carousel, Hero, WorkCard } from "~/components";

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
      media {
        url
        title
        height
        width
      }
    }
  }
`;
export interface Media {
  url: string;
  title: string;
  height: string;
  width: string;
}
export interface Client {
  name: string;
  description: string;
  id: string;
  location: string;
  technology: string[];
  media: Media;
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

function RenderCarousel(props: RenderClientProps) {
  const { clients, className } = props;
  if (!clients) {
    return null;
  }

  return (
    <Carousel className={className} height="small">
      {clients.map((client, index) => (
        <WorkCard key={index} {...client} />
      ))}
    </Carousel>
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

  return (
    <div>
      <Hero>
        <p className="text-justify font-extralight md:w-2/3">
          Front-End Web Developer with a flair for design — committed to create
          websites that meet design and technical requirements — including SEO,
          Usability and accessibility based on web standards guidelines.
        </p>
      </Hero>
      <h2 className="uppercase text-2xl mb-4 font-black tracking-wide text-dark-800">
        Work History
      </h2>
      <RenderCarousel className="mt-4 mb-4" clients={data.clients} />
    </div>
  );
}
