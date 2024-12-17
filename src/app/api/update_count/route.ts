import { addCount, getGitHubStars } from "@/lib/server/count";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    if (!res.collection_name || !res.name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const result = await addCount(res.collection_name, res.name);

    return NextResponse.json({
      count: result || 0,
    });
  } catch (error) {
    console.error("Error updating count:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
