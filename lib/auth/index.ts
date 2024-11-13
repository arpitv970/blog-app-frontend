import { auth, currentUser } from "@clerk/nextjs/server";
import { AuthNewUserContext } from "@/lib/interfaces/auth";

export const authNewUser = async (): Promise<AuthNewUserContext> => {
  const { userId } = await auth();

  if (!userId) {
    return { user: null, prisma };
  }

  try {
    // Fetch Clerk user data
    const clerkUser = await currentUser();

    if (!clerkUser) {
      throw new Error("Clerk user not found");
    }

    // Extract necessary fields from Clerk user object
    const email = clerkUser.emailAddresses[0]?.emailAddress;
    const username = clerkUser.username || clerkUser.firstName || "Anonymous";

    if (!email) {
      throw new Error("Email is required for user creation");
    }

    // Find or create user in the database
    let user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: userId,
          email,
          username,
        },
      });
    }
    return { user, prisma };
  } catch (error) {
    console.error("Error creating context:", error);
    throw new Error("Failed to authenticate user");
  }
};
