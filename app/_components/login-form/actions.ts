"use server";

import { z } from "zod";
import { createSession, deleteSession } from "_util/session";
import { redirect } from "next/navigation";

const testUser = {
	id: "001",
	password: "test",
};

const loginSchema = z.object({
	password: z
		.string()
		.max(8, { message: "The password is be under 8 characters" })
		.trim(),
});

export async function login(prevState: any, formData: FormData) {
	const result = loginSchema.safeParse(Object.fromEntries(formData));

	// eslint-disable-next-line no-console
	console.log("result", result);

	if (!result.success) {
		return z.treeifyError(result.error);
	}

	const { password } = result.data;
	if (password !== testUser.password) {
		return {
			properties: {
				password: {
					errors: ["Wrong password!"],
				},
			},
		};
	}

	await createSession(testUser.id);

	redirect("/home");
}

export async function logout() {
	await deleteSession();
	redirect("/login");
}
