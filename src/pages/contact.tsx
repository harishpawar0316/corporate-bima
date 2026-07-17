import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

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

export default function ContactPage() {
  const site = 'https://corporatebima.in';
  const title = 'Contact Corporate Bima — Mumbai Insurance Advisor | +91 8898409592';
  const description = 'Contact Corporate Bima for insurance advisory, claim assistance, or a free consultation. Call +91 8898409592 or email rohit@corporatebima.in. Offices in Malad East & Goregaon, Mumbai.';

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/contact`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/contact`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4">
          <FadeIn>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl">
              We're here to help — always.
            </h1>
            <p className="text-white/65 text-lg max-w-xl leading-relaxed">
              Whether you need a new policy, claim assistance, or just a free consultation — reach out and we'll get back to you promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Left — contact info */}
            <FadeIn>
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">Contact Information</h2>
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Phone</p>
                    <a href="tel:+918898409592" className="text-primary font-semibold hover:text-accent transition-colors block">+91 8898409592</a>
                    <a href="tel:+917304330180" className="text-muted-foreground text-sm hover:text-accent transition-colors block">+91 73043 30180</a>
                    <a href="tel:+912240142404" className="text-muted-foreground text-sm hover:text-accent transition-colors block">+91 22 40142404 (Admin)</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:rohit@corporatebima.in" className="text-primary font-semibold hover:text-accent transition-colors block">rohit@corporatebima.in</a>
                    <a href="mailto:info@corporatebima.in" className="text-muted-foreground text-sm hover:text-accent transition-colors block">info@corporatebima.in</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Admin Office</p>
                    <p className="text-primary font-medium">E-403 Arambh, W.E. Highway</p>
                    <p className="text-muted-foreground text-sm">Malad East, Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Corporate Office</p>
                    <p className="text-primary font-medium">Goregaon, Mumbai</p>
                    <p className="text-muted-foreground text-sm">Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Availability</p>
                    <p className="text-primary font-medium">24×7 Support</p>
                    <p className="text-muted-foreground text-sm">We're always available for claim emergencies</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Co-partner</p>
                <p className="text-primary font-medium">K Vision – The Insurance World</p>
                <p className="text-muted-foreground text-sm mt-1">IRDAI Registered Insurance Advisor</p>
              </div>
            </FadeIn>

            {/* Right — inquiry form */}
            <FadeIn delay={0.1}>
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">Send an Enquiry</h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                    <Phone size={28} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Thank you!</h3>
                  <p className="text-muted-foreground">We've received your enquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
