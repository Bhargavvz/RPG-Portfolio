export type AchievementType = 'Career' | 'Technical' | 'Education' | 'Recognition' | 'Personal';
export type AchievementRarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: AchievementType;
  rarity: AchievementRarity;
  year: number;
  icon: string;
  expReward: number;
  isHidden: boolean;
  unlockedBy?: string[]; // Quest IDs or Skill IDs that unlock this achievement
}

export const achievements: Achievement[] = [
  // Technical Achievements
  {
    id: 'age-detection-master',
    title: 'Age Detection Master',
    description: 'Built a real-time age detection web app using OpenCV and ML models.',
    type: 'Technical',
    rarity: 'Rare',
    year: 2025,
    icon: 'eye',
    expReward: 400,
    isHidden: false,
    unlockedBy: ['age-detection']
  },
  {
    id: 'legal-doc-analyzer',
    title: 'Legal Document Analyzer',
    description: 'Created a document analyzer capable of extracting legal keywords and classifications.',
    type: 'Technical',
    rarity: 'Rare',
    year: 2025,
    icon: 'file-text',
    expReward: 450,
    isHidden: false,
    unlockedBy: ['legal-doc-analysis']
  },
  {
    id: 'stock-market-sage',
    title: 'Stock Market Sage',
    description: 'Developed a financial dashboard to analyze stock trends and predict future values.',
    type: 'Technical',
    rarity: 'Rare',
    year: 2025,
    icon: 'trending-up',
    expReward: 400,
    isHidden: false,
    unlockedBy: ['stock-analysis']
  },
  {
    id: 'event-management-master',
    title: 'Event Management Master',
    description: 'Developed an event management site for college events, with registration and payment integration.',
    type: 'Technical',
    rarity: 'Rare',
    year: 2025,
    icon: 'calendar',
    expReward: 450,
    isHidden: false,
    unlockedBy: ['azura-events']
  },
  {
    id: 'chess-master',
    title: 'Chess Master',
    description: 'Built an interactive chess game with AI move prediction using Stockfish engine.',
    type: 'Technical',
    rarity: 'Rare',
    year: 2025,
    icon: 'chess',
    expReward: 400,
    isHidden: false,
    unlockedBy: ['chess-game']
  },
  {
    id: 'blog-platform-architect',
    title: 'Blog Platform Architect',
    description: 'Developed a lightweight blog platform with Go-based backend and Vue front-end.',
    type: 'Technical',
    rarity: 'Rare',
    year: 2024,
    icon: 'book-open',
    expReward: 400,
    isHidden: false,
    unlockedBy: ['blog-app']
  },
  {
    id: 'todo-app-master',
    title: 'Todo App Master',
    description: 'A responsive full-stack to-do list app with CRUD features and user auth.',
    type: 'Technical',
    rarity: 'Uncommon',
    year: 2024,
    icon: 'check-square',
    expReward: 300,
    isHidden: false,
    unlockedBy: ['todo-app']
  },
  {
    id: 'community-tracker',
    title: 'Community Tracker',
    description: 'Community issue tracking with map integration and chatbot for automated responses. Handled 10,000+ reports and improved user engagement.',
    type: 'Technical',
    rarity: 'Epic',
    year: 2024,
    icon: 'map',
    expReward: 500,
    isHidden: false,
    unlockedBy: ['communitifx']
  },
  {
    id: 'healthcare-innovator',
    title: 'Healthcare Innovator',
    description: 'Medicine tracking system with expiry alerts and inventory dashboards. Integrated Redis for caching and PostgreSQL for robust data handling.',
    type: 'Technical',
    rarity: 'Epic',
    year: 2024,
    icon: 'heart',
    expReward: 450,
    isHidden: false,
    unlockedBy: ['pharmacare']
  },
  {
    id: 'social-platform-architect',
    title: 'Social Platform Architect',
    description: 'Built a real-time social media platform supporting 5,000+ concurrent users. Secured login via JWT & Bcrypt. Optimized for performance and scalability.',
    type: 'Technical',
    rarity: 'Legendary',
    year: 2025,
    icon: 'users',
    expReward: 500,
    isHidden: false,
    unlockedBy: ['voxera']
  },

  // Career Achievements
  {
    id: 'full-stack-master',
    title: 'Full Stack Master',
    description: 'Mastered both frontend and backend development, building complex applications with modern technologies.',
    type: 'Career',
    rarity: 'Epic',
    year: 2025,
    icon: 'layers',
    expReward: 600,
    isHidden: false,
    unlockedBy: ['voxera', 'pharmacare', 'communitifx']
  },
  {
    id: 'ai-ml-specialist',
    title: 'AI/ML Specialist',
    description: 'Developed expertise in AI and Machine Learning, implementing complex models in real-world applications.',
    type: 'Career',
    rarity: 'Epic',
    year: 2025,
    icon: 'brain',
    expReward: 550,
    isHidden: false,
    unlockedBy: ['age-detection', 'legal-doc-analysis', 'stock-analysis']
  },
  {
    id: 'database-expert',
    title: 'Database Expert',
    description: 'Gained expertise in both SQL and NoSQL databases, implementing complex data models and optimizations.',
    type: 'Career',
    rarity: 'Rare',
    year: 2024,
    icon: 'database',
    expReward: 450,
    isHidden: false,
    unlockedBy: ['pharmacare', 'communitifx']
  },

  // Education Achievements
  {
    id: 'tech-stack-master',
    title: 'Intermediate',
    description: 'Completed my Intermediate Education in MPC Stream in 2022',
    type: 'Education',
    rarity: 'Epic',
    year: 2022,
    icon: 'book',
    expReward: 500,
    isHidden: false,
    unlockedBy: ['voxera', 'azura-events', 'blog-app']
  },
  {
    id: 'tech-stack-master',
    title: 'SSC',
    description: 'Completed my SSC Education in 2020',
    type: 'Education',
    rarity: 'Epic',
    year: 2020,
    icon: 'book',
    expReward: 500,
    isHidden: false,
    unlockedBy: ['voxera', 'azura-events', 'blog-app']
  },

  // Recognition Achievements
  {
    id: 'hackbyte-runner-up',
    title: 'HackByte Runner-Up',
    description: 'Achieved 2nd Runner-Up position in HackByte National Hackathon at VIT-AP, competing against 300+ teams.',
    type: 'Recognition',
    rarity: 'Epic',
    year: 2024,
    icon: 'trophy',
    expReward: 600,
    isHidden: false
  },
  {
    id: 'fcc-aiesec-honorable',
    title: 'FCCxAIESEC Honorable Mention',
    description: 'Received Honorable Mention in FCCxAIESEC SDG 11 Challenge at IIT Hyderabad.',
    type: 'Recognition',
    rarity: 'Rare',
    year: 2024,
    icon: 'award',
    expReward: 450,
    isHidden: false
  },
  {
    id: 'specathon-finalist',
    title: 'Specathon Finalist',
    description: 'Reached finals in Specathon 2024 at St. Peter\'s Engineering College.',
    type: 'Recognition',
    rarity: 'Rare',
    year: 2024,
    icon: 'medal',
    expReward: 400,
    isHidden: false
  },
  {
    id: 'intinta-innovator',
    title: 'Intinta Innovator',
    description: 'Selected as an Intinta Innovator by the Government of Telangana.',
    type: 'Recognition',
    rarity: 'Epic',
    year: 2024,
    icon: 'star',
    expReward: 550,
    isHidden: false
  },
  {
    id: 'high-impact-developer',
    title: 'High Impact Developer',
    description: 'Built applications that directly impact thousands of users, demonstrating real-world problem-solving skills.',
    type: 'Recognition',
    rarity: 'Legendary',
    year: 2024,
    icon: 'trophy',
    expReward: 700,
    isHidden: false,
    unlockedBy: ['communitifx', 'voxera']
  },
  {
    id: 'innovation-leader',
    title: 'Innovation Leader',
    description: 'Pioneered new solutions in healthcare and community management through innovative applications.',
    type: 'Recognition',
    rarity: 'Epic',
    year: 2024,
    icon: 'lightbulb',
    expReward: 600,
    isHidden: false,
    unlockedBy: ['pharmacare', 'communitifx']
  },

  // Personal Achievements
  {
    id: 'problem-solver',
    title: 'Master Problem Solver',
    description: 'Demonstrated exceptional problem-solving skills across diverse domains from healthcare to finance.',
    type: 'Personal',
    rarity: 'Epic',
    year: 2025,
    icon: 'puzzle',
    expReward: 550,
    isHidden: false,
    unlockedBy: ['pharmacare', 'stock-analysis', 'legal-doc-analysis']
  },
  {
    id: 'user-advocate',
    title: 'User Experience Advocate',
    description: 'Consistently prioritized user experience and accessibility in all projects, creating intuitive interfaces.',
    type: 'Personal',
    rarity: 'Rare',
    year: 2024,
    icon: 'users',
    expReward: 400,
    isHidden: false,
    unlockedBy: ['voxera', 'azura-events', 'todo-app']
  }
];

export const getAchievementsByYear = (year: number) => {
  return achievements.filter(achievement => achievement.year <= year);
};

export const getAchievementById = (id: string) => {
  return achievements.find(achievement => achievement.id === id);
};

export const getAchievementsByType = (type: AchievementType) => {
  return achievements.filter(achievement => achievement.type === type);
};