"use server";

import { z } from "zod";
import { createSession, deleteSession } from "_util/session";
import { redirect } from "next/navigation";
import { PATHS, SITE_PAGES } from "_util";

const testUser = {
	id: "001",
	password: process.env.CFP_PASSWORD,
};

const loginSchema = z.object({
	password: z
		.string()
		.max(8, { message: "The password is be under 8 characters" })
		.trim(),
	route: z.string(),
});

export async function login(prevState: any, formData: FormData) {
	const result = loginSchema.safeParse(Object.fromEntries(formData));

	if (!result.success) {
		return z.treeifyError(result.error);
	}

	const { password, route } = result.data;

	if (password !== testUser.password) {
		return {
			properties: {
				password: {
					errors: ["Wrong password!"],
				},
			},
		};
	}

	await createSession("001");

	if (JSON.stringify(PATHS.PAGES).indexOf(route) > -1) {
		redirect(route);
	} else {
		redirect(PATHS.PAGES.HOME);
	}
}

export async function logout() {
	await deleteSession();
	redirect("/login");
}
