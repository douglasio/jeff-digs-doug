import Link from "next/link";
import { FONTS } from "_styles/fonts";

type Page = {
  text: string;
  url: string;
};

const pages: Page[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Venue",
    url: "/venue",
  },
  {
    text: "Agenda",
    url: "/agenda",
  },
  {
    text: "Things to Know",
    url: "/things-to-know",
  },
  {
    text: "Wedding Party",
    url: "/wedding-party",
  },
  {
    text: "Our Story",
    url: "/our-story",
  },
];

export const Header = () => {
  return (
    <header className={FONTS.MRS_EAVES.className}>
      <img
        src="../static/images/initials_Vertical_1.png"
        alt="D&J"
        width="100"
        height="auto"
      />
      <nav>
        {pages.map((page) => (
          <Link href={page.url}>{page.text}</Link>
        ))}
      </nav>
    </header>
  );
};
