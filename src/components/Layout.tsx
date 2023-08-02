import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>League Sounds</title>
      </Head>
      <Header />
      <main className="min-h-screen max-w-screen-2xl mx-auto">{children}</main>
      <Footer />
    </>
  );
}
