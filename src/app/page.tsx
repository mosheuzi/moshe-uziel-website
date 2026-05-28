import Link from 'next/link'
import { ArrowUpRight, Mail, ExternalLink, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header Navigation - Exact Justin Welsh Structure */}
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-avatar" aria-hidden="true">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                <span className="text-black text-sm font-bold">MU</span>
              </div>
            </span>
            <span className="brand-full">mosheuziel.</span>
            <span className="brand-short">mu.</span>
          </Link>
          <nav className="links">
            <Link href="/about" className="text-zinc-300 hover:text-yellow-400">About</Link>
            <Link href="/writing" className="text-zinc-300 hover:text-yellow-400">Essays</Link>
            <Link href="/contact" className="text-zinc-300 hover:text-yellow-400">Contact</Link>
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
            <p className="lede">I write about how complex organizations turn AI experiments into real capabilities, connecting strategy, infrastructure, governance, product execution, and agentic systems.</p>
              <div className="kit-embed">
              {/* Newsletter signup placeholder */}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700 max-w-md mx-auto shadow-2xl">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 text-white placeholder-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent mb-3"
                />
                <button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-3 rounded-lg hover:from-amber-500 hover:to-yellow-400 transition-all font-medium shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* Credibility Strip - From Content Pack */}
          <section className="testimonials">
            <p className="testimonials-eyebrow">Work and thinking connected to</p>
            <div className="text-center text-zinc-400 text-sm font-medium">
              Israel National Digital Agency · Ministry of Health · TIMNA · Stat-Market · umAI · Lawfare
            </div>
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
                <div className="bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 w-64 h-80 rounded-lg flex items-center justify-center shadow-2xl">
                  <span className="text-black text-6xl font-bold">AI</span>
                </div>
              </div>
            </div>
          </section>

          {/* What I Write About - From Content Pack */}
          <section className="home-essays">
            <h2 className="section-heading">What I Write About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold text-white mb-3">AI Operating Models</h3>
                <p className="text-zinc-300 text-sm">How organizations move from pilots and tools to repeatable AI capabilities.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold text-white mb-3">Agentic Systems</h3>
                <p className="text-zinc-300 text-sm">How AI agents, orchestration, permissions, and workflows change organizational work.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold text-white mb-3">AI Infrastructure and Governance</h3>
                <p className="text-zinc-300 text-sm">The platforms, cloud environments, data layers, and guardrails needed to scale AI responsibly.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold text-white mb-3">AI Strategy for Complex Organizations</h3>
                <p className="text-zinc-300 text-sm">Lessons from healthcare, enterprise, and government on adopting AI where complexity is real.</p>
              </div>
            </div>
          </section>

          {/* Featured Thinking */}
          <section className="home-essays">
            <h2 className="section-heading">Featured Thinking</h2>
            <ul className="essay-list">
              <li>
                <a href="https://www.lawfaremedia.org/article/understanding-global-ai-governance-through-a-three-layer-framework" target="_blank" rel="noopener noreferrer">
                  <div className="essay-tags"><span>AI Governance</span></div>
                  <h3 className="essay-title">Understanding Global AI Governance Through a Three-Layer Framework</h3>
                  <p className="essay-desc">A layered way to understand global AI governance, inspired by internet governance and applied to a fragmented AI policy landscape.</p>
                  <div className="essay-meta">
                    <span>Published</span>
                    <span>Lawfare</span>
                    <span>8 min read</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#operationalize">
                  <div className="essay-tags"><span>AI Operating Models</span></div>
                  <h3 className="essay-title">AI is easy to demo. Hard to operationalize.</h3>
                  <p className="essay-desc">Why the next phase of AI adoption is not about more tools, but about operating models, infrastructure, governance, and execution.</p>
                  <div className="essay-meta">
                    <span>Coming Soon</span>
                    <span>Internal</span>
                    <span>6 min read</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#public-sector">
                  <div className="essay-tags"><span>Public Sector AI</span></div>
                  <h3 className="essay-title">Public-sector AI as a proving ground for enterprise AI</h3>
                  <p className="essay-desc">What complex public institutions teach us about AI adoption in regulated, high-stakes, multi-stakeholder environments.</p>
                  <div className="essay-meta">
                    <span>Coming Soon</span>
                    <span>Internal</span>
                    <span>7 min read</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#agentic">
                  <div className="essay-tags"><span>Agentic AI</span></div>
                  <h3 className="essay-title">Agentic systems need more than agents</h3>
                  <p className="essay-desc">Why agentic AI requires permissions, workflows, orchestration, evaluation, and operating models, not just smart models.</p>
                  <div className="essay-meta">
                    <span>Coming Soon</span>
                    <span>Internal</span>
                    <span>5 min read</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#healthcare">
                  <div className="essay-tags"><span>Healthcare AI</span></div>
                  <h3 className="essay-title">Lessons from healthcare AI and national data platforms</h3>
                  <p className="essay-desc">What healthcare AI projects can teach complex organizations about sensitive data, predictive models, NLP, and real-world adoption.</p>
                  <div className="essay-meta">
                    <span>Coming Soon</span>
                    <span>Internal</span>
                    <span>8 min read</span>
                  </div>
                </a>
              </li>
            </ul>
          </section>

          {/* Selected Work Section - From Content Pack */}
          <section className="home-essays">
            <h2 className="section-heading">Selected Work</h2>
            <div className="space-y-8">
              <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare AI and National Data Platforms</h3>
                <p className="text-zinc-300 text-sm mb-3">Applied AI work in healthcare, including predictive models, medical NLP, computer vision, anonymization, and national-scale research infrastructure through TIMNA.</p>
                <p className="text-zinc-400 text-xs">This work included projects on unplanned cesarean delivery prediction, longitudinal HbA1c trends, pediatric development screening, medical free-text classification, pathology document processing, entity extraction, anonymization, and clinical image analysis.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold text-white mb-3">Private-Sector AI and Product Execution</h3>
                <p className="text-zinc-300 text-sm mb-3">CTO work across AI product development, enterprise delivery, cloud architecture, supervised and unsupervised machine learning, product-market fit, and ROI-oriented execution.</p>
                <p className="text-zinc-400 text-xs">This experience shaped a practical view of AI: good models are not enough. AI needs to connect to products, workflows, users, business value, cost discipline, and implementation constraints.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold text-white mb-3">Government AI Transformation</h3>
                <p className="text-zinc-300 text-sm mb-3">AI leadership at the Israel National Digital Agency, including GOVAI, the AI Expertise Center, cross-government AI adoption, infrastructure thinking, and governance.</p>
                <p className="text-zinc-400 text-xs">This work focuses on turning AI from isolated experiments into shared capabilities that can serve many public institutions safely and effectively.</p>
              </div>
            </div>
          </section>

          {/* About Section - Justin Welsh Card Style */}
          <section className="home-about">
            <h2 className="section-heading">About Moshe</h2>
            <div className="home-about-card">
              <div className="home-about-photo" style={{backgroundImage: 'linear-gradient(135deg, #FBBF24, #F59E0B)'}} aria-hidden="true">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-black text-6xl font-bold">MU</span>
                </div>
              </div>
              <div className="home-about-body">
                <p className="home-about-text">
                  AI Technology Leader at the Israel National Digital Agency. Former CTO. Former Chief Data Scientist for the TIMNA healthcare AI platform.
                </p>
                <p className="home-about-text text-sm text-zinc-400 mt-2">
                  Moshe's work sits at the intersection of AI strategy, infrastructure, governance, product execution, and agentic systems for complex organizations.
                </p>
                <a className="home-about-more" href="/about">Read more →</a>
              </div>
            </div>
          </section>

          {/* Final CTA - Newsletter */}
          <section className="home-cta">
            <div className="home-cta-inner">
              <h3 className="home-cta-title">Follow my Work</h3>
              <p className="home-cta-lede">I write about how complex organizations move from AI experimentation to real AI capabilities.</p>
                <div className="kit-embed">
                <div className="max-w-md mx-auto space-y-3 flex flex-col sm:flex-row gap-3">
                  <a href="https://linkedin.com/in/moshe-uziel-4909175a" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-3 px-6 rounded-lg hover:from-amber-500 hover:to-yellow-400 transition-all font-medium shadow-lg text-center">
                    Connect on LinkedIn
                  </a>
                  <a href="/writing" className="flex-1 bg-zinc-800 text-white py-3 px-6 rounded-lg hover:bg-zinc-700 transition-all font-medium border border-zinc-600 text-center">
                    Read my writing
                  </a>
                  <a href="/contact" className="flex-1 bg-zinc-800 text-white py-3 px-6 rounded-lg hover:bg-zinc-700 transition-all font-medium border border-zinc-600 text-center">
                    Contact me
                  </a>
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
          <a href="https://linkedin.com/in/moshe-uziel-4909175a" target="_blank" rel="noopener noreferrer" aria-label="Moshe Uziel on LinkedIn">LinkedIn</a>
          <a href="mailto:hello@mosheuziel.com" aria-label="Email Moshe Uziel">Email</a>
        </nav>
      </footer>
    </div>
  )
}