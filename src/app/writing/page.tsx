import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'

export default function Writing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-semibold text-gray-900">
                Moshe Uziel
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/writing" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Writing
                </Link>
                <Link href="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
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
          className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mb-8"
        >
          <ArrowLeft className="mr-1 w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Writing</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Essays and analysis on AI strategy, governance, infrastructure, and the practical 
            challenges of implementing AI at scale in complex organizations.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">All</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">AI Governance</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Operating Models</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Agentic Systems</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">AI Strategy</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Public Sector</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Healthcare AI</span>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-12">
          {/* Published Article */}
          <article className="border-b border-gray-200 pb-12">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">AI Governance</span>
                  <span className="text-gray-500 text-sm">Published on Lawfare</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">December 2023</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <a 
                    href="https://lawfareblog.com/contributors/moshe-uziel" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Global AI Governance: Challenges and Opportunities
                  </a>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  An analysis of the current state of international AI governance frameworks, examining the 
                  challenges of coordinating AI policy across different jurisdictions and the opportunities 
                  for establishing effective global standards for AI development and deployment.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://lawfareblog.com/contributors/moshe-uziel" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read on Lawfare <ArrowUpRight className="ml-1 w-4 h-4" />
                  </a>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">12 min read</span>
                </div>
              </div>
            </div>
          </article>

          {/* Coming Soon Articles */}
          <article className="border-b border-gray-200 pb-12 opacity-75">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Operating Models</span>
                  <span className="text-gray-500 text-sm">Coming Soon</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  AI Operationalization in Complex Organizations
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Why most AI projects fail when organizations try to scale them beyond proof-of-concept, 
                  and how to build sustainable AI capabilities that deliver consistent value. Examining 
                  the organizational, technical, and cultural factors that determine AI implementation success.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Draft in progress</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">~15 min read</span>
                </div>
              </div>
            </div>
          </article>

          <article className="border-b border-gray-200 pb-12 opacity-75">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">Agentic Systems</span>
                  <span className="text-gray-500 text-sm">Coming Soon</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Building Enterprise-Ready Agentic Systems
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Technical and organizational considerations for deploying autonomous AI agents in enterprise 
                  environments. From architecture patterns to governance frameworks, exploring what it takes 
                  to build agentic systems that actually work at scale.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Research phase</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">~18 min read</span>
                </div>
              </div>
            </div>
          </article>

          <article className="border-b border-gray-200 pb-12 opacity-75">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">Public Sector</span>
                  <span className="text-gray-500 text-sm">Coming Soon</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  AI Strategy for Public Sector Transformation
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The unique challenges and opportunities of implementing AI within government organizations. 
                  How public sector constraints around transparency, accountability, and public interest 
                  create both barriers and design principles for responsible AI deployment.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Outline complete</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">~14 min read</span>
                </div>
              </div>
            </div>
          </article>

          <article className="border-b border-gray-200 pb-12 opacity-75">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Healthcare AI</span>
                  <span className="text-gray-500 text-sm">Coming Soon</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Lessons from Healthcare AI Implementation
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  What the healthcare sector's experience with AI teaches us about responsible deployment 
                  in high-stakes environments. From regulatory compliance to clinical workflows, examining 
                  the practical lessons that apply across critical sectors.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Research phase</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">~16 min read</span>
                </div>
              </div>
            </div>
          </article>

          {/* Hebrew Content Section */}
          <article className="border-b border-gray-200 pb-12 opacity-75">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">AI Strategy</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium">עברית</span>
                  <span className="text-gray-500 text-sm">Coming Soon</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  מודלים תפעוליים לבינה מלאכותית בארגונים מורכבים
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  כיצד ארגונים יכולים לבנות יכולות בינה מלאכותית בנות קיימא. ניתוח של הגורמים הארגוניים, 
                  הטכניים והתרבותיים שקובעים הצלחה ביישום בינה מלאכותית בקנה מידה.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">בהכנה</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">זמן קריאה משויך: כ-20 דקות</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-4">
            Get notified when new essays are published.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}