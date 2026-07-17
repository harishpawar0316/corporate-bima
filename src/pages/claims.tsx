import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Phone, Mail, CheckCircle, AlertCircle, Clock, FileText } from 'lucide-react';

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

const claimTypes = [
  { icon: CheckCircle, title: 'Fresh Claims', desc: 'New claims filed immediately after an incident. We ensure all documentation is correct and submitted on time to avoid delays.' },
  { icon: Clock, title: 'Delayed Claims', desc: 'Claims that have been pending for too long. We follow up aggressively with the insurer to get your case moving.' },
  { icon: AlertCircle, title: 'Underpaid Claims', desc: 'When the insurer offers less than you deserve. We review the settlement and negotiate for the full amount you are entitled to.' },
  { icon: FileText, title: 'Denied Claims', desc: 'Claims that have been rejected. We analyse the denial reason, build a strong case, and appeal on your behalf.' },
];

const steps = [
  { num: '01', title: 'Report & Review', desc: 'Contact us immediately after an incident. We review your policy, understand the loss, and advise on the best course of action.' },
  { num: '02', title: 'Documentation', desc: 'We prepare and compile all required documents — survey reports, bills, FIRs, medical records — ensuring nothing is missed.' },
  { num: '03', title: 'Claim Filing', desc: 'We file the claim with the insurer on your behalf, ensuring all forms are correctly filled and submitted within deadlines.' },
  { num: '04', title: 'Follow Up', desc: 'We track your claim status 24×7, follow up with the insurer, and keep you updated at every step of the process.' },
  { num: '05', title: 'Negotiation', desc: 'If the settlement offer is inadequate, we negotiate firmly with the insurer to secure the maximum possible payout.' },
  { num: '06', title: 'Settlement', desc: 'Once the claim is approved, we ensure the payment is processed promptly and you receive every rupee you deserve.' },
];

export default function ClaimsPage() {
  const site = 'https://corporatebima.in';
  const title = 'Claim Assistance — Corporate Bima | Mumbai Insurance Claim Experts';
  const description = 'Expert insurance claim assistance in Mumbai. Fresh, delayed, underpaid, or denied claims — Corporate Bima fights for your rightful settlement. Call +91 8898409592.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/claims`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/claims`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="claims-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#claims-grid)" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4">
          <FadeIn>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Claim Assistance</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl">
              We fight for your <span className="text-accent">rightful settlement</span>
            </h1>
            <p className="text-white/65 text-lg max-w-xl leading-relaxed mb-8">
              Insurance claims require specialised knowledge, laborious documentation, and expert negotiation. Most people simply don't have the skills or patience to handle it alone. We do.
            </p>
            <a
              href="tel:+918898409592"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              <Phone size={15} /> Call Now for Claim Help
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Claim types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">What We Handle</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Every type of claim, handled expertly</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {claimTypes.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.08}>
                <div className="group p-7 rounded-xl border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <c.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">How we handle your claim</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.07}>
                <div className="bg-background rounded-xl p-7 border border-border h-full">
                  <span className="font-heading text-3xl font-bold text-accent/30">{s.num}</span>
                  <div className="w-8 h-0.5 bg-accent my-3" />
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Contact Us Now</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                Don't face your insurer alone. Call us today.
              </h2>
              <p className="text-white/65 leading-relaxed">
                The insurance company has experts on their side. So should you. Our team is available 24×7 to assist with any claim — big or small.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4">
                <a href="tel:+918898409592" className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wide mb-0.5">Call Us</p>
                    <p className="text-white font-semibold group-hover:text-accent transition-colors">+91 8898409592</p>
                  </div>
                </a>
                <a href="mailto:rohit@corporatebima.in" className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wide mb-0.5">Email Us</p>
                    <p className="text-white font-semibold group-hover:text-accent transition-colors">rohit@corporatebima.in</p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
