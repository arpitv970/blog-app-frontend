import { builder } from "@/graphql/builder";

builder.prismaObject("Blog", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    content: t.exposeString("content"),
    author: t.relation("author"),
    likes: t.relation("likes"),
    comments: t.relation("comments"),
    likeCount: t.exposeInt("likeCount"),
    bookmarkCount: t.exposeInt("bookmarkCount"),
    createdAt: t.expose("createdAt", { type: "Datetime" }),
    updatedAt: t.expose("updatedAt", { type: "Datetime" }),
  }),
});

builder.queryField("blogs", (t) =>
  t.prismaField({
    type: ["Blog"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.blog.findMany({ ...query }),
  }),
);
