import Header from '@/components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='mx-auto w-full min-h-screen'>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
