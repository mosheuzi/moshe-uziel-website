import Link from 'next/link'
import { ArrowLeft, Mail, ExternalLink, MessageSquare, Calendar } from 'lucide-react'

export default function Contact() {
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
                <Link href="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Interested in discussing AI strategy, governance, agentic systems, or potential collaboration? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ways to Connect</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mb-2">
                      Best for detailed discussions, collaboration proposals, or sharing documents.
                    </p>
                    <a 
                      href="mailto:hello@mosheuziel.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      hello@mosheuziel.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <ExternalLink className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600 mb-2">
                      Connect for professional networking and stay updated on my work.
                    </p>
                    <a 
                      href="https://linkedin.com/in/mosheuziel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      linkedin.com/in/mosheuziel
                    </a>
                  </div>
                </div>

                {/* Speaking */}
                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Speaking Inquiries</h3>
                    <p className="text-gray-600 mb-2">
                      Available for conferences, workshops, and organizational talks on AI strategy and governance.
                    </p>
                    <span className="text-green-600 font-medium">
                      Contact via email above
                    </span>
                  </div>
                </div>

                {/* Consulting */}
                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Advisory & Consulting</h3>
                    <p className="text-gray-600 mb-2">
                      Strategic advisory services for AI implementation, governance frameworks, and organizational transformation.
                    </p>
                    <span className="text-purple-600 font-medium">
                      Inquire about availability
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Topics */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What I'd Love to Discuss</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-800">
                  AI Strategy
                </div>
                <div className="bg-green-50 px-3 py-2 rounded-lg text-sm text-green-800">
                  Agentic Systems
                </div>
                <div className="bg-purple-50 px-3 py-2 rounded-lg text-sm text-purple-800">
                  AI Governance
                </div>
                <div className="bg-orange-50 px-3 py-2 rounded-lg text-sm text-orange-800">
                  Enterprise AI
                </div>
                <div className="bg-red-50 px-3 py-2 rounded-lg text-sm text-red-800">
                  Public Sector AI
                </div>
                <div className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-800">
                  Healthcare AI
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization (optional)
                </label>
                <input 
                  type="text" 
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select 
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a topic</option>
                  <option value="ai-strategy">AI Strategy Consultation</option>
                  <option value="speaking">Speaking Opportunity</option>
                  <option value="collaboration">Collaboration Proposal</option>
                  <option value="advisory">Advisory Services</option>
                  <option value="research">Research Discussion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell me about your project, question, or how I can help..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              I typically respond within 24-48 hours. For urgent matters, please reach out via LinkedIn.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Times & Availability</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-blue-600 font-semibold mb-1">Email</div>
                <div className="text-gray-600 text-sm">24-48 hours</div>
              </div>
              <div>
                <div className="text-blue-600 font-semibold mb-1">LinkedIn</div>
                <div className="text-gray-600 text-sm">1-3 business days</div>
              </div>
              <div>
                <div className="text-blue-600 font-semibold mb-1">Speaking</div>
                <div className="text-gray-600 text-sm">2-5 business days</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Currently based in Israel, working with organizations globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}