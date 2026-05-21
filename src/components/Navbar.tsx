import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: '品牌', path: '/brand' },
  { label: '系列', path: '/collections' },
  { label: '联系', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/85 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <Link to="/" className="font-cinzel text-xs tracking-[0.2em] text-[#F4ECD8] hover:text-[#D4AF37] transition-colors duration-300">
            LUNA WU LAB
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path}
                className={`font-montserrat text-xs tracking-[0.12em] transition-colors duration-300 ${location.pathname === link.path ? 'text-[#D4AF37]' : 'text-[#E0E0E0] hover:text-[#D4AF37]'}`}>
                {link.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="菜单">
            <span className="block w-5 h-[1px] bg-[#D4AF37] mb-1" />
            <span className="block w-5 h-[1px] bg-[#D4AF37] mb-1" />
            <span className="block w-5 h-[1px] bg-[#D4AF37]" />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/96" onClick={() => setMobileOpen(false)}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path}
              className="font-cinzel text-2xl tracking-[0.15em] text-[#E0E0E0] hover:text-[#D4AF37] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
