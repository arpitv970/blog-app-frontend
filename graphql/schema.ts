import "@/graphql/types/User";
import "@/graphql/types/Blog";
import "@/graphql/types/Bookmark";
import "@/graphql/types/Like";
import "@/graphql/types/Comment";
import { builder } from "@/graphql/builder";

export const schema = builder.toSchema();
