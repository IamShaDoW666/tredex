import Header from '@/components/feature/landing-page/Header';
import Footer from '@/components/feature/landing-page/Footer';
import { ScrollProvider } from "@/context/ScrollContext";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ScrollProvider>
      <Header />
      {children}
      <Footer />
    </ScrollProvider>
  );
}
