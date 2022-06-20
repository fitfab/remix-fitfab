import { createContext } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHCMS_ENDPOINT =
  "https://api-us-east-1.graphcms.com/v2/ckerhsxkkqv0501yx4zs9bv50/master";
const isBrowser = typeof document !== "undefined";

const initialState = isBrowser ? window.__INITIAL_STATE__ : {};

export function initApollo(ssrMode = true) {
  return new ApolloClient({
    uri: GRAPHCMS_ENDPOINT,
    cache: new InMemoryCache().restore(initialState),
    ssrMode,
  });
}

export default createContext(initialState);
