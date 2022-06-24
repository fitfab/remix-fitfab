# Setting the fitfab stack

## Styling: Tailwind CSS

I follow the remix docs for the best way to use Tailwind CSS.
Reference: [Tailwind CSS Remix guide](https://remix.run/docs/en/v1/guides/styling#tailwind-css)

Note: run `yarn generate:css` before running `yarn dev` to generate the CSS files.

## Apollo Client

Install following dependencies:

`yarn add @apollo/client graphql`

**@apollo/client**: This single package contains virtually everything you need to set up Apollo Client. It includes the in-memory cache, local state management, error handling, and a React-based view layer.

**graphql**: This package provides logic for parsing GraphQL queries.

1. Create a React context for Apollo Client.

Within the `app/context` directory, create a new file called `apolloClient.tsx` and add the following code:

```tsx
import { createContext } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const isBrowser = typeof document !== "undefined";

const initialState = isBrowser ? window.__INITIAL_STATE__ : {};

export function initApollo(ssrMode = true) {
  return new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache().restore(initialState),
    ssrMode,
  });
}

export default createContext(initialState);
```

Also add a `global.d.ts` at the root of the project with the following code to keep TypeScript happy:

```d.ts
declare global {
  interface Window {
    __INITIAL_STATE__: any;
  }
}
```

2. add the `__INITIAL_STATE__` to the `window` object in the `root.tsx` file.

```tsx
// bring the apoloo conetext
import ApolloContext from "./context/apolloClient";

// setup initial state
const initialState = React.useContext(ApolloContext);

// Then inject it to the window object
<script
  dangerouslySetInnerHTML={{
    __html: `window.__INITIAL_STATE__=${JSON.stringify(initialState).replace(
      /</g,
      "\\u003c"
    )};`,
  }}
/>;
```

View details in the file: [root.tsx](./app/root.tsx)

3. add ApolloProvider to the `entry.server.tsx` file. The ApolloProvider is used to inject the Apollo Client into the server. The Apollo Client is used to query the GraphQL server. See the file [entry.server.tsx](./app/entry.server.tsx) for more details.

4. add ApolloProvider to the `entry.client.tsx` file. See the file [entry.client.tsx](./app/entry.client.tsx) for more details.

5. Then consume the data from a page via useQuery from apollo Client

```tsx
// GrapQL query
const CLIENTS = gql`
  query {
    clients {
      id
      name
      location
      description
      technology
    }
  }`
 // route/page
 export default function Index() {
  // fetch data -- this will be fetch in the backend and in the client if ones  navigates
  // from the browser (SPA behavior)
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

`;
```
