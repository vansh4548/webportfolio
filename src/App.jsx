import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Code,
  Cpu,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  User,
  Server,
  Database,
  Box,
  Wrench,
  ArrowUp,
  Github,
  FileText,
  Building,
  Calendar,
  Award,
  X,
  Instagram,
  Sparkles,
  ExternalLink,
  Download,
  Globe,
  Coffee,
  Heart,
  Zap,
  Terminal,
  Cloud,
  Shield,
  CpuIcon,
  DatabaseIcon,
  Code2,
  Network,
  Smartphone,
  Palette,
  GitBranch,
  Container,
  TestTube,
  Key,
  MessageCircle,
  Bot,
  Workflow,
  Menu,
} from "lucide-react";
import "./App.css";

// Import assets
import linkedin from "./assets/linkedin.png";
import java from "./assets/Full Stack Java Development (1).png";
import bigdata from "./assets/Big Data .png";
import Publication from "./assets/HealthCare Management System using IOT.png";
import bank from "./assets/banking.png";
import sale from "./assets/sales.png";
import spam from "./assets/spam.png";

//============== Custom Skill Icons ==============//
const SkillIcon = ({ name }) => {
  const icons = {
    Java: <CpuIcon className="w-5 h-5 md:w-6 md:h-6 text-red-400" />,
    SpringBoot: <Zap className="w-5 h-5 md:w-6 md:h-6 text-green-400" />,
    React: <Code2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />,
    Python: <Terminal className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />,
    MySQL: <DatabaseIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />,
    MongoDB: <Database className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
    Solidity: <Network className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />,
    Git: <GitBranch className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />,
    Nodejs: <Code className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
    HTML: <Globe className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />,
    CSS: <Palette className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
    Ethereum: <Shield className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />,
    Polygon: <Workflow className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
    Docker: <Container className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />,
    Postman: <TestTube className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />,
    JWT: <Key className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />,
    JavaScript: <Code2 className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />,
  };

  const Icon = icons[name] || (
    <Code className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
  );
  return <div className="w-5 h-5 md:w-6 md:h-6">{Icon}</div>;
};

//============== Social Media Icons ==============//
const SocialIcon = ({ platform, className = "" }) => {
  const icons = {
    linkedin: <Linkedin className={`w-5 h-5 md:w-6 md:h-6 ${className}`} />,
    github: <Github className={`w-5 h-5 md:w-6 md:h-6 ${className}`} />,
    instagram: <Instagram className={`w-5 h-5 md:w-6 md:h-6 ${className}`} />,
    salesforce: <Cloud className={`w-5 h-5 md:w-6 md:h-6 ${className}`} />,
    codolio: <Code className={`w-5 h-5 md:w-6 md:h-6 ${className}`} />,
  };

  return (
    icons[platform] || (
      <Globe className={`w-5 h-5 md:w-6 md:h-6 ${className}`} />
    )
  );
};

//============== App Component ==============//
export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "education",
        "projects",
        "skills",
        "certificates",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);

      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Data for the portfolio
  const portfolioData = {
    name: "Vansh Garg",
    title: "Backend & Blockchain Developer",
    about:
      "Hi, I'm Vansh Garg, a passionate and results-driven Backend Developer with experience in building secure, scalable, and high-performance applications. I specialize in Java, Spring Boot, MySQL, and Blockchain technologies, with a strong focus on crafting robust REST APIs and integrating decentralized functionalities. I have hands-on experience working in both startup and remote environments, contributing to live projects in the cryptocurrency and blockchain domains. I'm always eager to explore innovative solutions and grow my expertise in cutting-edge technologies.",
    contact: {
      location: "New Delhi, India",
      phone: "+91 7017005939",
      email: "vanshgarg7017@gmail.com",
      socials: {
        linkedin: "https://www.linkedin.com/in/vansh-garg-278910204/",
        github: "https://github.com/vansh4548",
        instagram: "https://www.instagram.com/vanshgarg._/",
        salesforce: "https://www.salesforce.com/trailblazer/profile",
        codolio: "https://codolio.com/profile/vansh7017",
      },
    },
    experience: [
      {
        role: "Backend Developer",
        company: "Connect Plus Exchange",
        duration: "June 2025 – August 2025",
        description:
          "Developed scalable backend services for a crypto trading platform using Java & Spring Boot. Implemented Web3j for blockchain functions and secured REST APIs.",
        logo: <Building className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      },
      {
        role: "Blockchain Developer Intern",
        company: "MetaCrafters (Remote)",
        duration: "June 2023 – August 2023",
        description:
          "Wrote and deployed Solidity smart contracts (ERC20, NFTs) on Ethereum & Polygon. Built a Polygon ID issuer for decentralized identity use cases.",
        logo: <Code className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      },
    ],
    education: [
      {
        degree: "Bachelor of Engineering in Computer Science and Engineering",
        institution: "Chandigarh University",
        location: "Mohali, Punjab",
        duration: "Aug. 2021 – May 2025",
      },
      {
        degree: "Intermediate Examination",
        institution: "Saraswati Vidya Mandir Inter College",
        location: "Muzaffarnagar, Uttar Pradesh",
        duration: "May 2020 – May 2021",
      },
    ],
    skills: [
      {
        category: "Languages & Databases",
        icon: <Terminal className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />,
        items: ["Java", "Python", "JavaScript", "Solidity", "MySQL", "MongoDB"],
      },
      {
        category: "Backend & Frontend",
        icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />,
        items: ["Spring Boot", "Nodejs", "React", "HTML", "CSS"],
      },
      {
        category: "Blockchain & Tools",
        icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />,
        items: ["Ethereum", "Polygon", "Git", "Docker", "Postman", "JWT"],
      },
    ],
    projects: [
      {
        title: "Grocery Sales Forecasting",
        stack: "Spring Boot + React + ML",
        description:
          "Integrated a sales prediction module using ARIMA time series forecasting. The app displays predictions on the frontend with dynamic graphs and filters.",
        imageUrl: sale,
        github:
          "https://github.com/vansh4548/Sales-Forcasting-Using-Machine-Learning",
        report: "#",
        icon: <Bot className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      },
      {
        title: "Spam Detection System",
        stack: "Python + Streamlit",
        description:
          "Developed an AI-based system that detects spam messages using machine learning models. It provides a user-friendly interface, stores results, and presents insights graphically.",
        imageUrl: spam,
        github: "https://github.com/vansh4548/AI-based-Spam-Detection-system",
        report: "#",
        icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      },
      {
        title: "Banking Management System",
        stack: "Spring Boot + MySQL + ReactJS",
        description:
          "Created a backend using Spring Boot and MySQL with a ReactJS frontend to handle bank account creation, deposits, withdrawals, and transaction logs.",
        imageUrl: bank,
        github:
          "https://github.com/vansh4548/Banking-Management-System-using-Sping-Boot-and-React.js",
        report: "#",
        icon: <Database className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      },
    ],
    certificates: [
      {
        title: "Full Stack Java Development",
        issuer: "Skill Up",
        imageUrl: java,
        icon: <Code2 className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      },
      {
        title: "Big Data",
        issuer: "Infosys Springboard",
        imageUrl: bigdata,
        icon: <Database className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      },
      {
        title: "Healthcare Monitoring System using IOT",
        issuer: "IJRASET",
        imageUrl: Publication,
        icon: <Cpu className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      },
    ],
  };

  // Navigation items
  const navItems = [
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Zap className="w-4 h-4" /> },
    {
      id: "certificates",
      label: "Certificates",
      icon: <Award className="w-4 h-4" />,
    },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioData.contact.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${portfolioData.contact.phone}`;
  };

  const handleProjectLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-slate-900 text-gray-300 font-sans leading-relaxed">
      {/* Enhanced Header */}
      <header className="bg-slate-900/95 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-800/50 shadow-2xl shadow-slate-900/50">
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-white font-bold text-base md:text-lg tracking-tight">
              Vansh Garg
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-800/80 border border-slate-700/50 rounded-2xl p-1.5 shadow-inner">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {item.icon}
                <span className="hidden lg:inline">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <div
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex items-center gap-2 bg-cyan-500 text-white font-semibold py-2 md:py-2.5 px-4 md:px-6 rounded-xl hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </div>

            <div
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden bg-slate-800/50 p-2 rounded-lg border border-slate-700/50 cursor-pointer"
            >
              <Menu className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 md:hidden">
              <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-2 gap-2">
                  {navItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-2 p-3 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                          : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </div>
                  ))}
                </div>
                <div
                  onClick={() => scrollToSection("contact")}
                  className="mt-3 flex items-center justify-center gap-2 bg-cyan-500 text-white font-semibold p-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Hire Me</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="container mx-auto px-4 md:px-6">
        {/* Enhanced Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center py-12 md:py-20 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <img
                      src={linkedin}
                      alt="Vansh Garg"
                      className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-4 border-slate-800/50 group-hover:border-cyan-400/30 transition-all duration-500"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-4 h-4 md:w-6 md:h-6 bg-blue-400 rounded-full animate-bounce delay-300 shadow-lg shadow-blue-400/50"></div>
                </div>
              </div>

              <div className="text-center lg:text-left order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-2xl px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-xs md:text-sm tracking-wider">
                    Available for new opportunities
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-400">
                    Vansh Garg
                  </span>
                </h1>

                <div className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-400 mb-6 md:mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    {portfolioData.title}
                  </span>
                </div>

                <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                  Building the future with secure, scalable applications and
                  cutting-edge blockchain solutions that push technological
                  boundaries.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
                  <div
                    onClick={() => scrollToSection("contact")}
                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/40 transform hover:-translate-y-1 flex items-center justify-center gap-2 md:gap-3 cursor-pointer"
                  >
                    <span className="text-sm md:text-base">
                      Start Conversation
                    </span>
                    <Mail className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  </div>

                  <div
                    onClick={() => scrollToSection("projects")}
                    className="group bg-transparent text-cyan-400 font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-1 flex items-center justify-center gap-2 md:gap-3 cursor-pointer"
                  >
                    <span className="text-sm md:text-base">Explore Work</span>
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
                  {Object.entries(portfolioData.contact.socials).map(
                    ([platform, url]) => (
                      <div
                        key={platform}
                        onClick={() => handleSocialClick(url)}
                        className="group bg-slate-800/50 p-2 md:p-3 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                      >
                        <SocialIcon
                          platform={platform}
                          className="text-gray-400 group-hover:text-cyan-400"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-2 md:h-3 bg-cyan-400 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="py-16 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
          <div className="relative">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Me
                </span>
              </h2>
              <div className="w-20 h-1 md:w-32 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-cyan-400/20"></div>
              <p className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto font-medium px-4">
                Passionate developer crafting digital solutions that make an
                impact
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl shadow-slate-900/50">
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
                  <div className="lg:col-span-2">
                    <p className="text-base md:text-xl leading-relaxed text-gray-300 mb-6 md:mb-8">
                      {portfolioData.about}
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 md:mb-2">
                          6+
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                          Months Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 md:mb-2">
                          10+
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                          Projects Completed
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 md:mb-2">
                          5+
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                          Technologies
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 md:mb-2">
                          5+
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                          Certifications
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 border border-cyan-400/20">
                      <User className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                      Quick Info
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-left">
                      <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                        <span className="text-sm md:text-base">
                          {portfolioData.contact.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                        <span className="text-sm md:text-base">
                          {portfolioData.contact.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                        <span className="text-xs md:text-sm">
                          {portfolioData.contact.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-16 md:py-32">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              Work{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 md:w-32 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-cyan-400/20"></div>
            <p className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto font-medium px-4">
              My professional journey in tech
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line - Hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/20"></div>

              {portfolioData.experience.map((job, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 md:mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-400/50 z-10"></div>

                  {/* Content */}
                  <div className="w-full md:w-5/12 md:pr-12 md:pl-12">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group hover:border-cyan-500/30">
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className="bg-slate-700/50 p-3 md:p-4 rounded-2xl group-hover:bg-cyan-500/10 transition-colors duration-300">
                          {job.logo}
                        </div>
                        <div className="text-right">
                          <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors">
                            {job.role}
                          </h3>
                          <p className="text-cyan-400 font-semibold text-base md:text-lg">
                            {job.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                        {job.description}
                      </p>
                      <div className="flex items-center text-cyan-300/80">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                        <span className="font-semibold text-sm md:text-base">
                          {job.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Education Section */}
        <section
          id="education"
          className="py-16 md:py-32 bg-slate-800/20 rounded-2xl md:rounded-3xl my-12 md:my-20"
        >
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Education
              </span>
            </h2>
            <div className="w-20 h-1 md:w-32 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-cyan-400/20"></div>
            <p className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto font-medium px-4">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group hover:border-cyan-500/30"
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="bg-slate-700/50 p-3 md:p-4 rounded-2xl group-hover:bg-cyan-500/10 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm md:text-base">
                      {edu.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                  {edu.degree}
                </p>
                <div className="flex items-center text-cyan-300/80">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                  <span className="font-semibold text-sm md:text-base">
                    {edu.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-16 md:py-32">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              Featured{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Projects
              </span>
            </h2>
            <div className="w-20 h-1 md:w-32 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-cyan-400/20"></div>
            <p className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto font-medium px-4">
              Some of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group border border-slate-700/50 hover:border-cyan-500/30 overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <div className="bg-slate-800/80 p-1.5 md:p-2 rounded-xl backdrop-blur-sm">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold border border-cyan-400/30">
                      {project.stack}
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-slate-700/50 flex items-center justify-between">
                    <div
                      onClick={() => handleProjectLinkClick(project.github)}
                      className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium group/link cursor-pointer"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">Code</span>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </div>
                    <div
                      onClick={() => handleProjectLinkClick(project.report)}
                      className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium group/link cursor-pointer"
                    >
                      <FileText className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">Details</span>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Tech Stack Section */}
        <section
          id="skills"
          className="py-16 md:py-32 bg-slate-800/20 rounded-2xl md:rounded-3xl my-12 md:my-20"
        >
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              Tech{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Stack
              </span>
            </h2>
            <div className="w-20 h-1 md:w-32 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-cyan-400/20"></div>
            <p className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto font-medium px-4">
              Technologies and tools I work with
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioData.skills.map((skillCategory, categoryIndex) => (
              <div
                key={skillCategory.category}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group hover:border-cyan-500/30"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 justify-center">
                  {skillCategory.icon}
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {skillCategory.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 md:gap-4 bg-slate-800/50 p-3 md:p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group/item border border-slate-700/50 hover:border-cyan-400/30 cursor-pointer"
                      style={{
                        animationDelay: `${
                          categoryIndex * 100 + skillIndex * 50
                        }ms`,
                      }}
                    >
                      <div className="group-hover/item:scale-110 transition-transform duration-300">
                        <SkillIcon name={skill} />
                      </div>
                      <span className="text-gray-300 font-medium text-sm md:text-base group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Certificates Section */}
        <section id="certificates" className="py-16 md:py-32">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Certificates
              </span>{" "}
              & Achievements
            </h2>
            <div className="w-20 h-1 md:w-32 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-cyan-400/20"></div>
            <p className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto font-medium px-4">
              My professional certifications and accomplishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {portfolioData.certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group border border-slate-700/50 hover:border-cyan-500/50 overflow-hidden cursor-pointer transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <div className="bg-slate-800/80 p-1.5 md:p-2 rounded-xl backdrop-blur-sm">
                      {cert.icon}
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm md:text-base">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-16 md:py-32">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              Let's{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Connect
              </span>
            </h2>
            <div className="w-20 h-1 md:w-32 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-cyan-400/20"></div>
            <p className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto font-medium px-4">
              Ready to bring your ideas to life? Let's start a conversation!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Information */}
              <div className="space-y-6 md:space-y-8">
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                    Get in touch
                  </h3>

                  <div className="space-y-4 md:space-y-6">
                    <div
                      onClick={handleEmailClick}
                      className="flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group w-full text-left cursor-pointer"
                    >
                      <div className="bg-slate-700 p-2 md:p-4 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                        <Mail className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base md:text-lg">
                          Email
                        </h4>
                        <p className="text-gray-400 group-hover:text-cyan-300 transition-colors text-sm md:text-base">
                          {portfolioData.contact.email}
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={handlePhoneClick}
                      className="flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group w-full text-left cursor-pointer"
                    >
                      <div className="bg-slate-700 p-2 md:p-4 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                        <Phone className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base md:text-lg">
                          Phone
                        </h4>
                        <p className="text-gray-400 group-hover:text-cyan-300 transition-colors text-sm md:text-base">
                          {portfolioData.contact.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <div className="bg-slate-700 p-2 md:p-4 rounded-xl">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base md:text-lg">
                          Location
                        </h4>
                        <p className="text-gray-400 text-sm md:text-base">
                          {portfolioData.contact.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
                    Follow me
                  </h3>
                  <div className="flex justify-center items-center gap-4 md:gap-6">
                    {Object.entries(portfolioData.contact.socials).map(
                      ([platform, url]) => (
                        <div
                          key={platform}
                          onClick={() => handleSocialClick(url)}
                          className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                        >
                          <SocialIcon
                            platform={platform}
                            className="text-gray-400 group-hover:text-cyan-400"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                  Send a message
                </h3>
                <form className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm md:text-base"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm md:text-base"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm md:text-base"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none text-sm md:text-base"
                  ></textarea>
                  <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2 md:gap-3 cursor-pointer">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Send Message</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative py-8 md:py-12 mt-12 md:mt-20 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                Vansh Garg
              </span>
            </div>
            <p className="text-gray-500 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-lg px-4">
              Building innovative solutions with cutting-edge technology. Let's
              create something amazing together.
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
              {Object.entries(portfolioData.contact.socials).map(
                ([platform, url]) => (
                  <div
                    key={platform}
                    onClick={() => handleSocialClick(url)}
                    className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 cursor-pointer"
                  >
                    <SocialIcon platform={platform} />
                  </div>
                )
              )}
            </div>
            <p className="text-gray-600 text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Vansh Garg. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Certificate Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 border border-slate-700 rounded-2xl md:rounded-3xl p-4 md:p-6 max-w-4xl w-full max-h-[90vh] relative shadow-2xl shadow-slate-900/50"
          >
            <div
              onClick={() => setSelectedCert(null)}
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-cyan-500 text-white p-2 md:p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110 z-10 cursor-pointer"
            >
              <X className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div className="relative">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full h-auto object-contain max-h-[70vh] rounded-xl md:rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 md:p-6 rounded-b-xl md:rounded-b-2xl">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-cyan-400 font-semibold text-sm md:text-base">
                  {selectedCert.issuer}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 md:p-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 z-40 transform hover:-translate-y-1 hover:scale-110 group cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
        </div>
      )}
    </div>
  );
}
