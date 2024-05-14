import Link from "next/link";
import Button from "@mui/material/Button";
import { Layout } from "components";

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <Button variant="contained">I am button</Button>
        <p>Hello World! This is the Home page</p>
        <img src="/images/center_leaves.jpg" alt="" height="auto" width="500" />
        <p>
          Visit the <Link href="/about">About</Link> page.
        </p>
        <p>
          Visit the <Link href="/venue">About</Link> page.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
