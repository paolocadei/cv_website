import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, GraduationCap, Briefcase, FolderOpen, Heart, Code } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const getLinkClasses = (path: string) => {
    const baseClasses = "flex items-center space-x-1 px-3 py-2 rounded transition-colors";
    const activeClasses = "bg-orange-700 text-white";
    const inactiveClasses = "hover:bg-orange-600";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold">Welcome.</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className={getLinkClasses("/")}>
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className={getLinkClasses("/about")}>
              <User className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link to="/education" className={getLinkClasses("/education")}>
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </Link>
            <Link to="/experience" className={getLinkClasses("/experience")}>
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </Link>
            <Link to="/projects" className={getLinkClasses("/projects")}>
              <FolderOpen className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            <Link to="/skills" className={getLinkClasses("/skills")}>
              <Code className="w-4 h-4" />
              <span>Skills</span>
            </Link>
            <Link to="/hobbies" className={getLinkClasses("/hobbies")}>
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