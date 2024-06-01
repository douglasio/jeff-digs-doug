import { Container, Title } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
	return (
		<Container>
			<Title order={1}>4OH!4</Title>
			<p>
				Never trust a <s>ho</s> url.
			</p>
			<Link href="/">Go home</Link>
		</Container>
	);
}
