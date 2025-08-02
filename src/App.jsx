import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Cpu, GraduationCap, Mail, MapPin, Phone, Linkedin, User, Server, Database, Box, Wrench, ArrowUp, Github, FileText, Building, Calendar, Award, X, Instagram, Sparkles } from 'lucide-react';
import './App.css';
import profile from './assets/profile.png';
import java from './assets/Full Stack Java Development (1).png';
import bigdata from './assets/Big Data .png';
import Publication from './assets/HealthCare Management System using IOT.png';
import bank from './assets/banking.png';
import sale from './assets/sales.png';
import spam from './assets/spam.png';
//============== SVG Icons for Skills & Socials ==============//
const SalesforceIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7">
        <title>Salesforce</title>
        <path d="M11.998 2.51A9.49 9.49 0 002.51 12a9.49 9.49 0 009.488 9.49 9.49 9.49 0 009.49-9.49 9.49 9.49 0 00-9.49-9.49zm4.55 13.24a1.108 1.108 0 01-1.07.72H8.55a1.108 1.108 0 01-1.07-.72 1.108 1.108 0 01.7-1.46l4.2-2.1a1.108 1.108 0 011.46.72v2.14zm-5.62-4.1a1.108 1.108 0 01-1.07.72H5.73a1.108 1.108 0 01-.37-2.18l4.2-2.1a1.108 1.108 0 011.46.72v2.14a1.108 1.108 0 01-1.07.72z"/>
    </svg>
);

const SkillIcon = ({ name }) => {
    const icons = {
        Java: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Java</title><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zM18.832 15.06a1.362 1.362 0 0 0-1.023.29 3.09 3.09 0 0 0-.645.626c-.36.567-.692 1.15-.767 1.253-.06.09-.12.112-.33-.03-.195-.134-.99-1.004-1.365-1.424-.375-.42-.69-.795-.69-.81 0-.015.195-.24.435-.495.24-.255.435-.48.435-.495 0-.015-.24-.03-.54-.03-1.02 0-1.545.285-1.74.495-.118.133.062.533.495 1.11.45.585.81 1.05.81 1.05s.09.12.21.12c.09 0 .21-.06.21-.12 0-.075-.105-.345-.24-.585-.135-.24-.255-.45-.255-.48 0-.03.225-.21.495-.39.27-.18.495-.3.495-.27 0 .015-.12.195-.27.405-.15.21-.285.435-.285.495 0 .045.06.12.135.165.075.045.195.06.27.06.135 0 .255-.06.345-.18.09-.12.165-.3.195-.405.03-.09.045-.15.045-.15s.33.315.735.69c.405.375.75.69.75.72 0 .03-.03.075-.09.12a.3.3 0 0 1-.21.075c-.09 0-.18-.03-.24-.09-.06-.06-.12-.165-.15-.255-.03-.09-.06-.165-.06-.165s-.495.585-1.11 1.29c-.615.705-.885.96-.885.99 0 .06.3.12.705.12.375 0 .72-.03 1.035-.09.315-.06.63-.15.63-.15s.06-.09.06-.18a.36.36 0 0 0-.045-.18c-.045-.075-.12-.165-.12-.165s.435-.495.915-1.05c.48-.555.735-.87.735-.915a.2.2 0 0 0-.06-.15c-.09-.06-.195-.09-.3-.09a.42.42 0 0 0-.315.12z"/></svg>,
        SpringBoot: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Spring Boot</title><path d="M22.512 13.944c-.544.288-1.056.72-1.536 1.296-.864 1.08-1.536 2.376-2.016 3.84-.24.72-.408 1.464-.528 2.232-.024.216-.048.408-.048.576a.72.72 0 0 1-.744.72H6.36a.72.72 0 0 1-.744-.696c0-.192.024-.408.048-.624.12-.768.288-1.512.528-2.232.48-1.464 1.152-2.76 2.016-3.84.48-.576.992-1.008 1.536-1.296.6-.336 1.224-.528 1.872-.528s1.272.192 1.872.528zm-1.824-3.96c.24-.264.384-.576.432-.936.072-.36.072-.72.024-1.08a2.88 2.88 0 0 0-.48-1.272c-.24-.312-.552-.552-.912-.72a3.336 3.336 0 0 0-1.272-.288 3.336 3.336 0 0 0-1.272.288c-.36.168-.672.408-.912.72a2.88 2.88 0 0 0-.48 1.272c-.048.36-.048.72.024 1.08.048.36.192.672.432.936.24.264.528.456.864.576.336.12.672.168 1.008.168s.672-.048 1.008-.168c.336-.12.624-.312.864-.576zM18.66 3.096A11.952 11.952 0 0 0 12 0a11.952 11.952 0 0 0-6.66 3.096A11.952 11.952 0 0 0 0 12c0 6.624 5.376 12 12 12s12-5.376 12-12A11.952 11.952 0 0 0 18.66 3.096z"/></svg>,
        React: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>React</title><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.06-8.07c.53-.53 1.23-1.04 2.06-1.04s1.53.51 2.06 1.04c.53.53.53 1.38 0 1.91s-1.38.53-1.91 0c-.53-.53-1.04-1.23-1.04-2.06s.51-1.53 1.04-2.06c.53-.53 1.38-.53 1.91 0s.53 1.38 0 1.91l-3.97 3.97c-.53.53-1.38.53-1.91 0s-.53-1.38 0-1.91l3.97-3.97zM12 6.5c-1.3 0-2.5.46-3.47 1.29-.97.83-1.53 2-1.53 3.21s.56 2.38 1.53 3.21c.97.83 2.17 1.29 3.47 1.29s2.5-.46 3.47-1.29c.97-.83 1.53-2 1.53-3.21s-.56-2.38-1.53-3.21C14.5 6.96 13.3 6.5 12 6.5z"/></svg>,
        Python: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Python</title><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM6.21 15.79c.49 0 .89.4.89.89s-.4.89-.89.89-.89-.4-.89-.89.4-.89.89-.89zm1.78-6.36c.49 0 .89.4.89.89s-.4.89-.89.89-.89-.4-.89-.89.4-.89.89-.89zm-1.78 7.25c.49 0 .89.4.89.89s-.4.89-.89.89-.89-.4-.89-.89.4-.89.89-.89zm13.59-7.25c.49 0 .89.4.89.89s-.4.89-.89.89-.89-.4-.89-.89.4-.89.89-.89zm-1.78 6.36c.49 0 .89.4.89.89s-.4.89-.89.89-.89-.4-.89-.89.4-.89.89-.89zm1.78-7.25c.49 0 .89.4.89.89s-.4.89-.89.89-.89-.4-.89-.89.4-.89.89-.89zM12 7.11c-2.7 0-4.89 2.19-4.89 4.89s2.19 4.89 4.89 4.89 4.89-2.19 4.89-4.89-2.19-4.89-4.89-4.89z"/></svg>,
        MySQL: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>MySQL</title><path d="M12.488 13.784c.324.204.696.36.984.624.528.48 1.032 1.116 1.344 1.8.312.684.432 1.452.432 2.208 0 .192-.012.444-.024.648a.72.72 0 0 1-.744.696H8.52a.72.72 0 0 1-.744-.696c0-.204.012-.456.024-.648 0-.756.12-1.524.432-2.208.312-.684.816-1.32 1.344-1.8.288-.264.66-.42.984-.624V8.4h1.944v5.384zm-.444-10.74C5.604 3.044 0 7.92 0 12c0 4.08 5.604 8.956 12.044 8.956 6.444 0 11.956-4.876 11.956-8.956C24 7.92 18.488 3.044 12.044 3.044zM12 22.08c-5.52 0-10.08-4.08-10.08-8.064 0-3.984 4.56-8.064 10.08-8.064 5.52 0 9.912 4.08 9.912 8.064 0 3.984-4.392 8.064-9.912 8.064z"/></svg>,
        MongoDB: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>MongoDB</title><path d="M12.182 18.358c-2.24-.707-3.92-2.31-4.665-4.432-.737-2.102-.54-4.39.49-6.342.99-1.88 2.76-3.26 4.89-3.77 2.14-.51 4.39-.1 6.35.99 1.95 1.09 3.33 2.86 3.77 4.9.51 2.04.1 4.28-.99 6.23-1.09 1.95-2.86 3.33-4.9 3.77-2.03.44-4.28.04-6.22-.95zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>,
        Solidity: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Solidity</title><path d="M12 0L3.46 6v12L12 24l8.54-6V6L12 0zm6.34 16.5L12 20.95l-6.34-4.45V7.5L12 3.05l6.34 4.45v9.05z"/></svg>,
        Git: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Git</title><path d="M23.55 10.15L13.85.45a1.5 1.5 0 0 0-2.12 0L1.45 10.73a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0L12 12.85v6.7a1.5 1.5 0 0 0 1.5 1.5h.05a1.5 1.5 0 0 0 1.5-1.5v-6.7l4.24 4.24a1.5 1.5 0 0 0 2.12 0l2.12-2.12a1.5 1.5 0 0 0 0-2.12zM12 1.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-6 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm12 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"/></svg>,
    };
    const Icon = icons[name] || <Code className="w-full h-full" />;
    return <div className="w-6 h-6">{Icon}</div>;
};


//============== App Component ==============//
// This is the main component that renders the entire portfolio.
export default function App() {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [generatedPitch, setGeneratedPitch] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Effect to handle scroll events for active navigation link and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'certificates', 'ai-pitch', 'contact'];
      // Adjust offset for better accuracy
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = '';
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Data for the portfolio
  const portfolioData = {
    name: "Vansh Garg",
    title: "Backend & Blockchain Developer",
    about: "Hi, I'm Vansh Garg, a passionate and results-driven Backend Developer with experience in building secure, scalable, and high-performance applications. I specialize in Java, Spring Boot, MySQL, and Blockchain technologies, with a strong focus on crafting robust REST APIs and integrating decentralized functionalities. I have hands-on experience working in both startup and remote environments, contributing to live projects in the cryptocurrency and blockchain domains. I'm always eager to explore innovative solutions and grow my expertise in cutting-edge technologies.",
    contact: {
      location: "New Delhi, India",
      phone: "+91 7017005939",
      email: "vanshgarg7017@gmail.com",
      socials: {
        linkedin: "https://www.linkedin.com/in/vansh-garg-278910204/",
        github: "https://github.com/vansh4548",
        instagram: "https://www.instagram.com/vanshgarg._/",
        salesforce: "https://www.salesforce.com/trailblazer/profile",
        codolio: "https://codolio.com/profile/vansh7017"
      }
    },
    experience: [
      {
        role: "Backend Developer",
        company: "Connect Plus Exchange",
        duration: "June 2024 – Present",
        description: "Developed scalable backend services for a crypto trading platform using Java & Spring Boot. Implemented Web3j for blockchain functions and secured REST APIs.",
        logo: <Building className="w-8 h-8 text-cyan-400" />
      },
      {
        role: "Blockchain Developer Intern",
        company: "MetaCrafters (Remote)",
        duration: "June 2023 – August 2023",
        description: "Wrote and deployed Solidity smart contracts (ERC20, NFTs) on Ethereum & Polygon. Built a Polygon ID issuer for decentralized identity use cases.",
        logo: <Code className="w-8 h-8 text-cyan-400" />
      }
    ],
    education: [
        {
            degree: "Bachelor of Engineering in Computer Science and Engineering",
            institution: "Chandigarh University",
            location: "Mohali, Punjab",
            duration: "Aug. 2021 – May 2025"
        },
        {
            degree: "Intermediate Examination",
            institution: "Saraswati Vidya Mandir Inter College",
            location: "Muzaffarnagar, Uttar Pradesh",
            duration: "May 2020 – May 2021"
        }
    ],
    skills: [
        { 
          category: 'Languages & Databases', 
          items: ['Java', 'Python', 'JavaScript', 'Solidity', 'MySQL', 'MongoDB']
        },
        { 
          category: 'Backend & Frontend', 
          items: ['Spring Boot', 'Node.js', 'React', 'HTML', 'CSS']
        },
        { 
          category: 'Blockchain & Tools', 
          items: ['Ethereum', 'Polygon', 'Git', 'Docker', 'Postman', 'JWT']
        }
    ],
    projects: [
      {
        title: "Grocery Sales Forecasting",
        stack: "Spring Boot + React + ML",
        description: "Integrated a sales prediction module using ARIMA time series forecasting. The app displays predictions on the frontend with dynamic graphs and filters.",
        imageUrl: sale,
        github: "https://github.com/vansh4548/Sales-Forcasting-Using-Machine-Learning",
        report: "#"
      },
      {
        title: "Spam Detection System",
        stack: "Python + Streamlit",
        description: "Developed an AI-based system that detects spam messages using machine learning models. It provides a user-friendly interface, stores results, and presents insights graphically.",
        imageUrl: spam,
        github: "https://github.com/vansh4548/AI-based-Spam-Detection-system",
        report: "#"
      },
      {
        title: "Banking Management System",
        stack: "Spring Boot + MySQL + ReactJS",
        description: "Created a backend using Spring Boot and MySQL with a ReactJS frontend to handle bank account creation, deposits, withdrawals, and transaction logs.",
        imageUrl: bank,
        github: "https://github.com/vansh4548/Banking-Management-System-using-Sping-Boot-and-React.js",
        report: "#"
      }
    ],
    certificates: [
        {
            title: "Full Stack Java Development",
            issuer: "Skill Up",
            imageUrl: java
        },
        {
            title: "Big Data",
            issuer: "Infosys Springboard",
            imageUrl: bigdata
        },
        {
            title: "Healthcare Monitoring System using IOT",
            issuer: "IJRASET",
            imageUrl: Publication
        }
    ]
  };

  const handleGeneratePitch = async () => {
    if (!jobDescription.trim() || isGenerating) return;
    
    setIsGenerating(true);
    setGeneratedPitch('');

    const portfolioContext = `
      About: ${portfolioData.about}
      Experience: ${JSON.stringify(portfolioData.experience.map(e => ({ role: e.role, company: e.company, description: e.description })))}
      Skills: ${JSON.stringify(portfolioData.skills.map(s => s.items).flat())}
      Projects: ${JSON.stringify(portfolioData.projects.map(p => ({ title: p.title, description: p.description, stack: p.stack })))}
    `;

    const prompt = `You are an expert career assistant for a developer named Vansh Garg. Based on his portfolio information provided below and the job description, write a concise and compelling paragraph (3-4 sentences) that highlights why Vansh is an excellent candidate for the role. Directly reference specific skills, experiences, or projects from his portfolio that align with the job description.\n\n---Vansh Garg's Portfolio---\n${portfolioContext}\n\n---Job Description---\n${jobDescription}\n\n---Generated Pitch---`;

    try {
        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = ""; // API key is handled by the environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();
        
        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
          const text = result.candidates[0].content.parts[0].text;
          setGeneratedPitch(text);
        } else {
          setGeneratedPitch("Sorry, I couldn't generate a pitch. The response from the AI was empty.");
        }
    } catch (error) {
        console.error("Error generating pitch:", error);
        setGeneratedPitch("An error occurred while generating the pitch. Please check the console for details.");
    } finally {
        setIsGenerating(false);
    }
  };


  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="bg-slate-900 text-gray-300 font-sans leading-relaxed">
      {/* Header */}
      <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-40 border-b border-slate-800">
        <nav className="container mx-auto px-6 py-3 flex justify-center items-center">
          <div className="hidden md:flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full p-1">
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeSection === item.id ? 'bg-slate-700 text-cyan-300' : 'text-gray-400 hover:bg-slate-800/50 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-br from-cyan-500/10 to-slate-900 blur-3xl rounded-full"></div>
            <div className="container mx-auto px-6 relative">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <img 
                                src={profile}
                                alt="Vansh Garg" 
                                className="relative w-full max-w-sm rounded-3xl object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <span className="text-cyan-400 font-semibold tracking-wider text-lg">Hi, I'm {portfolioData.name}</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 mb-4 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {portfolioData.title}
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl">
                            I build secure, scalable, and high-performance applications with a focus on backend and blockchain technologies.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1">
                                Get In Touch
                            </a>
                            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="bg-transparent text-cyan-400 font-bold py-3 px-8 rounded-full border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                                View My Work
                            </a>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href={portfolioData.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Linkedin className="w-7 h-7"/></a>
                            <a href={portfolioData.contact.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Github className="w-7 h-7"/></a>
                            <a href={portfolioData.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Instagram className="w-7 h-7"/></a>
                            <a href={portfolioData.contact.socials.salesforce} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><SalesforceIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24">
          <h2 className="text-4xl font-bold text-center mb-4 text-white tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto text-center text-gray-400 text-lg leading-relaxed">
            <p>{portfolioData.about}</p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
            <h2 className="text-4xl font-bold text-center mb-4 text-white tracking-tight">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16"></div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {portfolioData.experience.map((job, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500 transition-colors duration-300 flex flex-col group backdrop-blur-sm">
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-slate-700 p-3 rounded-full">
                                {job.logo}
                            </div>
                            <div className="text-right">
                                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                <p className="text-cyan-400 font-semibold">{job.company}</p>
                            </div>
                        </div>
                        <p className="text-gray-400 flex-grow mb-4">{job.description}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-auto">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{job.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-24">
            <h2 className="text-4xl font-bold text-center mb-4 text-white tracking-tight">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {portfolioData.education.map((edu, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500 transition-colors duration-300 flex flex-col group backdrop-blur-sm">
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-slate-700 p-3 rounded-full">
                                <GraduationCap className="w-8 h-8 text-cyan-400" />
                            </div>
                            <div className="text-right">
                                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                <p className="text-cyan-400 font-semibold">{edu.location}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 flex-grow mb-4">{edu.degree}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-auto">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{edu.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <h2 className="text-4xl font-bold text-center mb-4 text-white tracking-tight">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700 overflow-hidden hover:border-cyan-500 transition-colors duration-300 flex flex-col group backdrop-blur-sm">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-sm font-semibold text-cyan-500 mb-4">{project.stack}</p>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-end gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium">
                          <Github className="w-5 h-5 mr-2" />
                          GitHub
                      </a>
                      <a href={project.report} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium">
                          <FileText className="w-5 h-5 mr-2" />
                          Report
                      </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className="py-24">
          <h2 className="text-4xl font-bold text-center mb-4 text-white tracking-tight">My Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.skills.map((skillCategory) => (
              <div key={skillCategory.category} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">{skillCategory.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillCategory.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 bg-slate-800 p-3 rounded-md">
                      <div className="text-cyan-400">
                        <SkillIcon name={skill.replace('.js','')} />
                      </div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Certificates Section */}
        <section id="certificates" className="py-24">
          <h2 className="text-4xl font-bold text-center mb-4 text-white tracking-tight">Certificates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {portfolioData.certificates.map((cert, index) => (
              <div key={index} onClick={() => setSelectedCert(cert)} className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 flex flex-col group backdrop-blur-sm cursor-pointer">
                <img src={cert.imageUrl} alt={cert.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                    <p className="text-sm font-semibold text-cyan-500">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
            <h2 className="text-4xl font-bold text-center mb-4 text-white tracking-tight">Get In Touch</h2>
            <p className="text-lg text-center text-gray-400 max-w-2xl mx-auto mb-12">
                I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-8">
                <a href={`mailto:${portfolioData.contact.email}`} className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500 transition-colors duration-300 flex items-center gap-4 group backdrop-blur-sm">
                    <div className="bg-slate-700 p-4 rounded-full">
                        <Mail className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Email</h3>
                        <p className="text-gray-400 group-hover:text-cyan-300 transition-colors">{portfolioData.contact.email}</p>
                    </div>
                </a>
                <a href={`tel:${portfolioData.contact.phone}`} className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500 transition-colors duration-300 flex items-center gap-4 group backdrop-blur-sm">
                    <div className="bg-slate-700 p-4 rounded-full">
                        <Phone className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Phone</h3>
                        <p className="text-gray-400 group-hover:text-cyan-300 transition-colors">{portfolioData.contact.phone}</p>
                    </div>
                </a>
            </div>
            <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Find me on</h3>
                <div className="flex justify-center items-center gap-6">
                    <a href={portfolioData.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Linkedin className="w-8 h-8"/></a>
                    <a href={portfolioData.contact.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Github className="w-8 h-8"/></a>
                    <a href={portfolioData.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Instagram className="w-8 h-8"/></a>
                    <a href={portfolioData.contact.socials.salesforce} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><SalesforceIcon /></a>
                    <a href={portfolioData.contact.socials.codolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110 font-bold text-3xl flex items-center justify-center w-8 h-8 rounded-full bg-slate-700">C</a>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 mt-12 border-t border-slate-800">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Vansh Garg. All Rights Reserved.</p>
      </footer>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 border border-slate-700 p-4 rounded-lg max-w-4xl w-full max-h-[90vh] relative shadow-2xl"
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute -top-3 -right-3 bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedCert.imageUrl} alt={selectedCert.title} className="w-full h-auto object-contain max-h-[80vh] rounded" />
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 z-40 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
