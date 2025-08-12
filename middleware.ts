import { decrypt } from "_util/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/rsvp", "/agenda"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	// eslint-disable-next-line no-console
	console.log(path);
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	const cookieStore = await cookies();

	const cookie = cookieStore.get("session")?.value;
	const session = await decrypt(cookie);

	if (isProtectedRoute && !session?.userId) {
		// Given an incoming request...
		const loginUrl = new URL("/login", req.url);
		// Add ?from=/incoming-url to the /login URL
		loginUrl.searchParams.set("from", req.nextUrl.pathname);
		// And redirect to the new URL
		return NextResponse.redirect(loginUrl);

		// return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	if (isPublicRoute && session?.userId) {
		return NextResponse.redirect(new URL("/home", req.nextUrl));
	}

	return NextResponse.next();
}

