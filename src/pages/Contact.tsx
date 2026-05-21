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

export default function Contact() {
  return (
    <div>
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/luna-lips.jpg" alt="LUNA WU" className="w-full h-full object-cover" style={{ filter: 'brightness(0.35) contrast(1.15)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-20 max-w-3xl">
          <p className="font-montserrat text-[10px] tracking-[0.4em] text-[#D4AF37] mb-4">CONTACT</p>
          <h1 className="font-cinzel text-4xl md:text-6xl text-[#F4ECD8] mb-4">联系我们</h1>
          <p className="font-montserrat text-sm text-[#E0E0E0]/70">私人预约，开启一段关于美的对话</p>
        </div>
      </section>

      <section className="py-24 md:py-32 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <BottomImage />
    </div>
  );
}

function ContactInfo() {
  const { ref, v } = useVisible();
  return (
    <div ref={ref} className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-8">联系方式</span>
      <div className="space-y-8">
        <div>
          <p className="font-montserrat text-[10px] text-[#888] tracking-wider mb-2">部门经理</p>
          <p className="font-montserrat text-xl text-[#D4AF37] tracking-wider">19705008575</p>
        </div>
        <div>
          <p className="font-montserrat text-[10px] text-[#888] tracking-wider mb-2">邮箱</p>
          <p className="font-montserrat text-sm text-[#E0E0E0]">contact@lunawulab.com</p>
        </div>
        <div>
          <p className="font-montserrat text-[10px] text-[#888] tracking-wider mb-2">工作室</p>
          <p className="font-montserrat text-sm text-[#E0E0E0] leading-relaxed">上海市静安区<br />南京西路 1266 号</p>
        </div>
        <div>
          <p className="font-montserrat text-[10px] text-[#888] tracking-wider mb-2">营业时间</p>
          <p className="font-montserrat text-sm text-[#E0E0E0]">周一至周六 10:00 - 19:00</p>
          <p className="font-montserrat text-xs text-[#888] mt-1">（预约制）</p>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const { ref, v } = useVisible();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div ref={ref} className={`transition-all duration-700 delay-200 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#D4AF37] block mb-8">给我们留言</span>
      {submitted ? (
        <div className="py-10 text-center">
          <p className="font-cinzel text-lg text-[#D4AF37] mb-2">感谢您的留言</p>
          <p className="font-montserrat text-sm text-[#E0E0E0]/60">我们会尽快与您联系</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
          <input type="text" placeholder="您的姓名" required className="w-full bg-transparent border-b border-[#333] py-3 text-sm text-[#F4ECD8] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none transition-colors" />
          <input type="tel" placeholder="您的电话" required className="w-full bg-transparent border-b border-[#333] py-3 text-sm text-[#F4ECD8] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none transition-colors" />
          <select className="w-full bg-transparent border-b border-[#333] py-3 text-sm text-[#888] focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none cursor-pointer">
            <option value="">感兴趣的系列</option>
            <option value="high-ice-fluorescence">高冰荧光</option>
            <option value="sky-blue">天空蓝</option>
            <option value="classic-high-ice">经典高冰</option>
            <option value="blue-flower">蓝花</option>
          </select>
          <textarea placeholder="留言" rows={3} className="w-full bg-transparent border-b border-[#333] py-3 text-sm text-[#F4ECD8] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none transition-colors resize-none" />
          <button type="submit" className="mt-4 px-10 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">发送</button>
        </form>
      )}
    </div>
  );
}

function BottomImage() {
  const { ref, v } = useVisible();
  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden">
      <img src="/luna-horse-1.jpg" alt="LUNA WU" className={`w-full h-full object-cover transition-all duration-1000 ${v ? 'opacity-60 scale-100' : 'opacity-0 scale-105'}`} style={{ filter: 'brightness(0.5) contrast(1.1)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className={`font-cinzel text-xl md:text-2xl text-[#F4ECD8]/80 tracking-[0.2em] transition-all duration-700 delay-300 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>LUNA WU LAB</p>
      </div>
    </section>
  );
}
