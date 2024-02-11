export interface Project {
    image: string;
    title: string;
    text: string;
    technologies: string[];
    githubLink: string;
}

export interface Event {
    title: string;
    dateFrom: string;
    dateTo: string;
    location: string;
    description: string;
    technologies?: string[];
}

export const projects: Project[] = [
    {
      image: '/mock.svg',
      title: 'Farahz',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      technologies: ['React', 'Express.js', 'NodeJs'],
      githubLink: 'https://github.com/Fabiansson/InboxSieve'
    },
    {
      image: '/mock.svg',
      title: 'Awesome Chat App',
      text: 'A real-time chat application built with React, Node.js, and Socket.IO. Chat with your friends and colleagues instantly!',
      technologies: ['React', 'Node.js', 'Socket.IO'],
      githubLink: 'https://github.com/yourusername/awesome-chat-app'
    },
    {
      image: '/mock.svg',
      title: 'Ecommerce Website',
      text: 'A full-stack ecommerce website where users can browse products, add them to cart, and make purchases securely.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/ecommerce-website'
    },
    {
      image: '/mock.svg',
      title: 'Task Manager',
      text: 'A task management application to help you organize your daily tasks and stay productive.',
      technologies: ['React', 'Firebase', 'Redux'],
      githubLink: 'https://github.com/yourusername/task-manager'
    }
  ];

export const timelineEvents: Event[] = [
    {
        title: "Bachelor's Degree",
        dateFrom: 'August 2017',
        dateTo: 'July 2021',
        location: 'Fernfachhochschule Schweiz',
        description: 'Simultaneously to my workday life I am studying for my Bachelor of Computer Science degree at the Fernfachhochschule Schweiz. This remote study model gives me to collect knowledge in the professional world and combine it with theoretical knowledge from the classroom.'
    },
    {
        title: 'Code',
        dateFrom: 'August 2018',
        dateTo: 'February 2019',
        location: 'Bundesamt für Informatik',
        description: 'Build an e-commerce platform that allows users to browse, search, and purchase products. The website features include user authentication, product categorization, shopping cart functionality, and secure payment processing.',
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"]
    },
    {
        title: 'DaziT',
        dateFrom: 'February 2019',
        dateTo: 'August 2021',
        location: 'Bundesamt für Informatik',
        description: 'Develop a social media dashboard where users can manage multiple social media accounts from a single interface. The dashboard displays analytics, scheduling tools, and post management features.',
        technologies: ["Vue.js", "Flask", "PostgreSQL", "OAuth"]
    },
    {
        title: 'Covid-Certificate',
        dateFrom: 'August 2021',
        dateTo: 'January 2022',
        location: 'Bundesamt für Informatik',
        description: 'Create a fitness tracker application that allows users to set fitness goals, track their workouts, and monitor their progress over time. The application includes features such as exercise logging, progress charts, and goal setting.',
        technologies: ["Angular", "Django", "SQLite", "Chart.js"]
    },
    {
        title: 'VTKG',
        dateFrom: 'January 2022',
        dateTo: 'September 2012',
        location: 'Bundesamt für Informatik',
        description: 'Design a recipe sharing platform where users can discover, share, and save recipes. The platform includes features such as recipe search, user profiles, and rating/commenting on recipes.',
        technologies: ["React.js", "Ruby on Rails", "MySQL", "Amazon S3"]
    },
    {
        title: 'SPHAIR',
        dateFrom: 'September 2022',
        dateTo: 'Now',
        location: 'Bundesamt für Informatik',
        description: 'Develop a job board application that connects job seekers with employers. Users can search for job listings, create profiles, and apply for positions. The application also includes features such as job posting and candidate management for employers.',
        technologies: ["Ember.js", "Laravel", "MongoDB", "Firebase"]
    },

]
  