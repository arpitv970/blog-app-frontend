import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { schema } from "@/graphql/schema";

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
