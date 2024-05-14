import Link from "next/link";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  type navLink = {
    text: string;
    url: string;
  };

  const navLinks: navLink[] = [
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

  return (
    <>
      <nav>
        {navLinks.map(({ text, url }: navLink) => (
          <Link key={text} href={url}>
            {text}
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </>
  );
};
