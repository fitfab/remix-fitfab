import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { initApollo } from "./context/apolloClient";
/**
 * This is your entry into the browser rendering/hydration
 * piece of Remix. This file is required.
 * This is the first piece of code that runs in the browser.
 * As you can see, you have full control here.
 * You can initialize client side libraries, setup things like
 * window.history.scrollRestoration, etc.
 */
function Client() {
  /**
   * Initilize apolloclient for the browser
   */
  const client = initApollo(false);
  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  );
}
hydrate(<Client />, document);
