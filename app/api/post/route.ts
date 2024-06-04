import { connectToDB } from "@/utils/database";
import Post from "@/models/post";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_request: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDB();

    const posts = await Post.find().populate("creator");
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse("Failed to fetch all posts", { status: 500 });
  }
};
