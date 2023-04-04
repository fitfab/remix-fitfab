import { GraphQLClient } from "graphql-request";
const GRAPHCMS_ENDPOINT =
  "https://api-us-east-1.graphcms.com/v2/ckerhsxkkqv0501yx4zs9bv50/master";

/**
 * Note: I added fetch in the options because it could not find the HttpRequest
 * ref: https://github.com/remix-run/remix/issues/2075
 */
export const graphqlClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  fetch: fetch,
});
// --------------------------------------------| The end |--- //

/**
 * @name fetchFromGraphQL
 * @external https://css-tricks.com/raw-graphql-querying
 * @description This function is used to fetch data from the GraphQL API.
 * Check out the link above for more information.
 */
export const fetchFromGraphQL = async (
  query: string,
  variables?: Record<string, any>
) => {
  if (!GRAPHCMS_ENDPOINT) {
    throw new Error("GRAPHCMS_ENDPOINT is required");
  }

  const body: any = { query };

  if (variables) body.variables = variables;

  return fetch(GRAPHCMS_ENDPOINT, {
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
};
