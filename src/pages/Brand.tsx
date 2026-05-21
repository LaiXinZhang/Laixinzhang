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

export default function Brand() {
  const philosophy = [
    { num: '01', title: '大地自有记忆', desc: '每一块原石都承载着亿万年地质变迁的记忆' },
    { num: '02', title: '光才是真宝石', desc: '最珍贵的是光线穿透玉体时的那一抹荧光' },
    { num: '03', title: '手工而非机器', desc: '匠人双手的温度，赋予每只手镯独特灵魂' },
    { num: '04', title: '形式追随本质', desc: '不过分雕琢，让材质本身的美感自由呈现' },
    { num: '05', title: '传承超越潮流', desc: '不追逐流行，只做经得起时间检验的作品' },
  ];
  const timeline = [
    { year: '2015', title: '初心', desc: 'LUNA WU LAB 诞生于缅甸矿区深处，源于对水沫玉美学的执着' },
    { year: '2017', title: '沉淀', desc: '首家工坊在上海设立，"高冰荧光"系列发布，成为品牌标志' },
    { year: '2019', title: '破界', desc: '与法国设计师合作，将水沫玉带入国际视野' },
    { year: '2022', title: '焕新', desc: '品牌视觉全面升级，确立黑金美学体系' },
    { year: '2024', title: '溯源', desc: '全球限量典藏系列发布，开启新十年' },
  ];

  return (
    <div>
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/luna-wu-01.jpg" alt="LUNA WU" className="w-full h-full object-cover object-top" style={{ filter: 'brightness(0.4) contrast(1.1)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-20 md:pb-28 max-w-3xl">
          <p className="font-montserrat text-[10px] tracking-[0.4em] text-[#D4AF37] mb-4">品牌故事</p>
          <h1 className="font-cinzel text-4xl md:text-6xl text-[#F4ECD8] leading-tight mb-4">被时光筛选后的<br />稀缺感</h1>
          <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-relaxed max-w-lg">不售卖玉石，只输出一种被时光筛选后的稀缺感。每一只手镯，都是自然与匠心的共鸣。</p>
        </div>
      </section>

      <FounderStory />

      <section className="py-32" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-6">
          <PhilosophySection philosophy={philosophy} />
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6">
          <TimelineSection timeline={timeline} />
        </div>
      </section>

      <CraftSection />
    </div>
  );
}

function FounderStory() {
  const { ref, v } = useVisible();
  return (
    <section ref={ref} className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className={`w-full md:w-1/2 transition-all duration-700 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <img src="/luna-wu-02.jpg" alt="LUNA WU" className="w-full object-cover" style={{ filter: 'brightness(0.9) contrast(1.05)', maxHeight: '650px' }} />
          </div>
          <div className={`w-full md:w-1/2 transition-all duration-700 delay-200 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-6">创始人</span>
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#F4ECD8] mb-6">LUNA WU</h2>
            <div className="space-y-4">
              <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2]">她行走于矿区和都市之间，在自然中寻找最纯粹的原石。她深信每一块水沫玉都蕴含着大地的记忆，等待被懂得的人唤醒。</p>
              <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2]">十年间，从缅甸矿区到上海工坊，她亲手挑选每一块原石，监督每一道工序。对她而言，这不仅是一门生意，更是一种对自然之美的信仰。</p>
              <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2]">不追逐流行，只做经得起时间检验的作品。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection({ philosophy }: { philosophy: { num: string; title: string; desc: string }[] }) {
  const { ref, v } = useVisible();
  return (
    <div ref={ref}>
      <div className="text-center mb-16">
        <span className={`font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-4 transition-all duration-700 ${v ? 'opacity-100' : 'opacity-0'}`}>品牌哲学</span>
        <h2 className={`font-cinzel text-3xl md:text-4xl text-[#F4ECD8] transition-all duration-700 delay-100 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>五不原则</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {philosophy.map((p, i) => (
          <div key={p.num} className={`group p-8 border border-[#222] hover:border-[#D4AF37]/30 transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 100 + 200}ms` }}>
            <span className="font-cinzel text-3xl text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors">{p.num}</span>
            <h3 className="font-cinzel text-lg text-[#F4ECD8] mt-4 mb-2 tracking-wider">{p.title}</h3>
            <p className="font-montserrat text-sm text-[#E0E0E0]/60 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineSection({ timeline }: { timeline: { year: string; title: string; desc: string }[] }) {
  const { ref, v } = useVisible();
  return (
    <div ref={ref}>
      <div className="text-center mb-16">
        <span className={`font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-4 transition-all duration-700 ${v ? 'opacity-100' : 'opacity-0'}`}>品牌历程</span>
        <h2 className={`font-cinzel text-3xl md:text-4xl text-[#F4ECD8] transition-all duration-700 delay-100 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>时间轴</h2>
      </div>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#333] md:-translate-x-1/2" />
        {timeline.map((t, i) => (
          <div key={t.year} className={`relative flex items-start mb-14 md:mb-16 transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 120 + 200}ms` }}>
            <div className={`w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-3 md:pl-12'} hidden md:block`}>
              {i % 2 === 0 && <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-relaxed">{t.desc}</p>}
            </div>
            <div className="absolute left-4 md:left-1/2 w-2 h-2 rounded-full bg-[#D4AF37] -translate-x-1/2 mt-2" />
            <div className={`ml-10 md:ml-0 ${i % 2 === 0 ? 'md:w-1/2 md:pl-12' : 'md:w-1/2 md:text-right md:pr-12 md:order-1'}`}>
              <span className="font-cinzel text-sm text-[#D4AF37]">{t.year}</span>
              <span className="font-cinzel text-xl text-[#F4ECD8] ml-3">{t.title}</span>
              <p className="font-montserrat text-sm text-[#E0E0E0]/70 mt-2 md:hidden">{t.desc}</p>
              {i % 2 !== 0 && <p className="font-montserrat text-sm text-[#E0E0E0]/70 mt-2 hidden md:block">{t.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CraftSection() {
  const { ref, v } = useVisible();
  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className={`w-full md:w-1/2 transition-all duration-700 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <img src="/luna-pearl-hat.jpg" alt="LUNA WU" className="w-full object-cover" style={{ filter: 'brightness(0.9)', maxHeight: '600px' }} />
          </div>
          <div className={`w-full md:w-1/2 transition-all duration-700 delay-200 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-6">匠心工艺</span>
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#F4ECD8] mb-6">200 小时。一只手镯。</h2>
            <div className="space-y-4">
              <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2]">从原石到成品，需要经过选料、切割、打磨、抛光等 200 多道工序，累计超过 200 小时的纯手工打磨。</p>
              <p className="font-montserrat text-sm text-[#E0E0E0]/70 leading-[2]">每一只手镯的诞生，都是一次与自然的深度对话。我们不追求量产，只追求每一只都达到"可传世"的标准。</p>
            </div>
            <div className="flex gap-10 mt-10">
              <div><span className="font-cinzel text-3xl text-[#D4AF37]">200+</span><p className="font-montserrat text-[10px] text-[#888] mt-1">小时手工</p></div>
              <div><span className="font-cinzel text-3xl text-[#D4AF37]">4</span><p className="font-montserrat text-[10px] text-[#888] mt-1">大系列</p></div>
              <div><span className="font-cinzel text-3xl text-[#D4AF37]">10</span><p className="font-montserrat text-[10px] text-[#888] mt-1">年匠心</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
