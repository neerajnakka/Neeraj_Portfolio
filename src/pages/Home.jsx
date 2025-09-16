import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_CONTENT } from '../data';
import ThreeScene from '../components/ThreeScene';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
    >
      {text}
    </motion.span>
  );
};

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/neerajnakka', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/neerajchandran',
      label: 'LinkedIn',
    },
    // {
    //   icon: Twitter,
    //   href: 'https://twitter.com/neerajnakka',
    //   label: 'Twitter',
    // },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center py-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm <AnimatedText text="Neeraj" />
              </motion.h1>
              <motion.h2
                className="text-3xl md:text-4xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatedText text="Software Engineer" />
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-indigo-600 text-white transition-transform hover:scale-105"
              >
                <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-300"></span>
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <div className="flex gap-4 items-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-600 dark:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
            <ThreeScene />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
