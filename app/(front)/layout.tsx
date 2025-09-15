import Header from '@/components/feature/landing-page/Header';
import Footer from '@/components/feature/landing-page/Footer';

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
