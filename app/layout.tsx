import type { Metadata } from "next";
import type { ReactNode } from 'react';
import "./globals.css";
import "./font/fonts.css";

export const metadata: Metadata = {
  title: "Galaxia-Gaming-Studios - Josue Dev",
  description: "Una página web de nextjs y react en pruebas"
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children}: Props) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
};
