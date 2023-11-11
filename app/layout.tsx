"use client";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import { Poppins } from "next/font/google";
import { CartContextProvider } from "./components/CartContext";

const poppins = Poppins({
  weight: ["400", "500", "700", "900", "100", "200", "300"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <CartContextProvider>{children}</CartContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
