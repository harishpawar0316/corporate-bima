import { Helmet } from '@dr.pogodin/react-helmet';
import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, TrendingUp, Award } from 'lucide-react';

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, 1800, inView);
  return (
    <div ref={ref} className="text-center px-6 py-6">
      <div className="text-3xl md:text-4xl font-bold text-white font-heading">
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-sm text-white/60 mt-1 font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  { title: 'Life Insurance', desc: 'Term, endowment, ULIP, money-back, and whole-life plans — we find the right cover for every stage of life.' },
  { title: 'Health Insurance', desc: 'Individual, family floater, senior citizen, and corporate group mediclaim plans from 30+ insurers.' },
  { title: 'General Insurance', desc: 'Motor, home, fire, marine, burglary, and property insurance tailored to your exact needs.' },
  { title: 'Corporate Insurance', desc: 'Complete corporate risk management — group health, workmen\'s compensation, directors\' liability, fire, and marine cargo for SMEs and large enterprises.' },
  { title: 'Financial Planning', desc: 'A structured roadmap for your financial life — budgeting, goal-setting, tax optimisation, retirement, and wealth creation — all aligned to your income and life stage.' },
  { title: 'Investment Planning', desc: 'Mutual funds, SIPs, fixed deposits, bonds, and tax-saving instruments — structured to grow and protect your wealth.' },
  { title: 'Claim Assistance', desc: 'Fresh, delayed, underpaid, or denied claims — we fight for your rightful settlement 24×7.' },
];

const notableClients = [
  'Narsee Monjee College', 'Mithibai College of Arts', 'Shri Mahila Griha Udyog Lijjat Papad',
  'Juhu Vile Parle Gymkhana Club', 'Garware Club House', 'Lotus Group',
  'Aakash Value Realty', 'Sky Whisper Real Estate', 'Autoriders International',
  'Deesan Group', 'Om Creations Trust', 'mPHATEK Systems',
  'Shirpur Education Society', 'Chatrabhuj Narsee Memorial School', 'Usha Pravin Gandhi College',
];

export default function HomePage() {
  const site = 'https://corporatebima.in';
  const title = 'Corporate Bima — Insurance, Investment & Corporate Risk Management | Mumbai';
  const description = 'Corporate Bima offers complete insurance and investment solutions — life, health, corporate risk, investment planning, and claim assistance. 2,000+ customers. Mumbai.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${site}/#website`, name: 'Corporate Bima', url: `${site}/` },
      {
        '@type': 'InsuranceAgency', '@id': `${site}/#organization`, name: 'Corporate Bima', url: `${site}/`,
        address: { '@type': 'PostalAddress', streetAddress: 'E-403 Arambh, W.E. Highway, Malad East', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
        telephone: '+918898409592', email: 'info@corporatebima.in'
      },
      { '@type': 'WebPage', '@id': `${site}/#webpage`, url: `${site}/`, name: title, isPartOf: { '@id': `${site}/#website` }, about: { '@id': `${site}/#organization` }, datePublished: '2022-01-01', dateModified: '2026-06-22' }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative bg-primary overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-8"
            >
              <Shield size={13} className="text-accent" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Established 2015 · Mumbai, India</span>
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Insurance, Investment &amp; <span className="text-accent">Corporate Risk</span> — All Under One Roof
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' as const }}
              className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl"
            >
              Corporate Bima is your complete financial protection partner — personal insurance, corporate risk management, investment planning, and expert claim settlement. Serving 2,000+ customers since 2015.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' as const }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+918898409592"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-colors"
              >
                <Phone size={15} /> Call Us Now
              </a>
              <a
                href="mailto:info@corporatebima.in"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-white/30 text-white font-semibold text-sm hover:border-accent hover:text-accent transition-colors"
              >
                Get a Free Consultation <ArrowRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative shield */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
          <svg width="500" height="600" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M250 20 L460 100 L460 320 C460 440 360 540 250 580 C140 540 40 440 40 320 L40 100 Z" stroke="white" strokeWidth="3" fill="none" />
            <path d="M250 80 L400 145 L400 310 C400 405 330 490 250 525 C170 490 100 405 100 310 L100 145 Z" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-secondary border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <StatCounter value={2000} suffix="+" label="Customers Served" />
            <StatCounter value={10} suffix="+" label="Years Experience" />
            <StatCounter value={30} suffix="+" label="Insurance Partners" />
            <div className="text-center px-6 py-6">
              <div className="text-3xl md:text-4xl font-bold text-white font-heading">24×7</div>
              <div className="text-sm text-white/60 mt-1 font-medium tracking-wide uppercase">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 95% PROBLEM ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Why It Matters</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
                95% of life's problems are <span className="text-accent">financial</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Today, nearly 95% of people's problems are related to finances, while only 5% are related to other minor issues. If we can find a solution to those 95% financial problems, life can become much smoother and more secure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                When people lack medical knowledge, they consult a doctor. When they need legal guidance, they approach an advocate. When they want to perform religious rituals, they invite a priest. However, when it comes to financial matters, most people prefer to make decisions on their own.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The reason is simple — as people grow older and start earning, they naturally assume they can manage finances effectively without professional guidance. Unfortunately, this assumption often leads to costly mistakes.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '⚕️', problem: 'Medical Problem', solution: 'Consult a Doctor', color: 'border-blue-200 bg-blue-50 dark:bg-blue-950/20' },
                  { icon: '⚖️', problem: 'Legal Problem', solution: 'Hire an Advocate', color: 'border-purple-200 bg-purple-50 dark:bg-purple-950/20' },
                  { icon: '🛕', problem: 'Religious Ritual', solution: 'Invite a Priest', color: 'border-orange-200 bg-orange-50 dark:bg-orange-950/20' },
                  { icon: '💰', problem: 'Financial Problem', solution: 'Most go it alone — and pay the price.', color: 'border-red-200 bg-red-50 dark:bg-red-950/20', highlight: true },
                ].map((item) => (
                  <div key={item.problem} className={`rounded-xl border p-5 ${item.color}`}>
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <p className="text-xs font-semibold text-foreground mb-1">{item.problem}</p>
                    <p className={`text-xs leading-snug ${item.highlight ? 'text-red-600 font-medium' : 'text-muted-foreground'}`}>{item.solution}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-5 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-primary">That is why Corporate Bima exists.</strong> Professional guidance helps you avoid costly mistakes, make informed decisions, and build a stronger, more secure financial future.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── THE COST OF ONE WRONG DECISION ── */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">The Reality</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary max-w-2xl mx-auto leading-tight">
              One wrong financial decision can change everything
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeIn delay={0}>
              <div className="bg-background rounded-2xl p-7 border border-border h-full">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-5">
                  <TrendingUp size={18} className="text-green-600" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Interior Design Mistake</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you design your home yourself and the sofa ends up in the wrong corner — people may comment, but life goes on. The impact is minimal and forgettable.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="bg-primary rounded-2xl p-7 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-5">
                    <Award size={18} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-3">Financial Mistake</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    You may make ten financial decisions correctly — but if just <strong className="text-accent">one major decision goes wrong</strong>, the entire financial equation can be disturbed for years.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="bg-background rounded-2xl p-7 border border-border h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <CheckCircle size={18} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">The Solution</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Financial planning done with a qualified professional helps you avoid costly mistakes and build a stronger, more secure future — exactly what Corporate Bima delivers.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Complete Insurance Solutions</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">From your mobile phone to your entire corporate establishment — we insure everything under one roof.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.07}>
                <div className="group p-7 rounded-xl border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-8 h-0.5 bg-accent mb-5 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCIAL PLANNING ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: intro */}
            <FadeIn>
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Financial Planning</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-5">
                A Plan for Every Stage of Your Financial Life
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Most people earn well — but still feel financially insecure. The reason is rarely income; it's the absence of a structured plan. At Corporate Bima, we help you build one.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our financial planning process starts with understanding your current situation — income, expenses, liabilities, and goals — and then creates a clear, actionable roadmap that covers protection, savings, investment, and retirement.
              </p>
              <a
                href="tel:+918898409592"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <Phone size={14} /> Book a Free Planning Session
              </a>
            </FadeIn>
            {/* Right: pillars */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🎯',
                  title: 'Goal-Based Planning',
                  desc: 'Define short, medium, and long-term goals — home purchase, child\'s education, retirement — and build a savings strategy around each.',
                },
                {
                  icon: '🛡️',
                  title: 'Risk & Protection Review',
                  desc: 'Assess your current insurance coverage and identify gaps — life, health, disability, and income protection.',
                },
                {
                  icon: '📈',
                  title: 'Wealth Creation',
                  desc: 'Systematic investment through SIPs, mutual funds, and market-linked instruments to grow your corpus over time.',
                },
                {
                  icon: '💰',
                  title: 'Tax Optimisation',
                  desc: 'Maximise deductions under 80C, 80D, and other provisions — legally reduce your tax outgo while building assets.',
                },
                {
                  icon: '🏖️',
                  title: 'Retirement Planning',
                  desc: 'Calculate your retirement corpus, choose the right pension and annuity products, and ensure financial independence post-retirement.',
                },
                {
                  icon: '👨‍👩‍👧',
                  title: 'Family & Estate Planning',
                  desc: 'Secure your family\'s future with the right nominations, wills, and succession structures — so your wealth reaches the right hands.',
                },
              ].map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.06}>
                  <div className="p-5 rounded-xl border border-border bg-background hover:border-accent/40 hover:shadow-sm transition-all duration-300 h-full">
                    <div className="text-2xl mb-3">{p.icon}</div>
                    <h4 className="font-heading font-bold text-primary text-sm mb-2">{p.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORPORATE & INVESTMENT ── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Specialised Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Corporate Insurance &amp; Investment Planning</h2>
            <p className="text-white/60 mt-3 max-w-2xl mx-auto">Two pillars of financial security — protecting what you've built, and growing what you have.</p>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Corporate Insurance */}
            <FadeIn delay={0}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Shield size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Corporate Insurance</h3>
                <p className="text-white/65 leading-relaxed mb-6">
                  Every business — from a small shop to a large enterprise — faces unique risks. We design comprehensive corporate insurance programmes that protect your assets, employees, and operations.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Group Health & Mediclaim (GMC)',
                    'Group Personal Accident (GPA)',
                    'Workmen\'s Compensation Insurance',
                    'Directors & Officers (D&O) Liability',
                    'Fire & Allied Perils Insurance',
                    'Marine Cargo & Transit Insurance',
                    'Commercial Vehicle Fleet Insurance',
                    'Burglary & Fidelity Guarantee',
                    'Product Liability Insurance',
                    'Keyman Insurance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            {/* Investment Planning */}
            <FadeIn delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <TrendingUp size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Investment Planning</h3>
                <p className="text-white/65 leading-relaxed mb-6">
                  Insurance protects against loss — but investment planning builds your future. We help you choose the right instruments to grow wealth, save tax, and achieve your financial goals.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Mutual Funds & SIP Planning',
                    'ULIP (Unit Linked Insurance Plans)',
                    'Fixed Deposits & Bonds',
                    'Tax-Saving Instruments (ELSS, PPF)',
                    'Retirement & Pension Planning',
                    'Child Education Planning',
                    'Wealth Management Advisory',
                    'Portfolio Review & Rebalancing',
                    'NRI Investment Planning',
                    'Estate & Succession Planning',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="mt-8 text-center">
            <a
              href="tel:+918898409592"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              <Phone size={15} /> Discuss Your Corporate Needs
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Our Work Process</h2>
          </FadeIn>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-accent/30" />
            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {[
                { roman: 'I', title: 'Analyse', desc: 'We go through an extensive checklist of data and get to know you personally to find the perfect insurance solution for your needs.' },
                { roman: 'II', title: 'Work', desc: 'Our pure dedication for insurance and claims is what differentiates us. We handle all the hassles so you get complete peace of mind.' },
                { roman: 'III', title: 'Achieve', desc: 'Whatever tasks we undertake are bound to achieve success in the least amount of time, hassle, and money possible for you.' },
              ].map((step, i) => (
                <FadeIn key={step.roman} delay={i * 0.12}>
                  <div className="flex flex-col items-center text-center px-6">
                    <div className="relative z-10 w-24 h-24 rounded-full border-2 border-accent bg-background flex items-center justify-center mb-6 shadow-sm">
                      <span className="font-heading text-2xl font-bold text-accent">{step.roman}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS MARQUEE ── */}
      <section className="py-20 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
          <FadeIn>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Our Clients</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">2,000+ Companies & Individuals Trust Us</h2>
            <p className="text-white/60 max-w-xl mx-auto">From educational institutions and real estate developers to manufacturing companies and clubs — our clients span every industry.</p>
          </FadeIn>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-4 shrink-0"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' as const }}
            >
              {[...notableClients, ...notableClients].map((client, i) => (
                <div key={`${client}-${i}`} className="shrink-0 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-sm text-white/70 whitespace-nowrap">
                  {client}
                </div>
              ))}
            </motion.div>
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.04]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>
            <div className="relative grid lg:grid-cols-2 gap-0">
              <FadeIn className="p-10 md:p-14">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Get Started Today</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                  The best risk management decision you'll ever make.
                </h2>
                <p className="text-white/65 leading-relaxed mb-8">
                  Getting professional help with Corporate Bima means you never face an insurance claim alone. Our team handles everything — from paperwork to negotiation — so you receive what you rightfully deserve.
                </p>
                <a
                  href="tel:+918898409592"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-colors"
                >
                  <Phone size={15} /> Call +91 8898409592
                </a>
              </FadeIn>
              <FadeIn delay={0.1} className="lg:border-l border-white/10 p-10 md:p-14 flex flex-col justify-center">
                <h3 className="font-heading text-lg font-bold text-accent mb-8">Reach Us Directly</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Call Us</p>
                      <a href="tel:+918898409592" className="text-white font-medium hover:text-accent transition-colors block">+91 8898409592</a>
                      <a href="tel:+917304330180" className="text-white/70 text-sm hover:text-accent transition-colors block">+91 73043 30180</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Email Us</p>
                      <a href="mailto:rohit@corporatebima.in" className="text-white font-medium hover:text-accent transition-colors block">rohit@corporatebima.in</a>
                      <a href="mailto:info@corporatebima.in" className="text-white/70 text-sm hover:text-accent transition-colors block">info@corporatebima.in</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Visit Us</p>
                      <p className="text-white/70 text-sm leading-relaxed">E-403 Arambh, W.E. Highway,<br />Malad East, Mumbai</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
