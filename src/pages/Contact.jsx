import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
} from 'lucide-react';
import { CONTACT } from '../data';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        e.target.reset();
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-xl p-8 max-w-md w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600">
              I will contact you as soon as possible.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value="76ed8075-75d0-4115-a69e-46d2ac83b2ad"
              />

              {/* Form Fields */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Your message"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <MapPin className="h-8 w-8 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Location
                  </h3>
                  <p className="mt-2 text-gray-600">{CONTACT.address}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                  <p className="mt-2 text-gray-600">{CONTACT.phoneNo}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  <p className="mt-2 text-gray-600">{CONTACT.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
// import { CONTACT } from '../data';
// import { useInView } from 'react-intersection-observer';

// export default function Contact() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/neerajnakka', label: 'GitHub' },
//     {
//       icon: Linkedin,
//       href: 'https://linkedin.com/in/neerajnakka',
//       label: 'LinkedIn',
//     },
//     {
//       icon: Twitter,
//       href: 'https://twitter.com/neerajnakka',
//       label: 'Twitter',
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             Get in <span className="text-indigo-600">Touch</span>
//           </h1>
//           <p className="text-lg text-gray-600">
//             Let's create something amazing together
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <form
//               action="https://api.web3forms.com/submit"
//               method="POST"
//               className="space-y-6"
//             >
//               <input
//                 type="hidden"
//                 name="access_key"
//                 value="76ed8075-75d0-4115-a69e-46d2ac83b2ad"
//               />
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                   placeholder="Your name"
//                 />
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                   placeholder="your.email@example.com"
//                 />
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows={6}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                   placeholder="Your message"
//                 />
//               </motion.div>

//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full px-6 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <MapPin className="h-8 w-8 text-indigo-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     Location
//                   </h3>
//                   <p className="mt-2 text-gray-600">{CONTACT.address}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <Phone className="h-8 w-8 text-indigo-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
//                   <p className="mt-2 text-gray-600">{CONTACT.phoneNo}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <Mail className="h-8 w-8 text-indigo-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-xl font-semibold text-gray-900">Email</h3>
//                   <p className="mt-2 text-gray-600">{CONTACT.email}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 Connect with me
//               </h3>
//               <div className="flex gap-4">
//                 {socialLinks.map((link, index) => (
//                   <motion.a
//                     key={link.label}
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 rounded-full bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 + index * 0.1 }}
//                   >
//                     <link.icon className="h-6 w-6" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
// import { CONTACT } from '../data';
// import { useInView } from 'react-intersection-observer';

// export default function Contact() {
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/neerajnakka', label: 'GitHub' },
//     {
//       icon: Linkedin,
//       href: 'https://linkedin.com/in/neerajnakka',
//       label: 'LinkedIn',
//     },
//     {
//       icon: Twitter,
//       href: 'https://twitter.com/neerajnakka',
//       label: 'Twitter',
//     },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         e.target.reset();
//         setShowSuccessModal(true);
//       }
//     } catch (error) {
//       console.error('Form submission error:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
//       {/* Success Modal */}
//       {showSuccessModal && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           onClick={() => setShowSuccessModal(false)}
//         >
//           <motion.div
//             initial={{ scale: 0.5 }}
//             animate={{ scale: 1 }}
//             className="bg-white rounded-xl p-8 max-w-md w-full text-center relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
//             <p className="text-gray-600">I will contact you as soon as possible.</p>
//             <button
//               onClick={() => setShowSuccessModal(false)}
//               className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
//             >
//               Close
//             </button>
//           </motion.div>
//         </motion.div>
//       )}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* ... rest of your existing code ... */}

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >
//               <input
//                 type="hidden"
//                 name="access_key"
//                 value="76ed8075-75d0-4115-a69e-46d2ac83b2ad"
//               />
//               {/* ... rest of your form fields ... */}
//             </form>
//           </motion.div>

//           {/* ... rest of your existing code ... */}
//         </div>
//       </div>
//     </div>
//   );
// }
