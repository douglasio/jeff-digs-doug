import Link from "next/link";
import { Button } from "@mantine/core";

const Page = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <Button variant="filled">Button</Button>
      <img
        src="static/images/center_leaves.jpg"
        alt=""
        height="auto"
        width="500"
      />
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
      <p>
        Visit the <Link href="/venue">About</Link> page.
      </p>
    </div>
  );
};

export default Page;
