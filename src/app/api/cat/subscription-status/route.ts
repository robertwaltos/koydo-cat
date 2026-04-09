import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "cat", subscribed: false, message: "Subscription status endpoint stub" });
}
