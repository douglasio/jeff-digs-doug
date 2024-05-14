import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Header } from "_components";
import { FONTS } from "_styles/fonts";

export const metadata = {
  title: "Jeff Digs Doug",
  description: "A wedding website for the greatest couple of all time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={FONTS.BRANDON_GROTESQUE.className}>
        <MantineProvider>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
