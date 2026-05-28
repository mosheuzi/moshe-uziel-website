import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Mail, ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-semibold text-white">
                Moshe Uziel
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-zinc-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/writing" className="text-zinc-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                  Essays
                </Link>
                <Link href="/about" className="text-yellow-400 hover:text-yellow-300 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-zinc-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link 
          href="/"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-medium mb-8"
        >
          <ArrowLeft className="mr-1 w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About</h1>
          <p className="text-xl text-zinc-300 max-w-3xl">
            AI Technology Leader at the Israel National Digital Agency. Former CTO. Former Chief Data Scientist for the TIMNA healthcare AI platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                Moshe started in data and business, moved into applied healthcare AI and national health data platforms through TIMNA, then into private-sector CTO roles, and today works on government-wide AI adoption at the Israel National Digital Agency.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                This path shaped his view that AI is not just a demo layer or a productivity tool, but an operating capability that requires strategy, infrastructure, governance, product thinking, and organizational change.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-8">
                His current work focuses on AI operating models, agentic systems, governance, infrastructure, and complex organizations — areas where AI's promise meets the reality of implementation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Career Journey</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Healthcare AI and National Data Platforms</h3>
                  <p className="text-zinc-300 mb-3">
                    Earlier in his career, he led data science work for TIMNA, Israel's national health research platform, where he worked on applied machine learning, NLP, computer vision, anonymization, and national-scale health data infrastructure.
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Projects included unplanned cesarean delivery prediction, longitudinal HbA1c trends, pediatric development screening, medical free-text classification, pathology document processing, entity extraction, anonymization, and clinical image analysis.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Private-Sector AI and Product Execution</h3>
                  <p className="text-zinc-300 mb-3">
                    He later served as CTO at Stat-Market and co-founder and CTO at umAI, working on AI products, cloud architectures, enterprise delivery, and ROI-oriented execution.
                  </p>
                  <p className="text-zinc-400 text-sm">
                    This experience shaped a practical view of AI: good models are not enough. AI needs to connect to products, workflows, users, business value, cost discipline, and implementation constraints.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Government AI Transformation</h3>
                  <p className="text-zinc-300 mb-3">
                    Today, his work focuses on the harder part of AI adoption: not the demo, but the operating layer. Strategy, governance, cloud and data infrastructure, permissions, product thinking, and organizational change all need to come together before AI becomes a real capability.
                  </p>
                  <p className="text-zinc-400 text-sm">
                    At the Israel National Digital Agency, he works on GOVAI, the AI Expertise Center, cross-government AI adoption, infrastructure thinking, and governance frameworks.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Focus Areas</h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Moshe writes about AI operating models, agentic systems, AI infrastructure, AI governance, healthcare AI, public-sector transformation, and national AI strategy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">AI Operating Models</h3>
                  <p className="text-zinc-300 text-sm">
                    How organizations move from pilots and tools to repeatable AI capabilities.
                  </p>
                </div>
                
                <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Agentic Systems</h3>
                  <p className="text-zinc-300 text-sm">
                    How AI agents, orchestration, permissions, and workflows change organizational work.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">AI Infrastructure and Governance</h3>
                  <p className="text-zinc-300 text-sm">
                    The platforms, cloud environments, data layers, and guardrails needed to scale AI responsibly.
                  </p>
                </div>
                
                <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">AI Strategy for Complex Organizations</h3>
                  <p className="text-zinc-300 text-sm">
                    Lessons from healthcare, enterprise, and government on adopting AI where complexity is real.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Writing & Thinking</h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Moshe writes about AI operating models, agentic systems, AI infrastructure, AI governance, healthcare AI, public-sector transformation, and national AI strategy. He is a co-author of a Lawfare article on global AI governance through a layered framework.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.lawfaremedia.org/article/understanding-global-ai-governance-through-a-three-layer-framework" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
                >
                  Lawfare Article <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
                <a 
                  href="https://www.lawfaremedia.org/contributors/muziel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
                >
                  Lawfare Profile <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
                <Link 
                  href="/writing"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
                >
                  All Writing <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-zinc-900 border border-zinc-700 rounded-lg p-8 shadow-2xl">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Interested in discussing AI strategy, governance, or agentic systems? 
              I'm always happy to explore collaboration opportunities and share insights.
            </p>
            
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:hello@mosheuziel.com" 
                className="flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-lg hover:from-amber-500 hover:to-yellow-400 transition-all shadow-lg"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email
              </a>
              <a 
                href="https://linkedin.com/in/moshe-uziel-4909175a" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-zinc-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                LinkedIn
              </a>
              <Link 
                href="/contact"
                className="flex items-center border border-zinc-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                More Ways to Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}