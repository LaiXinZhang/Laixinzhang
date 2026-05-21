import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function useVisible(threshold = 0.2) {
  const [v, setV] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    o.observe(el);
    return () => o.disconnect();
  }, [threshold]);
  return { ref, v };
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 200); return () => clearTimeout(t); }, []);
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src="/luna-full-1.jpg" alt="LUNA WU" className="w-full h-full object-cover object-top" style={{ filter: 'brightness(0.45) contrast(1.1)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>
      <div className={`relative z-10 px-6 md:px-16 pb-20 md:pb-28 max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <p className="font-montserrat text-[10px] tracking-[0.4em] text-[#D4AF37] mb-4 uppercase">Since 2015</p>
        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-[#F4ECD8] leading-tight mb-4">LUNA WU<br /><span className="text-xl md:text-3xl tracking-[0.2em]">LAB</span></h1>
        <p className="font-montserrat text-sm text-[#E0E0E0]/80 leading-relaxed mb-8 max-w-md">被时光筛选后的稀缺感。每一只手镯，都是自然与匠心的共鸣。</p>
        <Link to="/collections" className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">探索系列</Link>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-6 bg-[#D4AF37]/40" />
      </div>
    </section>
  );
}

function BrandIntro() {
  const { ref, v } = useVisible();
  return (
    <section ref={ref} className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className={`w-full md:w-1/2 transition-all duration-700 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <div className="relative">
              <img src="/luna-jewelry.png" alt="LUNA WU" className="w-full object-cover" style={{ filter: 'brightness(0.9) contrast(1.05)', maxHeight: '600px' }} />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
          <div className={`w-full md:w-1/2 transition-all duration-700 delay-200 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-6">品牌理念</span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-[#F4ECD8] leading-snug mb-6">我们不售卖玉石<br />只输出稀缺感</h2>
            <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2] mb-6">在 LUNA WU LAB，每一只水沫玉手镯都承载着亿万年的地质记忆。我们相信，真正的奢华不是拥有，而是被时光认证过的自己。</p>
            <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2]">从缅甸矿区深处到上海工坊，每一块原石经由匠人双手的温度，雕琢成超越时光的艺术形态。</p>
            <Link to="/brand" className="inline-block mt-8 font-montserrat text-xs tracking-[0.15em] text-[#D4AF37] border-b border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors pb-1">了解更多</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const { ref, v } = useVisible();
  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-center">
          <div className={`w-full md:w-3/5 transition-all duration-700 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <img src="/luna-wu-03.jpg" alt="LUNA WU" className="w-full object-cover" style={{ filter: 'brightness(0.85) contrast(1.1)', maxHeight: '700px' }} />
          </div>
          <div className={`w-full md:w-2/5 transition-all duration-700 delay-200 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-6">创始人</span>
            <h2 className="font-cinzel text-3xl md:text-5xl text-[#F4ECD8] mb-6">LUNA WU</h2>
            <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2] mb-4">她行走于矿区和都市之间，在自然中寻找最纯粹的原石。她深信每一块水沫玉都蕴含着大地的记忆，等待被懂得的人唤醒。</p>
            <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2]">不追逐流行，只做经得起时间检验的作品。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionsPreview() {
  const { ref, v } = useVisible();
  const items = [
    { title: '高冰荧光', img: '/prod-fluorescence.jpg' },
    { title: '天空蓝', img: '/prod-skyblue.jpg' },
    { title: '经典高冰', img: '/prod-highice.jpg' },
    { title: '蓝花', img: '/prod-blueflower.jpg' },
  ];
  return (
    <section ref={ref} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className={`font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-4 transition-all duration-700 ${v ? 'opacity-100' : 'opacity-0'}`}>产品系列</span>
          <h2 className={`font-cinzel text-3xl md:text-4xl text-[#F4ECD8] transition-all duration-700 delay-100 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>四韵系列</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <div key={item.title} className={`group cursor-pointer transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 100 + 200}ms` }}>
              <div className="aspect-[3/4] overflow-hidden mb-4 bg-[#111]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-cinzel text-sm text-[#F4ECD8] group-hover:text-[#D4AF37] transition-colors tracking-wider">{item.title}</h3>
              <p className="font-montserrat text-[10px] text-[#B76E79] mt-1">缺货</p>
            </div>
          ))}
        </div>
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${v ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/collections" className="inline-block px-10 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">查看全部</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandIntro />
      <Founder />
      <CollectionsPreview />
    </div>
  );
}
