import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "../theme";

//progressbar
import NextTopLoader from "nextjs-toploader";

//components
import { Header } from "components/Header";
import { Footer } from "components/Footer";

//styles
import "./globals.css";

export const metadata = {
  title: "Hebertdev | Software Engineer",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="es">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextTopLoader color="#0072f5" height={5} />
        <MantineProvider theme={theme}>
          <Notifications />
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
