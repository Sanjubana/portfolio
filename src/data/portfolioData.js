export const portfolioData = {
  personal: {
    name: "Sanjay Singh",
    nickname: "sanjubana",
    role: "Full-Stack Developer",
    secondaryRoles: [
      "MERN Stack Developer",
      "Data Scientist & Machine Learning Enthusiast",
      "Tech Innovator"
    ],
    tagline: "Turning ideas into intelligent, impactful digital experiences.",
    location: "Jaipur, Rajasthan, India",
    bio: "Enthusiastic Full-Stack Developer and Data Scientist. Passionate about architecting scalable MERN web applications, exploring Machine Learning algorithms (Random Forest, LSTM), and engineering intuitive digital solutions that solve real-world problems.",
    shortBio: "Building scalable web architectures, AI-integrated solutions, and responsive user experiences.",
    educationSummary: "B.Tech IT @ JECRC Foundation | Class of 2027",
    email: "sanjaysingh.it27@gmail.com",
    avatar: "/avatar.svg",
    socials: {
      github: "https://github.com/sanjubana",
      linkedin: "https://linkedin.com/in/sanjaysingh20",
      instagram: "https://instagram.com/sanjubana_20",
      discord: "sanjubana20",
      emailLink: "mailto:sanjaysingh.it27@gmail.com"
    }
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        icon: "Layout",
        skills: [
          { name: "React.js", level: "Advanced", progress: 90, color: "from-cyan-400 to-blue-500" },
          { name: "JavaScript (ES6+)", level: "Advanced", progress: 88, color: "from-yellow-400 to-amber-500" },
          { name: "Vite", level: "Proficient", progress: 85, color: "from-purple-400 to-indigo-500" },
          { name: "Tailwind CSS", level: "Advanced", progress: 92, color: "from-teal-400 to-cyan-500" },
          { name: "HTML5 & CSS3", level: "Expert", progress: 95, color: "from-orange-400 to-red-500" },
          { name: "React Router", level: "Proficient", progress: 86, color: "from-rose-400 to-pink-500" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Systems",
        icon: "Server",
        skills: [
          { name: "Node.js", level: "Proficient", progress: 85, color: "from-emerald-400 to-green-600" },
          { name: "Express.js", level: "Proficient", progress: 84, color: "from-gray-300 to-gray-500" },
          { name: "MERN Stack", level: "Advanced", progress: 88, color: "from-cyan-400 to-indigo-500" },
          { name: "RESTful APIs", level: "Advanced", progress: 86, color: "from-blue-400 to-indigo-600" }
        ]
      },
      {
        id: "programming",
        name: "Core Programming",
        icon: "Code2",
        skills: [
          { name: "C++", level: "Advanced (DSA)", progress: 85, color: "from-blue-500 to-indigo-600" },
          { name: "Python", level: "Advanced", progress: 88, color: "from-yellow-400 to-blue-500" },
          { name: "Java", level: "Proficient", progress: 80, color: "from-red-500 to-amber-600" }
        ]
      },
      {
        id: "databases",
        name: "Databases & Storage",
        icon: "Database",
        skills: [
          { name: "MongoDB", level: "Advanced", progress: 85, color: "from-green-500 to-emerald-600" },
          { name: "MySQL", level: "Proficient", progress: 82, color: "from-blue-400 to-cyan-600" }
        ]
      },
      {
        id: "ai_ml",
        name: "AI & Data Science",
        icon: "Cpu",
        skills: [
          { name: "Machine Learning", level: "Proficient", progress: 80, color: "from-indigo-400 to-purple-600" },
          { name: "Random Forest", level: "Proficient", progress: 82, color: "from-emerald-400 to-teal-500" },
          { name: "LSTM Neural Networks", level: "Proficient", progress: 78, color: "from-violet-400 to-fuchsia-600" },
          { name: "Pandas & Data Analysis", level: "Proficient", progress: 84, color: "from-blue-400 to-sky-500" },
          { name: "Kaggle", level: "Active Practitioner", progress: 78, color: "from-cyan-400 to-blue-600" }
        ]
      },
      {
        id: "tools",
        name: "Tools & DevOps",
        icon: "Wrench",
        skills: [
          { name: "Git & GitHub", level: "Advanced", progress: 90, color: "from-orange-500 to-red-600" },
          { name: "VS Code", level: "Expert", progress: 95, color: "from-blue-500 to-cyan-500" },
          { name: "Postman", level: "Proficient", progress: 85, color: "from-orange-400 to-amber-600" },
          { name: "AWS Basics", level: "Familiar", progress: 70, color: "from-amber-400 to-yellow-600" },
          { name: "CI/CD Basics", level: "Familiar", progress: 72, color: "from-teal-400 to-cyan-600" }
        ]
      }
    ]
  },

  projects: [
    {
      id: 1,
      Title: "KIRSI — Farmer Assistance Platform",
      Description: "A modern farmer-focused platform providing pesticide information, crop image uploads, agricultural tools and mechanic assistance, market prices, and location-based agricultural support.",
      TechStack: ["React.js", "JavaScript", "Tailwind CSS", "React Router", "MERN Stack", "Google Maps API"],
      Features: [
        "Crop Disease & Pesticide Guide with image upload diagnostics",
        "Agricultural tools, machinery, and equipment rental support",
        "Nearby verified mechanic locator with GPS mapping",
        "Live agricultural market (Mandi) prices and pricing trends",
        "Intuitive farmer-friendly UI designed for ease of use"
      ],
      Link: "https://kirsi.vercel.app",
      Github: "https://github.com/sanjubana/kirsi",
      Img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      Title: "PolluSense — AI-Powered Pollution Detection",
      Description: "An IoT and AI-based pollution monitoring system designed to collect environmental data, predict pollution trends, and provide health-related recommendations.",
      TechStack: ["ESP8266", "MQ135", "DHT11", "PMS Sensor", "Python", "Machine Learning", "LSTM"],
      Features: [
        "Real-time environmental sensor data capture (AQI, PM2.5, PM10, Temp/Humidity)",
        "LSTM neural network models to forecast pollution spikes",
        "Automated health impact advisories based on predictive AQI levels",
        "Interactive analytics dashboard with anomaly detection alerts",
        "Edge hardware integration with low-latency telemetry"
      ],
      Link: "https://pollusense.vercel.app",
      Github: "https://github.com/sanjubana",
      Img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      Title: "Automated Annual Report Preparation Portal",
      Description: "A web-based platform designed to simplify and automate annual-report preparation for educational institutions, reducing manual work and organizing institutional data efficiently.",
      TechStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Data Automation"],
      Features: [
        "Automated multi-department data aggregation and normalization",
        "Standardized institutional annual report formatting engine",
        "Dynamic graphical stats and faculty achievement summaries",
        "One-click print-ready and PDF document generation",
        "Secure role-based access for department heads and administrators"
      ],
      Link: "https://sanjubana.github.io/",
      Github: "https://github.com/sanjubana",
      Img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    }
  ],

  timeline: [
    {
      type: "experience",
      title: "Data Science Intern",
      organization: "Celebal Technologies",
      period: "Internship",
      location: "Jaipur, India",
      points: [
        "Worked on practical data science and machine learning assignments using Python and Pandas.",
        "Applied data cleaning, feature engineering, and model evaluation techniques to real-world datasets.",
        "Gained hands-on experience in predictive modeling and algorithmic performance tuning."
      ],
      badge: "Industry Experience",
      color: "from-cyan-500 to-blue-600"
    },
    {
      type: "experience",
      title: "MERN Stack Development Training",
      organization: "V Techno Hub",
      period: "Intensive Program",
      location: "Jaipur, India",
      points: [
        "Acquired in-depth, hands-on experience in full-stack web application development.",
        "Developed end-to-end architectures utilizing React.js, Node.js, Express.js, and MongoDB.",
        "Implemented RESTful API endpoints, state management, and modern component design."
      ],
      badge: "Full-Stack Training",
      color: "from-purple-500 to-indigo-600"
    }
  //   {
  //     type: "education",
  //     title: "B.Tech in Information Technology",
  //     organization: "Jaipur Engineering College and Research Centre (JECRC)",
  //     period: "2023 – Expected 2027",
  //     location: "Jaipur, Rajasthan",
  //     points: [
  //       "Current CGPA: 8.5 / 10",
  //       "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++/Java), Database Management Systems, Web Technologies, Computer Networks, Machine Learning.",
  //       "Active contributor to technical clubs and collaborative software development projects."
  //     ],
  //     badge: "Undergraduate Degree",
  //     color: "from-blue-500 to-cyan-500"
  //   },
  //   {
  //     type: "education",
  //     title: "Senior Secondary (12th Grade)",
  //     organization: "High School Board",
  //     period: "Completed",
  //     location: "Rajasthan, India",
  //     points: [
  //       "Percentage: 76.8%",
  //       "Physics, Chemistry, and Mathematics (PCM) stream."
  //     ],
  //     badge: "Higher Secondary",
  //     color: "from-indigo-500 to-violet-600"
  //   },
  //   {
  //     type: "education",
  //     title: "Secondary School (10th Grade)",
  //     organization: "Secondary School Board",
  //     period: "Completed",
  //     location: "Rajasthan, India",
  //     points: [
  //       "Percentage: 82.0%",
  //       "Strong foundation in Mathematics and General Sciences."
  //     ],
  //     badge: "Secondary Education",
  //     color: "from-violet-500 to-fuchsia-600"
  //   }
   ],

  certificates: [
    {
      id: 1,
      title: "Data Science Internship Certification",
      issuer: "Celebal Technologies",
      date: "2024",
      Img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "MERN Stack Full-Stack Training Certification",
      issuer: "V Techno Hub",
      date: "2024",
      Img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Machine Learning & Python Analytics",
      issuer: "Kaggle & Technical Competitions",
      date: "2024",
      Img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    }
  ],

  resume: {
    downloadUrl: "#",
    summary: "Full-Stack Developer with solid expertise in React.js, Node.js, Express, MongoDB, C++, and Python. Experienced in developing responsive, scalable web solutions and deploying Machine Learning models.",
    highlights: [
      "B.Tech IT with 8.5 CGPA at JECRC, Jaipur",
      "Hands-on MERN Stack & REST API development",
      "Practical Data Science internship at Celebal Technologies",
      "Strong foundation in Data Structures, Algorithms (C++), and IoT/AI integration"
    ]
  }
};
