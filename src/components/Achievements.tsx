import { useEffect, useMemo, useState } from "react";

type Achievement = {
  title: string;
  caption: string;
  year: string;
};

const tempAchievements: Achievement[] = [
  {
    title: "Google Women Engineers (WE)",
    caption:
      "Ranked in top 1% of 25,000+ applicants; awarded 2-year mentorship and scholarship worth ₹1,00,000.",
    year: "2024",
  },
  {
    title: "JPMC Code For Good — 1st Place",
    caption:
      "Led team to build a GenAI + web-scraping app improving NGO donor management.",
    year: "2024",
  },
  {
    title: "BVRIT Yukti Hackathon — 3rd",
    caption:
      "Built an agriculture web service enabling tool sharing and resource optimization.",
    year: "2023",
  },
  {
    title: "Coding Contest — 1st",
    caption: "Won college-wide Turing Hut selections coding contest.",
    year: "2022",
  },
];

const Achievements = () => {
  const items = useMemo(() => tempAchievements, []);
  const [start, setStart] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [anim, setAnim] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);

  const go = (d: 1 | -1) => {
    setDir(d);
    setAnim(true);
    window.setTimeout(() => {
      setStart((s) => (s + d + items.length) % items.length);
      setAnim(false);
    }, 180);
  };

  const next = () => go(1);
  const prev = () => go(-1);

  const visible = [0, 1, 2].map((i) => items[(start + i) % items.length]);

  useEffect(() => {
    const id = window.setInterval(() => {
      next();
    }, 3000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-3">Achievements</h2>
          <p className="text-lg text-foreground/70">Highlights from recent years</p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Control */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-0 md:-left-6 p-2 rounded-full border border-primary/40 bg-background/60 hover:bg-primary/10 transition-colors"
            style={{ boxShadow: "var(--glow-secondary)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards */}
          <div
            className="grid grid-cols-3 gap-6 w-full max-w-5xl items-stretch"
            style={{
              transform: anim ? `translateX(${dir * -36}px)` : "translateX(0)",
              opacity: anim ? 0.9 : 1,
              transition: "transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 260ms ease",
            }}
          >
            {visible.map((item, idx) => {
              const actualIndex = (start + idx) % items.length;
              const glow = hovered === actualIndex ? 'var(--glow-primary)' : 'none';
              return (
                <div key={idx} className="group h-full"
                     onMouseEnter={() => setHovered(actualIndex)}
                     onMouseLeave={() => setHovered(null)}>
                  <div className="rounded-2xl p-[2px] h-full" style={{ background: "var(--gradient-primary)" }}>
                    <div className="rounded-2xl bg-background p-5 h-full flex flex-col justify-between"
                         style={{ boxShadow: glow, transition: 'box-shadow 220ms ease', minHeight: 160 }}>
                      <div className="text-sm text-secondary/80">{item.year}</div>
                      <div className="text-xl font-semibold text-primary mt-1">{item.title}</div>
                      <div className="text-foreground/70 mt-1">{item.caption}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Control */}
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-0 md:-right-6 p-2 rounded-full border border-primary/40 bg-background/60 hover:bg-primary/10 transition-colors"
            style={{ boxShadow: "var(--glow-secondary)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
