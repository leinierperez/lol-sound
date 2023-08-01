import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-screen-2xl mx-auto">{children}</main>
    </>
  );
}
