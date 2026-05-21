import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1a1a1a]" style={{ backgroundColor: '#050505' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-cinzel text-sm tracking-[0.2em] text-[#F4ECD8] mb-4">LUNA WU LAB</h3>
            <p className="font-montserrat text-xs text-[#666] leading-relaxed">被时光筛选后的稀缺感。</p>
          </div>
          <div>
            <h4 className="font-montserrat text-[10px] tracking-[0.2em] text-[#888] mb-4">导航</h4>
            <div className="flex flex-col gap-2">
              <Link to="/brand" className="font-montserrat text-xs text-[#E0E0E0]/70 hover:text-[#D4AF37] transition-colors duration-300">品牌故事</Link>
              <Link to="/collections" className="font-montserrat text-xs text-[#E0E0E0]/70 hover:text-[#D4AF37] transition-colors duration-300">产品系列</Link>
              <Link to="/contact" className="font-montserrat text-xs text-[#E0E0E0]/70 hover:text-[#D4AF37] transition-colors duration-300">联系我们</Link>
            </div>
          </div>
          <div>
            <h4 className="font-montserrat text-[10px] tracking-[0.2em] text-[#888] mb-4">联系</h4>
            <p className="font-montserrat text-xs text-[#E0E0E0]/70">部门经理 19705008575</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] text-center">
          <p className="font-montserrat text-[10px] text-[#444] tracking-wider">&copy; {new Date().getFullYear()} LUNA WU LAB</p>
        </div>
      </div>
    </footer>
  );
}
