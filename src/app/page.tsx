import Link from 'next/link'
import { ArrowUpRight, Mail, ExternalLink, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Justin Welsh Style */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Moshe Uziel
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-10">
                <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  About
                </Link>
                <Link href="/writing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Essays
                </Link>
                <Link href="/contact" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Justin Welsh Style with Personal Photo */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Headshot */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-4xl font-bold">MU</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            AI is easy to demo.<br />
            <span className="text-gray-600">Hard to operationalize.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Weekly insights on AI strategy, infrastructure, and agentic systems for complex organizations.
          </p>
          
          {/* Single Focus CTA - Newsletter */}
          <div className="max-w-md mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Join 2,000+ executives</h3>
              <p className="text-gray-600 mb-4 text-sm">Get weekly insights on AI strategy and implementation. One email, every Tuesday.</p>
              <div className="space-y-3">
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
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Trusted by leaders in complex organizations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">CTO</span>
                </div>
                <div>
                  <p className="text-gray-700 mb-3 italic">
                    "Moshe's framework transformed how we think about AI operationalization. 
                    His insights on agentic systems saved us months of trial and error."
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    — Healthcare Technology Executive
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">GOV</span>
                </div>
                <div>
                  <p className="text-gray-700 mb-3 italic">
                    "Clear, practical guidance on AI governance that actually works in 
                    government environments. Essential reading for public sector leaders."
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    — Public Sector Innovation Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Popular Essays - Justin Welsh Style */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Most popular essays</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            The practical challenges of implementing AI at scale in complex organizations.
          </p>
        </div>
        
        <div className="space-y-8">
          <article className="border-b border-gray-100 pb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  Why Most AI Projects Fail at Scale
                </h3>
                <p className="text-gray-600 mb-3">
                  The gap between demos and production isn't technical—it's organizational. Here's what enterprise leaders get wrong about AI operationalization.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>5 min read</span>
                  <span>•</span>
                  <span>AI Strategy</span>
                </div>
              </div>
              <div className="text-right text-sm text-gray-400 ml-6">
                Coming Soon
              </div>
            </div>
          </article>
          
          <article className="border-b border-gray-100 pb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  <a href="https://lawfareblog.com/contributors/moshe-uziel" target="_blank" rel="noopener noreferrer">
                    Global AI Governance: Challenges and Opportunities
                  </a>
                </h3>
                <p className="text-gray-600 mb-3">
                  Analysis of international approaches to AI regulation and governance frameworks. Published in Lawfare.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>8 min read</span>
                  <span>•</span>
                  <span>AI Governance</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-blue-600 ml-6">
                <ExternalLink className="w-4 h-4 mr-1" />
                Published
              </div>
            </div>
          </article>
          
          <article className="border-b border-gray-100 pb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  Building Enterprise-Ready Agentic Systems
                </h3>
                <p className="text-gray-600 mb-3">
                  Technical and organizational considerations for deploying autonomous AI agents that actually work in enterprise environments.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>7 min read</span>
                  <span>•</span>
                  <span>Agentic Systems</span>
                </div>
              </div>
              <div className="text-right text-sm text-gray-400 ml-6">
                Coming Soon
              </div>
            </div>
          </article>
          
          <article className="border-b border-gray-100 pb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  AI Operating Models for Complex Organizations
                </h3>
                <p className="text-gray-600 mb-3">
                  How to structure teams, processes, and capabilities for sustainable AI implementation. Lessons from government and healthcare.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>6 min read</span>
                  <span>•</span>
                  <span>Operating Models</span>
                </div>
              </div>
              <div className="text-right text-sm text-gray-400 ml-6">
                Coming Soon
              </div>
            </div>
          </article>
        </div>
        
        <div className="mt-12">
          <Link 
            href="/writing" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all essays <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lead Magnet - Free Resource */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Free Guide: AI Strategy Framework for Complex Organizations
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The same framework used by government agencies and healthcare systems to successfully operationalize AI at scale.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-8 text-left max-w-lg mx-auto">
              <h3 className="text-lg font-semibold mb-4">What you'll get:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  5-step AI readiness assessment
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Operating model templates for different org types
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Risk management checklist for AI deployment
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Governance framework examples from real implementations
                </li>
              </ul>
              
              <div className="mt-6 space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email for instant access"
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Free Framework
                </button>
              </div>
              
              <p className="text-xs text-gray-400 mt-3 text-center">
                No spam. Unsubscribe at any time. Join 2,000+ executives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Simplified */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Moshe</h2>
            <div className="text-lg text-gray-700 space-y-6">
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
              
              {/* Key Focus Areas */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Focus Areas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI Strategy & Operating Models</li>
                    <li>• Agentic Systems Architecture</li>
                    <li>• AI Governance & Risk Management</li>
                    <li>• Complex Organization Transformation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Sectors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Government & Public Sector</li>
                    <li>• Healthcare Systems</li>
                    <li>• Enterprise Technology</li>
                    <li>• International Organizations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Full background <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's connect</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discussing AI strategy, governance, or agentic systems? Let's explore how we can work together.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:hello@mosheuziel.com" 
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/mosheuziel" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>&copy; 2024 Moshe Uziel</p>
            <div className="flex space-x-6">
              <Link href="/about" className="hover:text-gray-900">About</Link>
              <Link href="/writing" className="hover:text-gray-900">Essays</Link>
              <Link href="/contact" className="hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}