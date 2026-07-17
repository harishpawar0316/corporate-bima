import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

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

const publicPartners = [
  'Life Insurance Corporation of India (LIC)',
  'The New India Assurance Co. Ltd.',
  'The Oriental Insurance Company Ltd.',
  'United India Insurance Co. Ltd.',
];

const privatePartners = [
  'Bajaj Allianz General Insurance',
  'HDFC ERGO General Insurance',
  'Future Generali India Insurance',
  'ICICI Lombard General Insurance',
  'Tata AIG General Insurance',
  'IFFCO Tokio General Insurance',
  'Cholamandalam MS General Insurance',
  'Bharti AXA General Insurance',
  'Royal Sundaram General Insurance',
  'Shriram General Insurance',
  'Go Digit General Insurance',
];

const healthPartners = [
  'Max Bupa Health Insurance',
  'Star Health & Allied Insurance',
  'Care Health Insurance (Religare)',
  'Reliance General Insurance',
];

export default function PartnersPage() {
  const site = 'https://corporatebima.in';
  const title = 'Insurance Partners — Corporate Bima | 30+ Trusted Insurers in Mumbai';
  const description = 'Corporate Bima works with 30+ leading public and private sector insurers in India. Get the best coverage at the best rates from LIC, HDFC ERGO, Bajaj Allianz, and more.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/partners`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/partners`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="partners-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#partners-grid)" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4">
          <FadeIn>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Our Network</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl">
              30+ Trusted Insurance Partners
            </h1>
            <p className="text-white/65 text-lg max-w-xl leading-relaxed">
              We work with India's leading public and private sector insurers to bring you the best coverage at the most competitive rates — all under one roof.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">

          {/* Public Sector */}
          <FadeIn className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-3">Public Sector Insurers</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {publicPartners.map((name) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(10,31,68,0.12)' }}
                  transition={{ duration: 0.2 }}
                  className="bg-muted rounded-xl px-5 py-6 text-center border border-border cursor-default"
                >
                  <p className="text-sm font-medium text-primary leading-snug">{name}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Private Sector */}
          <FadeIn delay={0.1} className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-3">Private Sector Insurers</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {privatePartners.map((name) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(10,31,68,0.12)' }}
                  transition={{ duration: 0.2 }}
                  className="bg-muted rounded-xl px-5 py-6 text-center border border-border cursor-default"
                >
                  <p className="text-sm font-medium text-primary leading-snug">{name}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Health */}
          <FadeIn delay={0.15}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-3">Standalone Health Insurers</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {healthPartners.map((name) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(10,31,68,0.12)' }}
                  transition={{ duration: 0.2 }}
                  className="bg-muted rounded-xl px-5 py-6 text-center border border-border cursor-default"
                >
                  <p className="text-sm font-medium text-primary leading-snug">{name}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Get the Best Deal</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
              We compare across all partners to find your best policy.
            </h2>
            <p className="text-white/65 max-w-xl mx-auto mb-8">
              You don't need to approach each insurer separately. We do the comparison for you and recommend the best product at the best rate.
            </p>
            <a
              href="tel:+918898409592"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              <Phone size={15} /> Call +91 8898409592
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
