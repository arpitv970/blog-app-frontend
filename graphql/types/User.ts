import { builder } from "@/graphql/builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    username: t.exposeString("username"),
    email: t.exposeString("email"),
    blogs: t.relation("blogs"),
    bookmarks: t.relation("bookmarks"),
    comments: t.relation("comments"),
    likes: t.relation("likes"),
    createdAt: t.expose("createdAt", { type: "Datetime" }),
    updatedAt: t.expose("updatedAt", { type: "Datetime" }),
  }),
});

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.user.findMany({ ...query }),
  }),
);

builder.queryField("me", (t) =>
  t.prismaField({
    type: "User",
    resolve: (query, _parent, _args, _ctx, _info) => {
      const { user } = _ctx;

      if (!user) {
        throw new Error("User is not authenticated");
      }

      return user; // Return the authenticated user
    },
  }),
);
