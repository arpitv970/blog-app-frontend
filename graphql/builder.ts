import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import prisma from "@/lib/prisma";
import { GraphQLDateTime } from "graphql-scalars";
import { AuthNewUserContext } from "@/lib/interfaces/auth";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Context: AuthNewUserContext;
  Scalars: {
    Datetime: {
      Input: Date;
      Output: Date;
    };
  };
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

builder.addScalarType("Datetime", GraphQLDateTime, {});
