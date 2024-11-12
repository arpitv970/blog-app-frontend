import "@/graphql/types/User";
import "@/graphql/types/Blog";
import { builder } from "@/graphql/builder";

export const schema = builder.toSchema();
