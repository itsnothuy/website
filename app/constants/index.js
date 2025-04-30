export const HERO_CONTENT = `I am a Computer Science and Mathematics student at DePauw University and I like to build stuff that will ease or solve my daily life problems. This website is a brief preview of what I have worked on in the past and my experiences working on these projects. Feel free to reach out to me if you have any questions or want to collaborate on a project.`;

export const EXPERIENCES = [
  {
    year: "Summer 2024",
    role: "Software Engineer Intern",
    company: "SAGO AGRO Co., Ltd",
    description: `Engineered, deployed, and maintained a full-stack web application on AWS cloud infrastructure, improving
      product scalability and enabling streamlined online service delivery.`,
    description2: `Migrated 30GB of structured product data from Excel spreadsheets to AWS RDS PostgreSQL using custom
      ETL scripts and AWS DMS, boosting query performance by 40% and enabling real-time reporting.`,
      technologies: ["AWS", "PostgreSQL", "AWS RDS", "AWS DMS", "ETL", "Python", "SQL", "Excel", "Data Migration", "Cloud Infrastructure", "Full-Stack Development"],
  },
  {
    year: "Summer 2023",
    role: "IT Intern - Network Security Team",
    company: "University Social Science and Humanities",
    description: `Implemented a two-factor authentication (2FA) system for the school’s E-Service Portal in collaboration with
      the cybersecurity team, mitigating authentication vulnerabilities and reducing exploitability from 80% to
      20% in penetration tests`,
    description2: `Developed and deployed web application firewalls (WAFs) to protect a server hosting up to 3,000 student
      accounts from SQL injection, cutting SQL injection vulnerabilities by 90% via real-time threat mitigation`,
    technologies: ["Python", "React.js", "AWS", "Authentication", "Stripe API", "JWT", "bcrypt", "TOTP", "Google Authenticator", "AWS WAF", "ModSecurity", "NGINX", "PostgreSQL", "MySQL", "OWASP ZAP", "Burp Suite", "Node.js"],
  },
  {
    year: "Summer 2022",
    role: "Software Developer Intern",
    company: "IpserLab Co.,Ltd",
    description: `Built an interactive category filter UI in React, streamlining product navigation for 1,200+ items and increasing product engagement by 30% within four weeks of deployment.`,
    description2: `Integrated Stripe API into the company’s application, enabling fast, secure transactions and improving the overall payment flow efficiency.`,
    technologies: ["React.js", "Node.js", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "Interview Prep",
    image: "/assets/projects/project-1.png",
    description:
      "Interview Prep is an AI-powered platform that helps DePauw students prepare for interviews through mock interviews, real-time feedback, code practice, and document analysis tools.",
    technologies: ["Next.js", "Node.js", "Gemini API", "Langchain", "PineconeDB", "RAG"],
    github: "https://github.com/itsnothuy/InterviewPrep",
    medium: "https://medium.com/@huytrngqu/interviewprep-an-ai-powered-mock-interview-platform-b50cfdd30fb9",

  },
  {
    title: "Kontask",
    image: "/assets/projects/kontask.png",
    description:
      "A mobile-first platform connecting local service providers with customers in Greencastle, integrating a Retrieval-Augmented Generation (RAG) approach for intelligent matchmaking",
    technologies: ["Flutter", "Node.js", "Next.js", "MongoDB", "OpenAI", "PostgreSQL", "RAG", "HuggingFace", "React"],
    github: "https://github.com/itsnothuy/Kontask",
    medium: "https://medium.com/@huytrngqu/kontask-revitalizing-downtown-greencastle-with-an-ai-powered-local-services-marketplace-84eee097fd04",
  },
  {
    title: "Spotify Mood-Based Recommendation System",
    image: "/assets/projects/spotify.jpg",
    description: "An intelligent, full-stack music recommendation system powered by NLP, OpenAI, and Spotify. This application dynamically suggests songs based on your emotional state—using machine learning, microservices, and real-time cloud infrastructure.",
    technologies: ["React.js", "Node.js", "Express.js", "Python", "FastAPI", "Transformers (Hugging Face)", "OpenAI API (ChatGPT)", "Spotify Web API", "OAuth 2.0", "Google Cloud Run", "Google Cloud Load Balancing", "Google Cloud DNS", "GitHub Actions (CI/CD)", "Docker"],
    github: "https://github.com/itsnothuy/Spotify_Recommendation",
    medium: "https://medium.com/@huytrngqu/musicfinder-an-ai-powered-mood-based-spotify-companion-81db726d1171",
  },
  {
    title: "Coding Online",
    image: "/assets/projects/codingonline.webp",
    description: "A real-time online code-editor built with Node.js, Express and others.",
    technologies: ["HTML", "CSS", , "Express", "Google Cloud Platform, Google Cloud SQL", "Node.js" ],
    github: "https://github.com/itsnothuy/Replit_Clone",
  },
];

export const CONTACT = {
  email: "huytrngqu@gmail.com",
};


export const BLOGS = [
  {
    title: "Building an AI-Powered Interview Preparation System",
    date: "Nov 11, 2024",
    description: "Explore how RAG enhances AI models by improving information retrieval and response generation.",
    link: "/Blogs/interviewprep",
  },
  {
    title: "Kontask: Bridging Greencastle Services to customers with AI-matching",
    date: "Mar 15, 2025",
    description: "Learn the fundamentals of designing backend systems that scale effectively.",
    link: "/Blogs/kontask",
  },
  {
    title: "Designing Spotify Mood-Based Recommendation System",
    date: "Dec 10, 2024",
    description: "An overview of the most popular frontend frameworks and their use cases.",
    link: "/Blogs/musicfinder",
  },
];
