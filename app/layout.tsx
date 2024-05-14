import * as Styled from "./layout.styles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Styled.Body>{children}</Styled.Body>
    </html>
  );
}
