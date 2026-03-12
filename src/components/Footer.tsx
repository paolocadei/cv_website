import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-400" />
                <span>+39 3384972150</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-400" />
                <span>paolo.cadei2001@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                <span>Amsterdam, Netherlands / Brussels, Belgium</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2 text-orange-400" />
                <span>linkedin.com/in/paolo-cadei-a56197226</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about" className="hover:text-orange-400 transition-colors">About</Link>
              <Link to="/education" className="hover:text-orange-400 transition-colors">Education</Link>
              <Link to="/experience" className="hover:text-orange-400 transition-colors">Experience</Link>
              <Link to="/projects" className="hover:text-orange-400 transition-colors">Projects</Link>
              <Link to="/skills" className="hover:text-orange-400 transition-colors">Skills</Link>
              <Link to="/hobbies" className="hover:text-orange-400 transition-colors">Hobbies</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">© 2024 Paolo Cadei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;