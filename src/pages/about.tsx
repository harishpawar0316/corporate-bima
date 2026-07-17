import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Target, Heart, Award } from 'lucide-react';

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

const values = [
  { icon: Shield, title: 'Trust', desc: 'We act solely in your interest — never the insurance company\'s. Your claim, your rights, our fight.' },
  { icon: Target, title: 'Precision', desc: 'Every policy is analysed, every claim is documented with meticulous care to maximise your settlement.' },
  { icon: Heart, title: 'Empathy', desc: 'We understand that behind every claim is a person going through a difficult time. We treat you accordingly.' },
  { icon: Award, title: 'Excellence', desc: 'From fresh claims to complex corporate losses — we pursue the best possible outcome, every single time.' },
];

export default function AboutPage() {
  const site = 'https://corporatebima.in';
  const title = 'About Corporate Bima — Our Story & Mission | Mumbai Insurance Advisor';
  const description = 'Learn about Corporate Bima and founder Rohit Deshmukh. Our mission: make professional insurance advisory accessible to every individual and business in India.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/about`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/about`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'AboutPage', '@id': `${site}/about#webpage`, name: title, url: `${site}/about`, isPartOf: { '@id': `${site}/#website` }, about: { '@id': `${site}/#organization` } })}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4">
          <FadeIn>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Our Story</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl">
              Built on Trust. Driven by Purpose.
            </h1>
            <p className="text-white/65 text-lg max-w-xl leading-relaxed">
              Corporate Bima was founded with one belief — every person deserves professional insurance guidance, not just the privileged few.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The 95% insight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Why We Exist</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
                95% of life's problems are financial. We solve them.
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Today, nearly 95% of people's problems are related to finances, while only 5% are related to other minor issues. If we can find a solution to those 95% financial problems, life can become much smoother and more secure.
                </p>
                <p>
                  When people lack medical knowledge, they consult a doctor. When they need legal guidance, they approach an advocate. But when it comes to financial matters, most people prefer to make decisions on their own — and pay a heavy price for it.
                </p>
                <p>
                  There is a vast difference between doing your own financial planning and creating a financial plan with the help of a professional. That difference is what Corporate Bima provides.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-primary rounded-2xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-bl-full" />
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center mb-6">
                    <span className="font-heading text-2xl font-bold text-accent">RD</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">Rohit Deshmukh</h3>
                  <p className="text-accent text-sm font-semibold mb-6 uppercase tracking-wide">Founder & Principal Advisor</p>
                  <div className="w-10 h-0.5 bg-accent mb-6" />
                  <blockquote className="text-white/75 leading-relaxed text-base italic mb-6">
                    "Insurance is not just a product — it is a promise. My job is to make sure that promise is kept when it matters most."
                  </blockquote>
                  <div className="flex flex-col gap-2 text-sm text-white/50">
                    <span>IRDAI Registered Insurance Advisor</span>
                    <span>Co-partner: K Vision – The Insurance World</span>
                    <span>Corporate Insurance & Investment Planning Specialist</span>
                    <span>Based in Mumbai, Maharashtra</span>
                    <span>Serving clients since 2015</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The analogy */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">The Key Insight</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
              One wrong decision can change everything
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0}>
              <div className="bg-background rounded-2xl p-8 border border-border h-full">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Interior Design Mistake</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Imagine you are designing the interiors of your home. If you do it yourself and the sofa ends up in the wrong corner — people may comment, but that's all. Such mistakes are unlikely to have any significant impact on your life.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-primary rounded-2xl p-8 h-full">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Financial Mistake</p>
                <p className="text-white/75 leading-relaxed text-sm">
                  Finance is completely different. You may make ten financial decisions correctly — but if just <strong className="text-accent">one major decision goes wrong</strong>, the entire financial equation can be disturbed. A single poor decision can create long-term challenges and affect multiple areas of life.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="mt-6">
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <p className="text-primary font-medium leading-relaxed">
                That is why financial planning should ideally be done with the guidance of a qualified Financial Planner. Professional advice helps you avoid costly mistakes, make informed decisions, and build a stronger, more secure financial future.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Corporate & Investment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Our Specialisation</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
              Corporate Insurance &amp; Investment Planning
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Beyond individual policies, Corporate Bima specialises in two high-impact areas that most advisors overlook.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeIn delay={0}>
              <div className="p-8 rounded-2xl bg-primary text-white h-full">
                <h3 className="font-heading text-xl font-bold mb-4">Corporate Risk Management</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  We work with businesses of all sizes — from startups to large enterprises — to design insurance programmes that cover every operational risk: employees, assets, liability, and continuity.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our corporate clients include educational institutions, real estate developers, manufacturing companies, clubs, and service businesses across Mumbai and Maharashtra.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl border border-border h-full">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Investment Planning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Insurance protects against loss — but investment planning builds your future. We help individuals and businesses choose the right instruments: mutual funds, SIPs, ULIPs, tax-saving plans, and retirement solutions.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our approach is holistic — we look at your entire financial picture and recommend a strategy that balances protection, growth, and tax efficiency.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="group p-7 rounded-xl border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <v.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Work With Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to secure your financial future?
            </h2>
            <p className="text-white/65 max-w-xl mx-auto mb-8">
              Whether you need a new policy, a claim settled, or a complete insurance review — we're here to help.
            </p>
            <a
              href="tel:+918898409592"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              Call +91 8898409592 <ArrowRight size={15} />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
