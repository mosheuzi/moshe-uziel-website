import Link from 'next/link'
import { ArrowUpRight, Mail, ExternalLink, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation - Exact Justin Welsh Structure */}
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-avatar" aria-hidden="true">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">MU</span>
              </div>
            </span>
            <span className="brand-full">mosheuziel.</span>
            <span className="brand-short">mu.</span>
          </Link>
          <nav className="links">
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/writing" className="text-gray-700 hover:text-gray-900">Essays</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="page-fade page-fade--in">
          {/* Hero Section - Matches Justin's exact structure */}
          <section className="hero">
            <h1 aria-label="AI is easy to demo. Hard to operationalize.">
              <span className="animated-word" aria-hidden="true">
                <span className="animated-char">A</span>
                <span className="animated-char">I</span>
              </span>{' '}
              <span className="animated-word" aria-hidden="true">
                <span className="animated-char">i</span>
                <span className="animated-char">s</span>
              </span>{' '}
              <span className="animated-word" aria-hidden="true">
                <span className="animated-char">e</span>
                <span className="animated-char">a</span>
                <span className="animated-char">s</span>
                <span className="animated-char">y</span>
              </span>{' '}
              <span className="animated-word" aria-hidden="true">
                <span className="animated-char">t</span>
                <span className="animated-char">o</span>
              </span>{' '}
              <span className="animated-word" aria-hidden="true">
                <span className="animated-char">d</span>
                <span className="animated-char">e</span>
                <span className="animated-char">m</span>
                <span className="animated-char">o</span>
                <span className="animated-char">.</span>
              </span>{' '}
              <span className="animated-word" aria-hidden="true">
                <span className="animated-char">H</span>
                <span className="animated-char">a</span>
                <span className="animated-char">r</span>
                <span className="animated-char">d</span>
              </span>{' '}
              <span className="animated-word" aria-hidden="true">
                <span className="animated-char">t</span>
                <span className="animated-char">o</span>
              </span>{' '}
              <span className="animated-word" aria-hidden="true">
                <span className="animated-char">o</span>
                <span className="animated-char">p</span>
                <span className="animated-char">e</span>
                <span className="animated-char">r</span>
                <span className="animated-char">a</span>
                <span className="animated-char">t</span>
                <span className="animated-char">i</span>
                <span className="animated-char">o</span>
                <span className="animated-char">n</span>
                <span className="animated-char">a</span>
                <span className="animated-char">l</span>
                <span className="animated-char">i</span>
                <span className="animated-char">z</span>
                <span className="animated-char">e</span>
                <span className="animated-char">.</span>
              </span>
            </h1>
            <p className="lede">Weekly insights on AI strategy for complex organizations.</p>
            <div className="kit-embed">
              {/* Newsletter signup placeholder */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                />
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials Section - Justin Welsh Structure */}
          <section className="testimonials">
            <p className="testimonials-eyebrow">Trusted by <em>enterprise</em> and government leaders</p>
            <ul className="testimonial-list">
              <li className="testimonial">
                <span className="testimonial-quote">"Moshe's framework transformed how we think about AI operationalization."</span>
                <span className="testimonial-attrib">— Healthcare CTO, <em>Fortune 500 Health System</em></span>
              </li>
              <li className="testimonial">
                <span className="testimonial-quote">"Essential reading for anyone implementing AI in complex organizations."</span>
                <span className="testimonial-attrib">— Innovation Director, <em>Federal Agency</em></span>
              </li>
              <li className="testimonial">
                <span className="testimonial-quote">"Clear, practical guidance that works in government environments."</span>
                <span className="testimonial-attrib">— Technology Executive, <em>Public Sector</em></span>
              </li>
            </ul>
          </section>

          {/* Free Resource - Justin Welsh Style */}
          <section className="home-magnet" aria-label="Free resource">
            <h2 className="section-heading">Free Resource</h2>
            <div className="home-magnet-inner">
              <div className="home-magnet-text">
                <h3 className="home-magnet-title">AI Strategy Framework for Complex Organizations</h3>
                <p className="home-magnet-sub">The same approach used by government agencies and healthcare systems</p>
                <a className="home-magnet-cta" href="#framework">Download the free guide</a>
              </div>
              <div className="home-magnet-cover" aria-hidden="true">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-64 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">AI</span>
                </div>
              </div>
            </div>
          </section>

          {/* Most Popular Essays */}
          <section className="home-essays">
            <h2 className="section-heading">Most popular essays</h2>
            <ul className="essay-list">
              <li>
                <a href="#operationalization">
                  <div className="essay-tags"><span>Strategy</span></div>
                  <h3 className="essay-title">Why AI projects fail at scale.</h3>
                  <p className="essay-desc">The gap between demos and production isn't technical—it's organizational. Here's what enterprise leaders get wrong.</p>
                  <div className="essay-meta">
                    <span>Issue #1</span>
                    <span>Coming Soon</span>
                    <span>5 min read</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://lawfareblog.com/contributors/moshe-uziel" target="_blank" rel="noopener noreferrer">
                  <div className="essay-tags"><span>Governance</span></div>
                  <h3 className="essay-title">Global AI governance challenges.</h3>
                  <p className="essay-desc">Analysis of international approaches to AI regulation and governance frameworks. Published in Lawfare.</p>
                  <div className="essay-meta">
                    <span>Published</span>
                    <span>External</span>
                    <span>8 min read</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#agentic">
                  <div className="essay-tags"><span>Agentic</span></div>
                  <h3 className="essay-title">Building enterprise-ready agentic systems.</h3>
                  <p className="essay-desc">Technical and organizational considerations for deploying autonomous AI agents in complex environments.</p>
                  <div className="essay-meta">
                    <span>Issue #3</span>
                    <span>Coming Soon</span>
                    <span>7 min read</span>
                  </div>
                </a>
              </li>
            </ul>
          </section>

          {/* Recent Essays */}
          <section className="home-essays">
            <h2 className="section-heading">Recent essays</h2>
            <ul className="essay-list">
              <li>
                <a href="#operating-models">
                  <div className="essay-tags"><span>Operating Models</span></div>
                  <h3 className="essay-title">AI operating models for complex organizations.<span className="essay-new-badge">New<span className="sr-only"> essay</span></span></h3>
                  <p className="essay-desc">How to structure teams, processes, and capabilities for sustainable AI implementation.</p>
                  <div className="essay-meta">
                    <span>Issue #2</span>
                    <span>Coming Soon</span>
                    <span>6 min read</span>
                  </div>
                </a>
              </li>
            </ul>
            <p className="see-all"><a href="/writing">View the full archive →</a></p>
          </section>

          {/* About Section - Justin Welsh Card Style */}
          <section className="home-about">
            <h2 className="section-heading">About Moshe</h2>
            <div className="home-about-card">
              <div className="home-about-photo" style={{backgroundImage: 'linear-gradient(135deg, #3B82F6, #8B5CF6)'}} aria-hidden="true">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">MU</span>
                </div>
              </div>
              <div className="home-about-body">
                <p className="home-about-text">
                  I focus on the practical challenges of implementing AI at scale in complex organizations. 
                  With experience across government, healthcare, and enterprise sectors, I help organizations 
                  navigate the gap between AI demos and operational reality.
                </p>
                <a className="home-about-more" href="/about">Read more →</a>
              </div>
            </div>
          </section>

          {/* Final CTA - Newsletter */}
          <section className="home-cta">
            <div className="home-cta-inner">
              <h3 className="home-cta-title">One essay, every <em>Tuesday</em> morning.</h3>
              <p className="home-cta-lede">Join 2,000+ executives implementing AI in complex organizations.</p>
              <div className="kit-embed">
                <div className="max-w-md mx-auto space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
              <p className="home-cta-fine">No spam. Unsubscribe anytime.</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer - Justin Welsh Structure */}
      <footer className="foot">
        <div className="foot-top">
          <span className="foot-copy">© 2024 Moshe Uziel</span>
          <nav className="foot-links">
            <Link href="/about">About</Link>
            <Link href="/writing">Essays</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <nav className="foot-social" aria-label="Social media">
          <a href="https://linkedin.com/in/mosheuziel" target="_blank" rel="noopener noreferrer" aria-label="Moshe Uziel on LinkedIn">LinkedIn</a>
          <a href="mailto:hello@mosheuziel.com" aria-label="Email Moshe Uziel">Email</a>
        </nav>
      </footer>
    </div>
  )
}