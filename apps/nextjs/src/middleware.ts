import { type NextRequest, NextResponse, userAgent } from "next/server";

export interface SearchParams {
  viewport: "mobile" | "desktop";
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  url.searchParams.set("viewport", viewport);
  return NextResponse.rewrite(url);
}
