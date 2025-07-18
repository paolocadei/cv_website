import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, GraduationCap, Briefcase, FolderOpen, Heart, Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold">Welcome.</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:bg-orange-600 px-3 py-2 rounded transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:bg-orange-600 px-3 py-2 rounded transition-colors">
              <User className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link to="/education" className="flex items-center space-x-1 hover:bg-orange-600 px-3 py-2 rounded transition-colors">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </Link>
            <Link to="/experience" className="flex items-center space-x-1 hover:bg-orange-600 px-3 py-2 rounded transition-colors">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-1 hover:bg-orange-600 px-3 py-2 rounded transition-colors">
              <FolderOpen className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            <Link to="/skills" className="flex items-center space-x-1 hover:bg-orange-600 px-3 py-2 rounded transition-colors">
              <Code className="w-4 h-4" />
              <span>Skills</span>
            </Link>
            <Link to="/hobbies" className="flex items-center space-x-1 hover:bg-orange-600 px-3 py-2 rounded transition-colors">
              <Heart className="w-4 h-4" />
              <span>Hobbies</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;