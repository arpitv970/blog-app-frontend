import { builder } from "@/graphql/builder";

builder.prismaObject("Bookmark", {
  fields: (t) => ({
    id: t.exposeID("id"),
    user: t.relation("user"),
    blog: t.relation("blog"),
  }),
});

builder.queryField("bookmarks", (t) =>
  t.prismaField({
    type: ["Bookmark"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.bookmark.findMany({ ...query }),
  }),
);
