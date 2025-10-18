import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "_util/session";
import { PATHS } from "_util/consts";

const protectedRoutes = [
	PATHS.PAGES.AGENDA,
	PATHS.PAGES.THINGS_TO_KNOW,
	PATHS.PAGES.WEDDING_PARTY,
	PATHS.PAGES.REGISTRY,
	// PATHS.PAGES.RSVP,
];
const publicRoutes = [PATHS.PAGES.LOGIN];

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	const sessionCookie = req.cookies.get("session")?.value;
	const session = sessionCookie && (await decrypt(sessionCookie));

	if (isProtectedRoute && !session) {
		// Given an incoming request...
		const loginUrl = new URL(PATHS.PAGES.LOGIN, req.url);
		// Add ?from=/incoming-url to the /login URL
		loginUrl.searchParams.set("from", req.nextUrl.pathname);
		// And redirect to the new URL
		return NextResponse.redirect(loginUrl);
	}

	if (isPublicRoute && session) {
		return NextResponse.redirect(new URL(PATHS.PAGES.HOME, req.nextUrl));
	}

	return NextResponse.next();
}
