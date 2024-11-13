import { builder } from "@/graphql/builder";

builder.prismaObject("Like", {
  fields: (t) => ({
    id: t.exposeID("id"),
    user: t.relation("user"),
    blog: t.relation("blog"),
  }),
});

builder.queryField("likes", (t) =>
  t.prismaField({
    type: ["Like"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.like.findMany({ ...query }),
  }),
);
