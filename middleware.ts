import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "_util/session";

const protectedRoutes = ["/rsvp", "/agenda", "/things-to-know"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	const sessionCookie = req.cookies.get("session")?.value;
	const session = sessionCookie && (await decrypt(sessionCookie));

	if (isProtectedRoute && !session) {
		// Given an incoming request...
		const loginUrl = new URL("/login", req.url);
		// Add ?from=/incoming-url to the /login URL
		loginUrl.searchParams.set("from", req.nextUrl.pathname);
		// And redirect to the new URL
		return NextResponse.redirect(loginUrl);
	}

	if (isPublicRoute && session) {
		return NextResponse.redirect(new URL("/home", req.nextUrl));
	}

	return NextResponse.next();
}
