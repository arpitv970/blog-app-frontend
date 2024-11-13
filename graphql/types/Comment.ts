import { builder } from "@/graphql/builder";

builder.prismaObject("Comment", {
  fields: (t) => ({
    id: t.exposeID("id"),
    user: t.relation("user"),
    blog: t.relation("blog"),
    content: t.exposeString("content"),
    createdAt: t.expose("createdAt", { type: "Datetime" }),
  }),
});

builder.queryField("comments", (t) =>
  t.prismaField({
    type: ["Comment"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.comment.findMany({ ...query }),
  }),
);
