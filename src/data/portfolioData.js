export const personalInfo = {
  name: "Anshu Kumar Sharma",
  title: "Mechanical Engineering Student | Technology Enthusiast | Learner & Builder",
  tagline: "Small Steps, Big Dreams.",
  availability: "Available for Learning, Internships & Opportunities",
  shortIntro: "I am a Mechanical Engineering student who is interested in technology, mathematics, engineering, programming, web development and learning new skills. I enjoy converting ideas into practical projects and continuously improving my technical and creative abilities.",
  aboutText: "I am Anshu Kumar Sharma, a B.Tech Mechanical Engineering student at Vishveshwaraya Group of Institutions, affiliated with Dr. APJ Abdul Kalam Technical University. My interests extend beyond mechanical engineering into programming, web development, AI concepts and digital product creation. I enjoy learning by building real projects and experimenting with new technologies. My goal is to combine engineering knowledge with technology to create useful and practical solutions.",
  
  // Hindi version for voice readout feature
  aboutTextHindi: "मैं अंशु कुमार शर्मा हूँ, विश्वेश्वरैया ग्रुप ऑफ़ इंस्टीट्यूशंस से बी.टेक मैकेनिकल इंजीनियरिंग का छात्र हूँ। मेरी रुचि इंजीनियरिंग के साथ-साथ प्रोग्रामिंग, वेब डेवलपमेंट और नई तकनीक सीखने में है। मेरा लक्ष्य प्रैक्टिकल प्रोजेक्ट्स के माध्यम से सीखना और नई तकनीक का उपयोग करके उपयोगी समाधान बनाना है।",
  
  hometown: "Siwan, Bihar, India",
  location: "Greater Noida / Delhi-NCR, Uttar Pradesh, India",
  college: "Vishveshwaraya Group of Institutions (VGI), Greater Noida, Uttar Pradesh",
  university: "Dr. APJ Abdul Kalam Technical University (AKTU)",
  btechDuration: "2024–2028",
  
  // Contact Placeholders (Update here when ready)
  email: "anshu.sharma.contact@example.com", // Placeholder: Replace with real email
  phone: "+91 XXXXXXXXXX", // Placeholder: Replace with real phone
  
  socials: {
    linkedin: "https://linkedin.com/in/anshu-kumar-sharma-680038375",
    github: "https://github.com/anshu-kumar-sharma", // Placeholder
    instagram: "https://instagram.com/anshu_sharma_official", // Placeholder
    youtube: "https://youtube.com/@anshu_sharma", // Placeholder
    whatsapp: "https://wa.me/910000000000" // Placeholder
  },
  
  profilePhoto: "./assets/profile.jpg",
  resumeUrl: "./assets/resume.pdf"
};

export const storyData = {
  title: "My Journey",
  paragraphs: [
    "My educational journey started in a village school in Bihar. I completed my 10th and 12th education there before moving to Delhi-NCR in 2024 to pursue higher education.",
    "Currently, I am pursuing my B.Tech in Mechanical Engineering. Alongside my core engineering studies, I actively explore programming, web development, Firebase, AI concepts, and digital project creation.",
    "My journey is driven by learning through hands-on practice. Even as a student, I consistently strive to build real, working projects rather than sticking solely to theoretical knowledge."
  ]
};

export const educationData = [
  {
    type: "Degree",
    title: "B.Tech — Mechanical Engineering",
    institution: "Vishveshwaraya Group of Institutions (VGI)",
    university: "Dr. APJ Abdul Kalam Technical University (AKTU)",
    location: "Greater Noida, Uttar Pradesh",
    duration: "2024 – 2028",
    status: "Currently Pursuing",
    highlight: "Combining core mechanical engineering principles with digital technologies."
  },
  {
    type: "Class 12 (Intermediate)",
    title: "Senior Secondary (Class XII)",
    board: "Bihar School Examination Board (BSEB)",
    school: "U.U.M.V. K. Bangra",
    year: "2024",
    marks: "388 / 500",
    status: "Completed"
  },
  {
    type: "Class 10 (Matriculation)",
    title: "Secondary School (Class X)",
    board: "Bihar School Examination Board (BSEB)",
    school: "U.U.M.V. K. Bangra",
    year: "2022",
    marks: "378 / 500",
    status: "Completed"
  }
];

export const academicPerformance = {
  semesters: [
    { sem: "1st Semester", sgpa: "8.58" },
    { sem: "2nd Semester", sgpa: "8.28" },
    { sem: "3rd Semester", sgpa: "7.58" },
    { sem: "4th Semester", sgpa: "7.04" }
  ],
  honors: [
    { title: "4th Rank", org: "College Mathematics Society", year: "2023" }
  ]
};

export const skillsData = {
  technical: [
    { name: "Engineering Drawing & Graphics", level: "Working Knowledge" },
    { name: "Manufacturing Fundamentals", level: "Familiar With" },
    { name: "Mechanical Concepts", level: "Learning" },
    { name: "AutoCAD", level: "Familiar With" },
    { name: "SolidWorks", level: "Familiar With" },
    { name: "HTML & CSS", level: "Working Knowledge" },
    { name: "JavaScript", level: "Working Knowledge" },
    { name: "React", level: "Learning / Building" },
    { name: "Python", level: "Learning" },
    { name: "Firebase", level: "Working Knowledge" },
    { name: "Basic AI Concepts", level: "Exploring" },
    { name: "GitHub & Vercel", level: "Working Knowledge" }
  ],
  soft: [
    "Communication",
    "Active Listening",
    "Patience",
    "Positive Attitude",
    "Quick Learning",
    "Problem Solving",
    "Polite Behaviour",
    "Calm Personality",
    "Empathy"
  ]
};

export const certificatesData = [
  {
    title: "Product Design and Development",
    issuer: "NPTEL (IIT Roorkee)",
    duration: "4 weeks",
    score: "56%",
    year: "2025",
    status: "Verified Certificate"
  },
  {
    title: "AutoCAD Certification",
    issuer: "Alison",
    duration: "Self-Paced",
    status: "Certificate Received"
  },
  {
    title: "SolidWorks Certification",
    issuer: "Alison",
    duration: "Self-Paced",
    status: "Certificate Received"
  },
  {
    title: "Python Foundations",
    issuer: "Online Platform",
    duration: "In Progress",
    status: "Certificate Pending (Placeholder)"
  },
  {
    title: "Learning & Participation Certificate",
    issuer: "Internshala",
    duration: "Short Term",
    status: "Participation Certificate"
  }
];

export const projectsData = [
  {
    id: "agro-nexa",
    title: "Agro-Nexa",
    subtitle: "Agricultural Assistance Concept Platform",
    tech: ["React", "Firebase", "AI Concepts"],
    type: "Student Project / Concept",
    description: "An agriculture-focused digital platform concept designed to assist users with crop management, soil analysis, and agricultural guidance through an accessible web interface.",
    features: [
      "Seed / Crop Identification concept UI",
      "Soil / Land type recommendation flow",
      "Leaf Disease Detection workflow mockup",
      "Fertilizer and Medicine information hub",
      "WhatsApp Doctor Support integration link",
      "Marketplace & Medicine purchasing links concept"
    ],
    note: "Disclaimer: This is an academic student concept project and does not claim medical or agricultural professional certification."
  },
  {
    id: "ads-learn",
    title: "ADS Learn Academy",
    subtitle: "E-Learning App Concept for Classes 10–12",
    tagline: "Learn, Grow, Success",
    tech: ["Thunkable", "Firebase"],
    type: "Student App Concept",
    description: "A mobile application project designed to structure educational resources, chapter guides, and study materials for high school students.",
    features: [
      "User Authentication (Login / Signup)",
      "Google Sign-In integration",
      "Structured Class 10–12 course materials",
      "Chapter-wise study content navigation",
      "Real-time database storage with Firebase"
    ]
  },
  {
    id: "chat-with-anshu",
    title: "Chat with Anshu",
    subtitle: "Simple Messaging & Contact Interface",
    tech: ["HTML/CSS/JS", "Firebase Realtime DB"],
    type: "Web Tool Project",
    description: "A functional communication form and light messaging app interface built to test database connectivity and form handling.",
    features: [
      "Name, phone number, and message form processing",
      "Instant data synchronization with Firebase",
      "Clean user response feedback UI"
    ]
  },
  {
    id: "sharma-wood-mart",
    title: "Sharma Wood Mart",
    subtitle: "E-Commerce Furniture Showcase Concept",
    tech: ["Shopify Concept", "WhatsApp API"],
    type: "Business Concept Showcase",
    description: "A full product catalog concept developed for a custom furniture business to accept nationwide customer inquiries.",
    features: [
      "Visual furniture showcase & specifications",
      "Direct WhatsApp order and inquiry triggers",
      "All-India delivery notice & pre-payment policy notice",
      "No Cash On Delivery (COD) terms display"
    ]
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "Modern Responsive Developer Site",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    type: "Active Web Project",
    description: "My personal interactive portfolio created to showcase academic records, projects, technical skills, and educational milestones.",
    features: [
      "Dark and Light theme switching",
      "Speech Synthesis (English & Hindi voice-over)",
      "Fully responsive mobile drawer navigation",
      "Interactive lightbox and project showcase"
    ]
  }
];

export const interestsData = [
  "Mechanical Engineering",
  "Technology & Gadgets",
  "Mathematics",
  "Computer Programming",
  "Web Development",
  "AI Concepts",
  "Product Design",
  "Learning New Technologies",
  "Building Practical Projects"
];

export const careerGoalData = {
  direction: "Mechanical Engineering + Technology",
  description: "I am actively looking to gain hands-on experience through internships, practical projects, and entry-level opportunities in mechanical engineering, manufacturing, product design, production, and applied software technology."
};

export const achievementsData = [
  "Selected through internal college evaluation process for an SIH (Smart India Hackathon) related academic project.",
  "Secured 4th Rank in the College Mathematics Society Competition (2023).",
  "Successfully completed NPTEL certification course on 'Product Design and Development' offered by IIT Roorkee with a 56% score."
];

