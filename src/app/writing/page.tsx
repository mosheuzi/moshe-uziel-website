import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'

export default function Writing() {
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
                <Link href="/writing" className="text-yellow-400 hover:text-yellow-300 px-3 py-2 text-sm font-medium">
                  Essays
                </Link>
                <Link href="/about" className="text-zinc-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
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
          <h1 className="text-4xl font-bold text-white mb-4">Featured Thinking</h1>
          <p className="text-xl text-zinc-300 max-w-3xl">
            Essays and analysis on AI strategy, governance, infrastructure, agentic systems, and the practical 
            challenges of implementing AI at scale in complex organizations.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm font-medium">All</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700 cursor-pointer">AI Governance</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700 cursor-pointer">AI Operating Models</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700 cursor-pointer">Agentic AI</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700 cursor-pointer">AI Strategy</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700 cursor-pointer">Public Sector AI</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700 cursor-pointer">Healthcare AI</span>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-12">
          {/* Published Article */}
          <article className="border-b border-zinc-700 pb-12">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-yellow-400 text-black rounded text-xs font-medium">AI Governance</span>
                  <span className="text-zinc-400 text-sm">Published on Lawfare</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 text-sm">2024</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-yellow-400 transition-colors">
                  <a 
                    href="https://www.lawfaremedia.org/article/understanding-global-ai-governance-through-a-three-layer-framework" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Understanding Global AI Governance Through a Three-Layer Framework
                  </a>
                </h2>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  A layered way to understand global AI governance, inspired by internet governance and applied to a fragmented AI policy landscape.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.lawfaremedia.org/article/understanding-global-ai-governance-through-a-three-layer-framework" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                  >
                    Read on Lawfare <ArrowUpRight className="ml-1 w-4 h-4" />
                  </a>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 text-sm">8 min read</span>
                </div>
              </div>
            </div>
          </article>

          {/* Topics I'm Exploring */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Topics I'm Exploring</h2>
            <p className="text-zinc-400 mb-8">Areas of current research and thinking that will inform future writing.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-amber-500 text-black rounded text-xs font-medium">AI Operating Models</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">From AI Demos to Operational Reality</h3>
                <p className="text-zinc-300 text-sm">
                  How organizations move beyond pilots and tools to build repeatable AI capabilities that integrate with existing workflows and create measurable value.
                </p>
              </div>
              
              <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-purple-500 text-black rounded text-xs font-medium">Agentic AI</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Agentic Systems Architecture</h3>
                <p className="text-zinc-300 text-sm">
                  Why agentic AI requires permissions, workflows, orchestration, evaluation frameworks, and operating models — not just smart models.
                </p>
              </div>
              
              <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-orange-500 text-black rounded text-xs font-medium">Public Sector AI</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Government AI as Enterprise Preview</h3>
                <p className="text-zinc-300 text-sm">
                  What complex public institutions teach us about AI adoption in regulated, high-stakes, multi-stakeholder environments with real constraints.
                </p>
              </div>
              
              <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-red-500 text-black rounded text-xs font-medium">Healthcare AI</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">TIMNA Platform Lessons</h3>
                <p className="text-zinc-300 text-sm">
                  Insights from building national-scale healthcare AI: sensitive data handling, predictive modeling, NLP systems, and real-world deployment challenges.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-zinc-900 border border-zinc-700 rounded-lg p-8 text-center shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-2">Follow My Work</h3>
          <p className="text-zinc-300 mb-6">
            Connect with me on LinkedIn, or reach out for speaking, advisory, or strategic collaboration.
          </p>
          <div className="max-w-md mx-auto space-y-3 flex flex-col sm:flex-row gap-3">
            <a href="https://linkedin.com/in/moshe-uziel-4909175a" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-3 px-6 rounded-lg hover:from-amber-500 hover:to-yellow-400 transition-all font-medium shadow-lg text-center">
              Connect on LinkedIn
            </a>
            <a href="/contact" className="flex-1 bg-zinc-800 text-white py-3 px-6 rounded-lg hover:bg-zinc-700 transition-all font-medium border border-zinc-600 text-center">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}