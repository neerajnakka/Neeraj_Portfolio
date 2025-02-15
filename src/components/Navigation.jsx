import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { useState } from 'react';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleResumeClick = () => {
    // Replace with your actual resume URL
    const resumeUrl =
      'https://drive.google.com/file/d/10vjXQMq8XNoW7YEMPKBjsRWiNiEVedgK/view';
    window.open(resumeUrl, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full glass-effect z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
            >
              NC
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-500 hover:text-primary-600'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 animated-border-gradient"
                    layoutId="underline"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <motion.button
              onClick={handleResumeClick}
              className="button-gradient px-4 py-2 rounded-full text-sm font-medium glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-4 h-4 mr-2 inline-block" />
              View Resume
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: 'spring', bounce: 0.2 }}
          className="md:hidden glass-effect border-t border-white/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-600 bg-primary-50/50'
                    : 'text-gray-500 hover:text-primary-600 hover:bg-primary-50/30'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <motion.button
              onClick={handleResumeClick}
              className="w-full mt-2 button-gradient px-4 py-2 rounded-md text-base font-medium glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="w-4 h-4 mr-2 inline-block" />
              View Resume
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
