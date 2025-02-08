import { Project, ContactInfo } from '../types';

export const HERO_CONTENT = `Passionate Software Engineer with a knack for crafting elegant solutions to complex problems. Specializing in full-stack development, I bring ideas to life using cutting-edge technologies and best practices. My expertise spans across modern web frameworks, cloud architecture, and scalable system design. I'm dedicated to creating innovative solutions that not only meet business objectives but also deliver exceptional user experiences.`;

export const ABOUT_TEXT = `As a recent Computer Science graduate from CVR College of Engineering in Hyderabad, India, I've transformed my passion for technology into a promising career in software engineering. My journey began with a fascination for how things work under the hood, which has evolved into a deep expertise in full-stack development.

What sets me apart is my holistic approach to problem-solving and my commitment to writing clean, maintainable code. I thrive in collaborative environments where I can contribute my technical skills while learning from others. When I'm not coding, you'll find me expanding my horizons through reading technical literature, exploring new technologies, or tending to my garden – a hobby that has taught me the value of patience and nurturing growth.

I'm particularly passionate about creating scalable web applications and implementing efficient solutions that make a real impact. My experience includes working with modern frameworks and tools, and I'm always eager to embrace new technologies that can enhance project outcomes.`;

export const PROJECTS = [
  {
    title: 'Realtime Chat App using MERN Stack',
    image:
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2000',
    description: `Developed a realtime chat application using the MERN stack with Socket.IO for real-time communication. Implemented custom hooks and Zustand for efficient state management.`,
    technologies: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'Socket.IO',
      'Zustand',
    ],
    githubLink: 'https://github.com/neerajnakka/Mern_ChatApp',
    websiteLink: 'https://mern-chatapp-rfj5.onrender.com/',
  },
  {
    title: 'Netflix Clone using React',
    image:
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2000',
    description:
      'Built a Netflix clone with React, Tailwind CSS, and Firebase. Integrated React Router for seamless navigation and Firebase for authentication.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    githubLink: 'https://github.com/neerajnakka/NetflixReact_Clone',
    websiteLink: 'https://netflix-clone-wi5g.onrender.com/',
  },
  {
    title: 'Portfolio Website',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000',
    description:
      'Dynamic React portfolio showcasing projects with Tailwind CSS design and Framer Motion animations.',
    technologies: [
      'Tailwind CSS',
      'React.js',
      'React Router Dom',
      'Framer Motion',
    ],
    githubLink: 'https://github.com/neerajnakka/PortFolio_React/tree/master',
    websiteLink: 'https://neerajnakka.onrender.com/',
  },
];

export const SKILLS = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Oracle SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  },
  {
    name: 'PL/SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

export const CONTACT = {
  address: 'Hyderabad, India - 500039',
  phoneNo: '+91 9000600559',
  email: 'neerajnakka.n@gmail.com',
};
