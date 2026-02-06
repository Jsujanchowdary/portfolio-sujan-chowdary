import { Project, Experience, Education, Award, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Jujjavarapu Sujan Chowdary",
  role: "Cloud & AI Engineer",
  email: "chowdarysujan27@gmail.com",
  phone: "+91-7780539873",
  linkedin: "https://www.linkedin.com/in/jujjavarapu-sujan-chowdary-39027021b",
  github: "https://github.com/Jsujanchowdary",
  location: "Bangalore, India",
  objective: "I’m passionate about cloud computing, AI, and automation, with hands-on experience in DevOps, CI/CD, and data analytics. I enjoy working with technologies like Kubernetes, LangChain, and AI-driven automation to make systems more efficient and innovative."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "SQL"]
  },
  {
    category: "AI & Data",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Streamlit", "LangChain", "LLMs"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2)", "Docker", "Kubernetes", "Jenkins", "OpenStack", "Microservices", "Terraform"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Grafana", "Prometheus", "BlackBox", "ELK Stack", "Git", "Databricks", "SonarQube", "Nexus"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "IT R&D Intern – CNS (Cloud & Network Services)",
    company: "Nokia",
    location: "Bangalore, Karnataka",
    period: "2025 - Present",
    description: [
      "Gaining hands-on experience with Docker, Kubernetes, and cloud-native technologies in a large-scale enterprise environment.",
      "Supporting research and development activities in the IT User Segment, contributing to product engineering and innovation initiatives."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Nexus Info",
    location: "Coimbatore, India",
    period: "2023 - 2024",
    description: [
      "Conducting in-depth analysis of huge weather datasets to identify patterns and correlations to support better decision-making.",
      "Utilizing time series analysis techniques to uncover temporal trends and fluctuations, contributing to forecasting accuracy and strategic planning."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Technology (M. Tech) in Cloud Computing",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    period: "08/2024 – Present",
    grade: "CGPA: 9.47"
  },
  {
    degree: "Bachelor of Technology (B. Tech) in CSE (AI Specialization)",
    institution: "Vellore Institute of Technology",
    location: "Amaravati, India",
    period: "09/2020 – 03/2024",
    grade: "CGPA: 8.63"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Real Estate Data Engineering Using Multi-Cloud & LLM",
    period: "08/2023 – 11/2023",
    type: "Project",
    tech: ["AWS", "GCP", "PySpark", "LLMs", "Streamlit"],
    description: [
      "Built an AI-powered real estate analytics platform with multi-cloud infrastructure (AWS S3, SageMaker, QuickSight + GCP Vertex AI).",
      "Developed scalable ETL pipelines with PySpark and integrated LLM APIs (ChatGPT & Gemini) to deliver intelligent recommendations."
    ]
  },
  {
    title: "CI/CD Corporate Automation Pipelines",
    period: "09/2024 – 12/2024",
    type: "Project",
    tech: ["Docker", "Kubernetes", "Jenkins", "SonarQube", "Prometheus", "Grafana"],
    description: [
      "Setup whole CI/CD pipeline from scratch for secured auto-deployment, testing, and monitoring.",
      "Configured SonarQube, Nexus, and Trivy for vulnerability scanning and code quality.",
      "Developed Prometheus and Grafana dashboards for real-time system metrics."
    ]
  },
  {
    title: "Data Analysis Automation with LangChain & LLM Agent",
    period: "01/2024 – 03/2024",
    type: "Project",
    tech: ["Python", "LangChain", "LLM Agent", "Streamlit"],
    description: [
      "Developed AI-driven tools integrating NLP techniques to automate the data analysis process.",
      "Contributed to research in AI-powered automation for data analysis."
    ]
  },
  {
    title: "AI-driven Automation in Data Analysis (Publication)",
    period: "02/2025",
    type: "Publication",
    tech: ["LangChain", "NLP", "Research"],
    description: [
      "Published research on combining NLP techniques with LangChain PDF text extraction for intuitive structured data analysis."
    ]
  },
  {
    title: "AI-based Attorney Using NLTK Library (Publication)",
    period: "01/2024",
    type: "Publication",
    tech: ["NLTK", "Python", "Legal Tech"],
    description: [
      "Introduced AI Attorney NLP application for legal study to retrieve relevant legal articles and case analyses with high efficiency."
    ]
  }
];

export const CERTIFICATES = [
  "AWS Academy Cloud Security Foundations",
  "AWS Academy Cloud Developing",
  "AWS Academy Microservices and CI/CD Pipeline Builder",
  "AWS Academy Cloud Architecting"
];

export const AWARDS: Award[] = [
  {
    title: "Merit Certification in Clinical Engineering (ECS)",
    year: "2023",
    description: "Developed voice-command and hand gesture-controlled wheelchair prototype recognized as a top 10 project at VIT-AP."
  },
  {
    title: "Merit Certification in SmartInternz",
    year: "2023",
    description: "Secured 30/30 marks in Grand Assessment for 'Hotel Management System' project."
  }
];