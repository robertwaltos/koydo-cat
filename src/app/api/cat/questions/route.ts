import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "cat", questions: [], message: "Questions endpoint stub" });
}
