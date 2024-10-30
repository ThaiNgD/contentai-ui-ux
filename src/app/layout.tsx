import TanStackProvider from "@/provider/TanStackProvider";
import type { Metadata } from "next";
import "./globals.css";
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
      <body className={`antialiased`}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
