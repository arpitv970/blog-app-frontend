import { builder } from "@/graphql/builder";

builder.prismaObject("Blog", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    user: t.relation("author"),
  }),
});

builder.queryField("blogs", (t) =>
  t.prismaField({
    type: ["Blog"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.blog.findMany({ ...query }),
  }),
);
