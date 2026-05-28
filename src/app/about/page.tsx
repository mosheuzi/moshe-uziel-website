import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Mail, ExternalLink } from 'lucide-react'

export default function About() {
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
                <Link href="/writing" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Writing
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Helping complex organizations bridge the gap between AI demos and operational reality.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Focus Areas</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I work at the intersection of AI strategy, technical implementation, and organizational change. 
                My focus is on the practical challenges that complex organizations face when trying to move 
                from AI proof-of-concepts to sustainable, value-creating AI capabilities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Strategy & Governance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI operating model design</li>
                    <li>• Governance framework development</li>
                    <li>• Risk management strategies</li>
                    <li>• Policy analysis and recommendations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Implementation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI infrastructure architecture</li>
                    <li>• Agentic systems design</li>
                    <li>• Enterprise AI platforms</li>
                    <li>• Scalability and reliability patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                My work spans across government, healthcare, and enterprise sectors. I've been involved in 
                designing AI strategies for large-scale organizations, developing governance frameworks for 
                responsible AI deployment, and building technical architectures for agentic systems.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">Government & Public Sector</h3>
                  <p className="text-gray-700">
                    AI strategy development, policy analysis, and implementation planning for public sector 
                    organizations. Focus on transparency, accountability, and public interest considerations 
                    in AI deployment.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">Healthcare & Critical Sectors</h3>
                  <p className="text-gray-700">
                    AI implementation in high-stakes environments with stringent regulatory requirements. 
                    Experience with clinical workflows, compliance frameworks, and risk management in 
                    safety-critical applications.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">Enterprise & Complex Organizations</h3>
                  <p className="text-gray-700">
                    Large-scale AI transformation projects, from strategy development to technical 
                    implementation. Focus on sustainable AI capabilities that integrate with existing 
                    organizational structures and processes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most AI projects fail not because of technical limitations, but because organizations 
                underestimate the complexity of operationalizing AI at scale. My approach focuses on:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Systems Thinking</h3>
                  <p className="text-gray-700 text-sm">
                    Understanding how AI capabilities interact with existing organizational systems, 
                    processes, and culture.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pragmatic Implementation</h3>
                  <p className="text-gray-700 text-sm">
                    Building AI solutions that work within real-world constraints while creating 
                    sustainable value.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsible Scaling</h3>
                  <p className="text-gray-700 text-sm">
                    Ensuring AI deployments are transparent, accountable, and aligned with 
                    organizational values and public interest.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Writing & Speaking</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I write about the intersection of AI technology, organizational strategy, and policy. 
                My work has appeared in policy publications, and I regularly speak at conferences 
                about AI governance and implementation challenges.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://lawfareblog.com/contributors/moshe-uziel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Lawfare Contributions <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
                <Link 
                  href="/writing"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  All Writing <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Background</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I combine technical expertise in AI systems with strategic experience in organizational 
                transformation and policy development. This background allows me to work across the full 
                spectrum of AI implementation challenges, from technical architecture to governance frameworks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When not working on AI strategy, I enjoy exploring the policy implications of emerging 
                technologies and contributing to discussions about responsible AI development and deployment.
              </p>
            </section>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in discussing AI strategy, governance, or agentic systems? 
              I'm always happy to explore collaboration opportunities and share insights.
            </p>
            
            <div className="flex justify-center space-x-4">
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
              <Link 
                href="/contact"
                className="flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors"
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