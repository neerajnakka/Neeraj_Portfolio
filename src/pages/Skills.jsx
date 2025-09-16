import { motion } from 'framer-motion';
import { SKILLS } from '../data';

export default function Skills() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h1>
          <p className="text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 hover:shadow-md dark:hover:shadow-gray-900/70 transition-shadow"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}