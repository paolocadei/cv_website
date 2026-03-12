import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Me</h1>
            <p className="text-xl text-gray-600">Let's connect and discuss opportunities</p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="tel:+393384972150"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <p className="text-gray-600">+39 3384972150</p>
                </div>
              </a>
              <a 
                href="mailto:paolo.cadei2001@gmail.com"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-gray-600">paolo.cadei2001@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">Location</p>
                  <p className="text-gray-600">Amsterdam, Netherlands / Brussels, Belgium</p>
                </div>
              </div>
              <a 
                href="https://linkedin.com/in/paolo-cadei-a56197226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">LinkedIn</p>
                  <p className="text-gray-600 text-sm">Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            
            {formStatus === 'SUCCESS' ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Message Sent Successfully!</h4>
                  <p>Thanks for your message! I will get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={() => setFormStatus('SUCCESS')}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="block">
                    <span className="text-gray-700 font-semibold">Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700 font-semibold">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="your.email@example.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-gray-700 font-semibold">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="What's this about?"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700 font-semibold">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Contact */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Prefer Direct Contact?</h3>
            <p className="text-lg mb-6 opacity-90">
              Feel free to reach out directly via email or phone for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText('paolo.cadei2001@gmail.com');
                  alert('Email address copied to clipboard!');
                }}
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Copy Email
              </a>
              <a 
                href="tel:+393384972150"
                className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
