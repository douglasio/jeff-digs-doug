import { CFP_COOKIE_MAX_AGE } from "./constants";
import { sha256, getCookieKeyValue } from "./utils";

export async function onRequestPost(context: {
	request: Request;
	env: {
		CFP_PASSWORD1?: string;
		CFP_PASSWORD2?: string;
		CFP_PASSWORD3?: string;
	};
}): Promise<Response> {
	const { request, env } = context;
	const body = await request.formData();
	const { password, redirect } = Object.fromEntries(body);
	const hashedPassword = await sha256(password.toString());
	const hashedCfpPassword1 = await sha256(env.CFP_PASSWORD1 as string);
	const hashedCfpPassword2 = await sha256(env.CFP_PASSWORD2 as string);
	const hashedCfpPassword3 = await sha256(env.CFP_PASSWORD3 as string);
	const redirectPath = redirect.toString() || "/";

	if (
		hashedPassword === hashedCfpPassword1 ||
		hashedPassword === hashedCfpPassword2 ||
		hashedPassword === hashedCfpPassword3
	) {
		// Valid password. Redirect to home page and set cookie with auth hash.
		const cookieKeyValue = await getCookieKeyValue(env.CFP_PASSWORD1);

		return new Response("", {
			status: 302,
			headers: {
				"Set-Cookie": `${cookieKeyValue}; Max-Age=${CFP_COOKIE_MAX_AGE}; Path=/; HttpOnly; Secure`,
				"Cache-Control": "no-cache",
				Location: redirectPath,
			},
		});
	} else {
		// Invalid password. Redirect to login page with error.
		return new Response("", {
			status: 302,
			headers: {
				"Cache-Control": "no-cache",
				Location: `${redirectPath}?error=1`,
			},
		});
	}
}
