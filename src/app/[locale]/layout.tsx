/* eslint-disable @typescript-eslint/no-explicit-any */
import { routing } from "@/i18n/routing";
import TanStackProvider from "@/provider/TanStackProvider";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content AI",
  description: "Tạo ra bởi Phần mềm Marketing",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body
        className={`font-googleSans antialiased`}
        suppressHydrationWarning={true}
      >
        <MantineProvider withCssVariables>
          <TanStackProvider>
            <NextIntlClientProvider messages={messages}>
              <ThemeProvider
                defaultTheme="system"
                enableSystem
                attribute={"class"}
              >
                {children}
              </ThemeProvider>
            </NextIntlClientProvider>
          </TanStackProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
