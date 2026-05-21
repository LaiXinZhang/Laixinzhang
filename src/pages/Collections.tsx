import { useEffect, useRef, useState } from 'react';

function useVisible(threshold = 0.15) {
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

export default function Collections() {
  const collections = [
    { num: '01', title: '高冰荧光', subtitle: '内在光芒', desc: '通透度如冰似雪，光线下折射出迷人荧光，将星辰凝于腕间。高冰荧光系列是 LUNA WU LAB 的标志性作品，每一件都展现着水沫玉最极致的透明美学。', features: ['缅甸A货', '高冰种', '荧光效应'], image: '/prod-fluorescence.jpg', portrait: '/luna-ribbon-hat.jpg' },
    { num: '02', title: '天空蓝', subtitle: '宁静天际', desc: '罕见天空蓝色调，澄澈如秋日晴空。这一系列的每一件作品都蕴含着大自然的宁静力量，是日常佩戴的优雅之选。', features: ['天然蓝水', '色泽均匀', '温润通透'], image: '/prod-skyblue.jpg', portrait: '/luna-wu-04.jpg' },
    { num: '03', title: '经典高冰', subtitle: '晶莹剔透', desc: '传承百年的经典之作，晶莹剔透的质地展现出水沫玉最纯粹的美感。不张扬，却自有光芒。', features: ['顶级冰种', '晶莹通透', '传世经典'], image: '/prod-highice.jpg', portrait: '/luna-wu-05.jpg' },
    { num: '04', title: '蓝花', subtitle: '自然印记', desc: '独特飘花纹理，蓝花自然飘散于玉体之中。每一件都是大自然的孤品，无法复制，独一无二。', features: ['飘花纹理', '自然天成', '独一无二'], image: '/prod-blueflower.jpg', portrait: '/luna-wu-02.jpg' },
  ];

  return (
    <div>
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/luna-pearl-hat.jpg" alt="LUNA WU" className="w-full h-full object-cover object-top" style={{ filter: 'brightness(0.4) contrast(1.1)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24 max-w-3xl">
          <p className="font-montserrat text-[10px] tracking-[0.4em] text-[#D4AF37] mb-4">PRODUCT COLLECTIONS</p>
          <h1 className="font-cinzel text-4xl md:text-6xl text-[#F4ECD8] mb-4">产品系列</h1>
          <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-relaxed max-w-lg">每一只手镯都在述说着一种只有玉石才懂的语言</p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="space-y-32">
          {collections.map((col, i) => (
            <CollectionItem key={col.title} col={col} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CollectionItem({ col, index }: { col: { num: string; title: string; subtitle: string; desc: string; features: string[]; image: string; portrait: string }; index: number }) {
  const { ref, v } = useVisible();
  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}>
      <div className={`w-full md:w-1/2 transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-[#111]">
            <img src={col.portrait} alt={`LUNA WU - ${col.title}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ filter: 'brightness(0.9)' }} />
          </div>
          <div className="absolute -bottom-6 right-4 w-24 h-24 md:w-32 md:h-32 border border-[#333] bg-black overflow-hidden">
            <img src={col.image} alt={col.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className={`w-full md:w-1/2 transition-all duration-700 delay-200 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="font-cinzel text-xs text-[#D4AF37]/50">{col.num}</span>
        <h2 className="font-cinzel text-2xl md:text-3xl text-[#F4ECD8] mt-2 mb-1 tracking-wider">{col.title}</h2>
        <p className="font-montserrat text-xs text-[#888] tracking-wider mb-6">{col.subtitle}</p>
        <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2] mb-6">{col.desc}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {col.features.map(f => (
            <span key={f} className="font-montserrat text-[10px] text-[#888] border border-[#333] px-4 py-1.5">{f}</span>
          ))}
        </div>
        <p className="font-montserrat text-sm text-[#B76E79]">缺货</p>
      </div>
    </div>
  );
}
