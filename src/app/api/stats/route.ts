import { NextResponse } from "next/server";
import { getCount } from "@/lib/server/count";

export async function GET() {
  try {
    const stats = {
      qrCreated: (await getCount("counter_global", "generate_count")) || 0,
      qrDownloaded: (await getCount("counter_global", "download_count")) || 0,
      visitors: (await getCount("counter_global", "page_view")) || 0,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return NextResponse.json(
      { error: "Failed to fetch statistics" },
      { status: 500 },
    );
  }
}
