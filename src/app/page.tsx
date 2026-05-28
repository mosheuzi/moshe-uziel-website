import Link from 'next/link'
import { ArrowUpRight, Mail, ExternalLink } from 'lucide-react'

export default function Home() {
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
                <Link href="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/writing" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI is easy to demo.<br />
            <span className="text-blue-600">Hard to operationalize.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Helping complex organizations navigate AI strategy, infrastructure, governance, 
            and agentic systems transformation.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/writing" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read My Thinking
            </Link>
            <Link 
              href="/contact" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-6">Trusted by organizations in</p>
            <div className="flex justify-center items-center space-x-12 text-gray-400">
              <span className="font-semibold">Government</span>
              <span className="font-semibold">Healthcare</span>
              <span className="font-semibold">Enterprise</span>
              <span className="font-semibold">Public Sector</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Write About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Write About</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focused on the practical challenges of implementing AI at scale in complex organizations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🏗️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Operating Models</h3>
            <p className="text-gray-600">How organizations structure teams, processes, and capabilities for AI success.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Agentic Systems</h3>
            <p className="text-gray-600">Building and scaling autonomous AI systems that work in enterprise environments.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl">🔐</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Infrastructure & Governance</h3>
            <p className="text-gray-600">Technical foundations and policy frameworks for responsible AI deployment.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Strategy</h3>
            <p className="text-gray-600">Strategic planning and implementation for complex organizations and public sector.</p>
          </div>
        </div>
      </section>

      {/* Featured Thinking Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Thinking</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recent essays and analysis on AI implementation challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-blue-600 font-medium mb-2">AI Governance</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global AI Governance: Challenges and Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Analysis of international approaches to AI regulation and governance frameworks.
              </p>
              <a 
                href="https://lawfareblog.com/contributors/moshe-uziel" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Lawfare <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-green-600 font-medium mb-2">Operating Models</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Operationalization in Complex Organizations</h3>
              <p className="text-gray-600 mb-4">
                Why most AI projects fail at scale and how to build sustainable AI capabilities.
              </p>
              <span className="text-gray-400 text-sm">Coming Soon</span>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-purple-600 font-medium mb-2">Agentic Systems</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Enterprise-Ready Agentic Systems</h3>
              <p className="text-gray-600 mb-4">
                Technical and organizational considerations for deploying autonomous AI agents.
              </p>
              <span className="text-gray-400 text-sm">Coming Soon</span>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-orange-600 font-medium mb-2">Public Sector</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Strategy for Public Sector Transformation</h3>
              <p className="text-gray-600 mb-4">
                Unique challenges and opportunities in implementing AI within government organizations.
              </p>
              <span className="text-gray-400 text-sm">Coming Soon</span>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-red-600 font-medium mb-2">Healthcare AI</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lessons from Healthcare AI Implementation</h3>
              <p className="text-gray-600 mb-4">
                What the healthcare sector teaches us about responsible AI deployment.
              </p>
              <span className="text-gray-400 text-sm">Coming Soon</span>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/writing" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Writing <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Selected Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key projects and initiatives in AI strategy and implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">AI Governance & Policy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mt-2">•</span>
                <span className="ml-3 text-gray-700">Development of AI governance frameworks for large-scale organizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mt-2">•</span>
                <span className="ml-3 text-gray-700">Policy analysis and recommendations for international AI regulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mt-2">•</span>
                <span className="ml-3 text-gray-700">Risk management strategies for AI deployment in critical sectors</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">AI Infrastructure & Strategy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mt-2">•</span>
                <span className="ml-3 text-gray-700">Design and implementation of enterprise AI operating models</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mt-2">•</span>
                <span className="ml-3 text-gray-700">Technical architecture for scalable agentic systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mt-2">•</span>
                <span className="ml-3 text-gray-700">AI transformation roadmaps for complex organizations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                I focus on the practical challenges of implementing AI at scale in complex organizations. 
                My work spans AI strategy, infrastructure design, governance frameworks, and the development 
                of agentic systems that actually work in enterprise environments.
              </p>
              <p>
                With experience across government, healthcare, and enterprise sectors, I help organizations 
                navigate the gap between AI demos and operational reality. The focus is always on sustainable, 
                responsible AI capabilities that create real value.
              </p>
              <p>
                When not working on AI strategy, I write about the intersection of technology and policy, 
                particularly around AI governance and regulation.
              </p>
            </div>
            <div className="mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Interested in discussing AI strategy, governance, or agentic systems? 
            Let's connect and explore how we can work together.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:hello@mosheuziel.com" 
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email
            </a>
            <a 
              href="https://linkedin.com/in/mosheuziel" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors"
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Moshe Uziel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}