export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: 'career' | 'education' | 'project' | 'personal';
  icon: string;
}

export const timelineEvents: TimelineEvent[] = [
  // 2020 - Education
  {
    year: 2020,
    title: 'SSC Completion',
    description: 'Completed Secondary School Certificate with 10.0 CGPA at Spectra School',
    type: 'education',
    icon: 'graduation-cap',
  },

  // 2022 - Education
  {
    year: 2022,
    title: 'Intermediate Education',
    description: 'Completed Intermediate in PCM with 8.99 CGPA at Narayana Junior College',
    type: 'education',
    icon: 'book',
  },
  {
    year: 2022,
    title: 'B.Tech in CSE',
    description: 'Started B.Tech in Computer Science at CMR College of Engineering & Technology',
    type: 'education',
    icon: 'university',
  },

  // 2024 - Projects and Achievements
  {
    year: 2023,
    title: 'PharmaCare',
    description: 'Developed a medicine tracking system with Redis caching and PostgreSQL. Mobile-first UI design.',
    type: 'project',
    icon: 'heart',
  },
  {
    year: 2023,
    title: 'Communitifx',
    description: 'Built a community issue tracking platform handling 10,000+ reports with map integration and chatbot.',
    type: 'project',
    icon: 'map',
  },
  {
    year: 2024,
    title: 'Internshala Student Partner',
    description: 'Promoted internship opportunities and conducted skill development campaigns on campus.',
    type: 'career',
    icon: 'users',
  },
  {
    year: 2023,
    title: 'Intinta Innovator',
    description: 'Selected as an Intinta Innovator by the Government of Telangana',
    type: 'personal',
    icon: 'star',
  },
  {
    year: 2024,
    title: 'Specathon Finalist',
    description: 'Reached finals in Specathon 2024 at St. Peter\'s Engineering College',
    type: 'personal',
    icon: 'medal',
  },
  {
    year: 2024,
    title: 'HackByte Runner-Up',
    description: 'Achieved 2nd Runner-Up position in HackByte National Hackathon at VIT-AP (300+ teams)',
    type: 'personal',
    icon: 'trophy',
  },
  {
    year: 2024,
    title: 'FCCxAIESEC Honorable Mention',
    description: 'Received Honorable Mention in FCCxAIESEC SDG 11 Challenge at IIT Hyderabad',
    type: 'personal',
    icon: 'award',
  },

  // 2025 - Projects and Career
  {
    year: 2024,
    title: 'Voxera',
    description: 'Built a real-time social media platform supporting 5,000+ concurrent users with JWT security.',
    type: 'project',
    icon: 'users',
  },
  {
    year: 2024,
    title: 'Age Detection App',
    description: 'Developed a real-time age detection web app using OpenCV and ML models.',
    type: 'project',
    icon: 'eye',
  },
  {
    year: 2025,
    title: 'Stock Market Analysis',
    description: 'Created a financial dashboard for stock trend analysis and predictions.',
    type: 'project',
    icon: 'trending-up',
  },
  {
    year: 2025,
    title: 'Legal Document Analysis',
    description: 'Built a document analyzer for legal keyword extraction and classification.',
    type: 'project',
    icon: 'file-text',
  },
  {
    year: 2025,
    title: 'Azura Event Website',
    description: 'Developed an event management platform with Next.js, Supabase, and Razorpay integration.',
    type: 'project',
    icon: 'calendar',
  },
  {
    year: 2025,
    title: 'Chess Game with AI',
    description: 'Created an interactive chess game with Stockfish 17 AI integration.',
    type: 'project',
    icon: 'chess',
  },
  {
    year: 2025,
    title: 'Google Summer of Code',
    description: 'Selected as a contributor for VideoLAN organization, working on AI-powered media recommendation engine.',
    type: 'career',
    icon: 'code',
  },
];

export const getTimelineByYear = (year: number) => {
  return timelineEvents.filter(event => event.year <= year);
};

export const getYearRange = (): [number, number] => {
  const years = timelineEvents.map(event => event.year);
  return [Math.min(...years), Math.max(...years)];
};

export const getEventsByType = (type: string) => {
  return timelineEvents.filter(event => event.type === type);
};