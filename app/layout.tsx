import Providers from '@/components/Providers';
import type { Metadata } from "next";
import { Geist_Mono, Exo_2 } from "next/font/google";
import '../styles/tailwind.css'
import { Toaster } from '@/components/ui/sonner';

const exo2 = Exo_2({
  variable: "--font-exo2",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tredex - Trends start here",
  description: "Trends Start Here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${exo2.variable} ${exo2.className} antialiased`}
      >
        <Providers>{children}
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
