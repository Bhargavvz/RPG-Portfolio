export type QuestType = 'Main' | 'Side' | 'Daily' | 'Special';
export type QuestDifficulty = 'Easy' | 'Medium' | 'Hard' | 'Legendary';
export type QuestStatus = 'Not Started' | 'In Progress' | 'Completed' | 'Failed';

export interface QuestReward {
  exp: number;
  gold: number;
  items?: string[];
  skills?: string[];
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  type: QuestType;
  difficulty: QuestDifficulty;
  year: number;
  duration: string;
  requiredLevel: number;
  requiredSkills: string[];
  rewards: QuestReward;
  status: QuestStatus;
  isFeatured: boolean;
  imageUrl?: string;
  companyName?: string;
  companyUrl?: string;
}

export const quests: Quest[] = [
  // AI & ML Projects
  {
    id: 'age-detection',
    title: 'Age Detection System',
    description: 'Built a real-time age detection web app using OpenCV and ML models.',
    type: 'Main',
    difficulty: 'Hard',
    year: 2025,
    duration: '1 month',
    requiredLevel: 5,
    requiredSkills: ['python', 'opencv'],
    rewards: {
      exp: 400,
      gold: 800,
      skills: ['tensorflow']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'legal-doc-analysis',
    title: 'Legal Document Analysis System',
    description: 'Created a document analyzer capable of extracting legal keywords and classifications.',
    type: 'Main',
    difficulty: 'Hard',
    year: 2025,
    duration: '2 months',
    requiredLevel: 5,
    requiredSkills: ['python', 'tensorflow'],
    rewards: {
      exp: 450,
      gold: 900,
      skills: ['pytorch']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'stock-analysis',
    title: 'Stock Market Analysis Tool',
    description: 'Developed a financial dashboard to analyze stock trends and predict future values.',
    type: 'Main',
    difficulty: 'Hard',
    year: 2025,
    duration: '2 months',
    requiredLevel: 5,
    requiredSkills: ['python', 'flask'],
    rewards: {
      exp: 400,
      gold: 800,
      skills: ['tensorflow']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },

  // Web Development Projects
  {
    id: 'azura-events',
    title: 'Azura Event Website',
    description: 'Developed an event management site for college events, with registration and payment integration.',
    type: 'Main',
    difficulty: 'Hard',
    year: 2025,
    duration: '2 months',
    requiredLevel: 5,
    requiredSkills: ['nextjs', 'supabase'],
    rewards: {
      exp: 450,
      gold: 900,
      skills: ['razorpay']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'chess-game',
    title: 'Chess Game with AI',
    description: 'Built an interactive chess game with AI move prediction using Stockfish engine.',
    type: 'Side',
    difficulty: 'Hard',
    year: 2025,
    duration: '1 month',
    requiredLevel: 4,
    requiredSkills: ['react', 'javascript'],
    rewards: {
      exp: 400,
      gold: 800,
      skills: ['stockfish']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'blog-app',
    title: 'Modern Blog Platform',
    description: 'Developed a lightweight blog platform with Go-based backend and Vue front-end.',
    type: 'Main',
    difficulty: 'Hard',
    year: 2024,
    duration: '2 months',
    requiredLevel: 4,
    requiredSkills: ['vue', 'go'],
    rewards: {
      exp: 400,
      gold: 800,
      skills: ['postgresql']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'todo-app',
    title: 'Full Stack Todo App',
    description: 'A responsive full-stack to-do list app with CRUD features and user auth.',
    type: 'Main',
    difficulty: 'Medium',
    year: 2024,
    duration: '1 month',
    requiredLevel: 3,
    requiredSkills: ['react', 'spring'],
    rewards: {
      exp: 300,
      gold: 600,
      skills: ['postgresql']
    },
    status: 'Completed',
    isFeatured: false,
    imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'communitifx',
    title: 'Communitifx Platform',
    description: 'Community issue tracking with map integration and chatbot for automated responses. Handled 10,000+ reports and improved user engagement. Dockerized for high uptime and performance.',
    type: 'Main',
    difficulty: 'Legendary',
    year: 2024,
    duration: '3 months',
    requiredLevel: 5,
    requiredSkills: ['react', 'spring', 'postgresql', 'docker'],
    rewards: {
      exp: 500,
      gold: 1000,
      skills: ['kubernetes']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/1181401/pexels-photo-1181401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'pharmacare',
    title: 'PharmaCare System',
    description: 'Medicine tracking system with expiry alerts and inventory dashboards. Integrated Redis for caching and PostgreSQL for robust data handling. Designed with mobile-first UI principles.',
    type: 'Main',
    difficulty: 'Hard',
    year: 2024,
    duration: '3 months',
    requiredLevel: 5,
    requiredSkills: ['react', 'spring', 'postgresql', 'redis'],
    rewards: {
      exp: 450,
      gold: 900,
      skills: ['docker']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'voxera',
    title: 'Voxera Social Platform',
    description: 'Built a real-time social media platform supporting 5,000+ concurrent users. Secured login via JWT & Bcrypt. Optimized for performance and scalability.',
    type: 'Main',
    difficulty: 'Legendary',
    year: 2025,
    duration: '3 months',
    requiredLevel: 5,
    requiredSkills: ['nextjs', 'supabase', 'socket.io'],
    rewards: {
      exp: 500,
      gold: 1000,
      skills: ['kubernetes']
    },
    status: 'Completed',
    isFeatured: true,
    imageUrl: 'https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const getQuestsByYear = (year: number) => {
  return quests.filter(quest => quest.year <= year);
};

export const getQuestById = (id: string) => {
  return quests.find(quest => quest.id === id);
};

export const getFeaturedQuests = () => {
  return quests.filter(quest => quest.isFeatured);
};