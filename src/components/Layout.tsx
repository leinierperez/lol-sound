import Header from '@/components/Header';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'League Sounds',
  description:
    'This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>League Sounds</title>
      </Head>
      <Header />
      <main className="min-h-screen max-w-screen-2xl mx-auto">{children}</main>
    </>
  );
}
