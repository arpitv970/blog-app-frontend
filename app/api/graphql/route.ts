import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { schema } from "@/graphql/schema";
import { authNewUser } from "@/lib/auth";
import { AuthNewUserContext } from "@/lib/interfaces/auth";

const server = new ApolloServer<AuthNewUserContext>({
  schema,
});

const handler = startServerAndCreateNextHandler(server, {
  context: authNewUser,
});

export { handler as GET, handler as POST };
