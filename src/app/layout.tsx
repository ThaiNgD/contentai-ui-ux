import TanStackProvider from "@/provider/TanStackProvider";
import { MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.layer.css";

export const metadata: Metadata = {
  title: "Content AI",
  description: "Tạo ra bởi Phần mềm Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-googleSans antialiased`}>
        <MantineProvider withCssVariables>
          <TanStackProvider>{children}</TanStackProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
