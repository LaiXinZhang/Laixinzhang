import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps { children: ReactNode; }

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-[#F4ECD8]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
