import { NextResponse } from "next/server";

async function handle(request: Request) {
  return NextResponse.redirect(new URL("/", request.url));
}

export async function GET(request: Request) {
  return handle(request);
}

export async function POST(request: Request) {
  return handle(request);
}
