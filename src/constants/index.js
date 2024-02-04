import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  fast,
  miu
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Back-End Software Engineer',
    company_name: 'FastModel Sports',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2023 - In Progress',
  },
  {
    title: 'Software Engineer (Full Stack)',
    company_name: 'Contour Software | Constellation Inc',
    icon: microverse,
    iconBg: '#333333',
    date: 'Apr 2022 - Oct 2022',
  },
  {
    title: 'Software Engineer (Full Stack)',
    company_name: 'GoodCore Software Ltd',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jun 2019 - Apr 2022',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'ShopMe',
    description: 'Online Retail System where user can buy listed products.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/LongNH50/OnlineRetailSystem',
    demo: 'https://github.com/LongNH50/OnlineRetailSystem',
  },
  {
    id: 'project-2',
    name: 'FastRecruit',
    description:
      'A plateform where coaches can recruit basketball players in the colleges.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://fastmodelsports.com/pages/fastrecruit-pro',
    demo: 'https://fastmodelsports.com/pages/fastrecruit-pro',
  },
  {
    id: 'project-3',
    name: 'Metalogics',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/LongNH50/OnlineRetailSystem',
    demo: 'https://github.com/LongNH50/OnlineRetailSystem',
  },
  {
    id: 'project-4',
    name: 'FastDraw',
    description: `This software used to draw the basketball games for their teams.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://fastmodelsports.com/products/fastdraw-play-diagramming-software',
    demo: 'https://fastmodelsports.com/products/fastdraw-play-diagramming-software',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/LongNH50/OnlineRetailSystem',
    demo: 'https://github.com/LongNH50/OnlineRetailSystem',
  },
];

const education = [
  {
    title: 'Masters of Science in Computer Science',
    institute: 'Maharishi International University – Iowa, USA',
    icon: miu,
    date: 'Nov 2022 - In Progress (Via Distance Education)',
    grade: 'CGPA: 3.81'
  },  {
    title: 'Bachelors Of Computer Science',
    institute: 'National University of Computer and Emerging Sciences, Karachi, Pakistan',
    icon: fast,
    date: 'Aug 2015 - Jun 2019',
    grade: 'CGPA: 3.06'
  },
]

export { services, technologies, experiences, projects, education };
