export interface Project {
    image: string;
    title: string;
    text: string;
    technologies: string[];
    githubLink: string;
}

export enum EventCategory {
  WORK,
  EDUCATION
}

export interface Event {
    title: string;
    dateFrom: string;
    dateTo: string;
    location: string;
    description: string;
    category: EventCategory
}

export const projects: Project[] = [
    {
      image: '/inboxsieve.png',
      title: 'Inboxsieve',
      text: 'InboxSieve is a completely new way of organizing and privatizing your personal Email-Adress. This service enables full control over your private inbox and gives you the option to hide your personal Email address behind your InboxSieve email address. You can controll and receive a unlimited amount of emails completely for free. With InboxSieve Pro you even get your own InboxSieve Subdomain so you can create unlimited amounts of email addresses instantly!',
      technologies: ['React', 'NodeJS', 'Express', 'Socket.IO', 'MongoDB', 'Mailgun', 'FirebaseAuth', 'Dokku'],
      githubLink: 'https://github.com/Fabiansson/InboxSieve'
    },
    {
      image: '/asura.png',
      title: 'Kosmetik Asura',
      text: 'Website for my mother business as a Kosmetik Studio.',
      technologies: ['HTML', 'CSS', 'JS',],
      githubLink: 'https://github.com/Fabiansson/InboxSieve'
    },
    {
      image: '/battleshiproyale.png',
      title: 'Battleship Royale',
      text: 'A mix between the pen and paper Battleship game and a modern Battle Royale. At the beginning every player has the same amount of ships. They can earn coin with sinking the enemies ships. The location of the enemy ship is not known. Every hit generates an equal amount of coins. Every “ship-field” can normally shoot ones or move one field. If there are no actions left, it is the next players turn to make his/her move. The last standing player wins a round. In every round the player can use his/her coins to buy upgrades for a better chance of survival. Earning coins with sinking ships is not the only way to make money. It is possible to find treasures by exploring different islands on the map. Whoever has the most wins in his/her pocket, wins the game.',
      technologies: ['React', 'NodeJS', 'Express', 'Socket.IO', 'Redis'],
      githubLink: 'https://github.com/yourusername/awesome-chat-app'
    },
    {
      image: '/camslider.png',
      title: 'CamSlider',
      text: 'The CamSlider project is an open-source application designed for Raspberry Pi, featuring a NodeJS Express backend. It offers a React web interface served via Web Socket communication for controlling various functionalities. Supported features include customizable timelapse with waypoints, panorama capabilities up to 360 degrees, support for 2 and 3-axis movement, real-time slider control via the web interface, DSLR recognition, and automatic image processing with exposure adjustment.',
      technologies: ['React', 'NodeJS', 'Express', 'Socket.IO', 'Arduino firmata', 'PWA'],
      githubLink: 'https://github.com/yourusername/ecommerce-website'
    },
    {
      image: '/farahz.png',
      title: 'Farahz',
      text: 'Farahz is a crypto data aggregation software with indicator visualization based on predefined rules and weight over multiple coins and timeframes.',
      technologies: ['React', 'NestJs', 'Redis', 'Binance API'],
      githubLink: 'https://github.com/yourusername/ecommerce-website'
    },
    {
      image: '/fabianzbinden.png',
      title: 'Portfolio Website',
      text: 'My own Portfolio website.',
      technologies: ['React', 'NexJs'],
      githubLink: 'https://github.com/yourusername/task-manager'
    },
    {
      image: '/fabianzbinden.png',
      title: 'Code',
      text: 'My own Portfolio website.',
      technologies: ['React', 'NexJs'],
      githubLink: 'https://github.com/yourusername/task-manager'
    }
  ];

export const timelineEvents: Event[] = [
    {
        title: "Exchange Year",
        dateFrom: 'September 2012',
        dateTo: 'June 2013',
        location: 'Pittsburgh, USA',
        description: 'During my university qualification I decided to take part in a exchange program. I lived in Pittsburgh, USA for one year and visited public High School. This helped my to enhance social, cultural and language skills a lot.',
        category: EventCategory.EDUCATION
    },
    {
        title: 'Federal Matura',
        dateFrom: 'July 2010',
        dateTo: 'June 2015',
        location: 'Gynmasium Bern Neufeld',
        description: 'In 2015 i finished my qualification for university entrance which is mandatory in Switzerland. My main focus has been on Mathematics and Physics.',
        category: EventCategory.EDUCATION
    },
    {
        title: "Bachelor's Degree",
        dateFrom: 'August 2017',
        dateTo: 'July 2021',
        location: 'Fernfachhochschule Schweiz',
        description: 'Simultaneously to my workday life I am studying for my Bachelor of Computer Science degree at the Fernfachhochschule Schweiz. This remote study model gives me to collect knowledge in the professional world and combine it with theoretical knowledge from the classroom.',
        category: EventCategory.EDUCATION
    },
    {
        title: 'IT Security Asisstant',
        dateFrom: 'August 2018',
        dateTo: 'July 2019',
        location: 'Bundesamt für Informatik',
        description: "Right now I'm gathering some work experience in the IT-Security field. I work in a small team on all kinds of security related topics. This sphere is vastly underestimated by our globalized and connected world.",
        category: EventCategory.WORK
    },
    {
        title: 'Java Full Stack Developer',
        dateFrom: 'August 2019',
        dateTo: 'today',
        location: 'Bundesamt für Informatik',
        description: "Right now I'm gathering some work experience in the IT-Security field. I work in a small team on all kinds of security related topics. This sphere is vastly underestimated by our globalized and connected world.",
        category: EventCategory.WORK
    }
]
  

// export const timelineEvents: Event[] = [
//   {
//       title: "Bachelor's Degree",
//       dateFrom: 'August 2017',
//       dateTo: 'July 2021',
//       location: 'Fernfachhochschule Schweiz',
//       description: 'Simultaneously to my workday life I am studying for my Bachelor of Computer Science degree at the Fernfachhochschule Schweiz. This remote study model gives me to collect knowledge in the professional world and combine it with theoretical knowledge from the classroom.'
//   },
//   {
//       title: 'Code',
//       dateFrom: 'August 2018',
//       dateTo: 'February 2019',
//       location: 'Bundesamt für Informatik',
//       description: 'Build an e-commerce platform that allows users to browse, search, and purchase products. The website features include user authentication, product categorization, shopping cart functionality, and secure payment processing.',
//       technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"]
//   },
//   {
//       title: 'DaziT',
//       dateFrom: 'February 2019',
//       dateTo: 'August 2021',
//       location: 'Bundesamt für Informatik',
//       description: 'Develop a social media dashboard where users can manage multiple social media accounts from a single interface. The dashboard displays analytics, scheduling tools, and post management features.',
//       technologies: ["Vue.js", "Flask", "PostgreSQL", "OAuth"]
//   },
//   {
//       title: 'Covid-Certificate',
//       dateFrom: 'August 2021',
//       dateTo: 'January 2022',
//       location: 'Bundesamt für Informatik',
//       description: 'Create a fitness tracker application that allows users to set fitness goals, track their workouts, and monitor their progress over time. The application includes features such as exercise logging, progress charts, and goal setting.',
//       technologies: ["Angular", "Django", "SQLite", "Chart.js"]
//   },
//   {
//       title: 'VTKG',
//       dateFrom: 'January 2022',
//       dateTo: 'September 2012',
//       location: 'Bundesamt für Informatik',
//       description: 'Design a recipe sharing platform where users can discover, share, and save recipes. The platform includes features such as recipe search, user profiles, and rating/commenting on recipes.',
//       technologies: ["React.js", "Ruby on Rails", "MySQL", "Amazon S3"]
//   },
//   {
//       title: 'SPHAIR',
//       dateFrom: 'September 2022',
//       dateTo: 'Now',
//       location: 'Bundesamt für Informatik',
//       description: 'Develop a job board application that connects job seekers with employers. Users can search for job listings, create profiles, and apply for positions. The application also includes features such as job posting and candidate management for employers.',
//       technologies: ["Ember.js", "Laravel", "MongoDB", "Firebase"]
//   },

// ]