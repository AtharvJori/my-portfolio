"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Globe,
  Brain,
  MessageSquare,
  Film,
  BarChart3,
  MapPin,
  ArrowRight,
  Star,
  LucideIcon,
  X,
  Calendar,
} from "lucide-react";

// // TypeScript interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  icon: LucideIcon;
  gradient: string;
  liveLink: string | null;
  githubLink: string | null;
  featured: boolean;
  category: ProjectCategory;
  duration?: string;
  keyFeatures?: string[];
}

type ProjectCategory =
  | "AI/ML"
  | "Deep Learning"
  | "Machine Learning"
  | "Data Analytics";

interface ProjectCardProps {
  project: Project;
  setHoveredProject: (id: number | null) => void;
  isFeatured?: boolean;
  onShowDetails: (project: Project) => void;
}

const ProjectsSection: React.FC = () => {
  const [setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Your actual projects data with TypeScript typing
  const projects: Project[] = [
    {
      id: 1,
      title: "Context Aware Geospatial Data Retrieval System",
      description:
        "Developed an intelligent geospatial data retrieval system that uses Large Language Models (LLMs), Natural Language Processing (NLP), and Agentic AI (Crew AI) to provide personalized and context-aware location recommendations.",
      fullDescription:
        "This project represents a cutting-edge approach to geospatial data retrieval by combining the power of Large Language Models with specialized AI agents. The system interprets natural language queries about locations and provides intelligent, context-aware recommendations. Using Crew AI, the system dynamically assigns tasks to specialized agents, each responsible for different aspects of the recommendation process - from understanding user preferences to analyzing geographical data and generating personalized suggestions. The system leverages advanced NLP techniques to understand complex user queries and provides responses that consider factors like proximity, user preferences, historical data, and real-time conditions.",
      technologies: ["LLM", "NLP", "Crew AI", "Python", "Geospatial Analysis"],
      icon: MapPin,
      gradient: "from-blue-500 to-purple-600",
      liveLink: null,
      githubLink: null,
      featured: true,
      category: "AI/ML",
      duration: "3 months",
      keyFeatures: [
        "Natural language query processing",
        "Dynamic AI agent task assignment",
        "Context-aware recommendations",
        "Real-time geospatial analysis",
        "Personalized location suggestions",
      ],
    },
    {
      id: 2,
      title: "Brain Tumor Detection using CNN",
      description:
        "Developed a deep learning model using Convolutional Neural Networks (CNN) to detect brain tumors from MRI scans. The model classifies images into tumor and non-tumor categories with high accuracy.",
      fullDescription:
        "This medical imaging project focuses on developing a robust deep learning solution for brain tumor detection using state-of-the-art Convolutional Neural Networks. The system processes MRI scan images and performs binary classification to identify the presence of brain tumors with high accuracy. The project involved extensive data preprocessing, including image normalization, resizing, and augmentation techniques to improve model generalization. Advanced CNN architectures were implemented with multiple convolutional layers, pooling operations, and dropout regularization to prevent overfitting. The model underwent rigorous training with cross-validation and hyperparameter tuning to achieve optimal performance in medical diagnostic scenarios.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "CNN",
        "Medical Imaging",
      ],
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      liveLink: null,
      githubLink: null,
      featured: true,
      category: "Deep Learning",
      duration: "4 months",
      keyFeatures: [
        "High-accuracy tumor detection",
        "Advanced image preprocessing",
        "CNN architecture optimization",
        "Cross-validation testing",
        "Medical imaging compliance",
      ],
    },
    {
      id: 3,
      title: "Movie Recommendation System",
      description:
        "Built a content-based and collaborative filtering movie recommendation system using the TMDb 5000 movie dataset. The system suggests personalized movie recommendations based on genres, keywords, cast, and user preferences.",
      fullDescription:
        "This comprehensive recommendation system combines both content-based and collaborative filtering approaches to provide highly personalized movie suggestions. The system analyzes the TMDb 5000 movie dataset, processing information about genres, keywords, cast members, directors, and user ratings to create sophisticated recommendation algorithms. The content-based filtering component uses movie metadata and features to find similarities between films, while the collaborative filtering aspect leverages user behavior patterns and preferences. The system employs advanced similarity metrics, including cosine similarity and Pearson correlation, to identify movies that align with user preferences. Additional features include popularity-based recommendations for new users and hybrid approaches that combine multiple recommendation strategies.",
      technologies: [
        "Python",
        "Machine Learning",
        "Pandas",
        "Scikit-learn",
        "Collaborative Filtering",
      ],
      icon: Film,
      gradient: "from-gray-700 to-gray-900",
      liveLink: null,
      githubLink: null,
      featured: false,
      category: "Machine Learning",
      duration: "2 months",
      keyFeatures: [
        "Hybrid recommendation approach",
        "Content-based filtering",
        "Collaborative filtering",
        "Similarity metric analysis",
        "Personalized user experience",
      ],
    },
    {
      id: 4,
      title: "Amazon Sales Data Analysis",
      description:
        "Performed data visualization and dashboard creation on Amazon sales data to extract insights into product performance, regional trends, and seasonal demand. Delivered interactive dashboards for decision-making.",
      fullDescription:
        "This comprehensive data analytics project involved analyzing extensive Amazon sales data to uncover critical business insights and trends. The project encompassed end-to-end data analysis, from initial data cleaning and preprocessing to advanced visualization and dashboard creation. Using Tableau and SQL, interactive dashboards were developed to visualize key performance indicators, including product performance metrics, regional sales patterns, seasonal demand fluctuations, and customer behavior trends. The analysis revealed actionable insights about peak selling periods, high-performing product categories, geographical sales distribution, and customer purchasing patterns. The final deliverables included executive-level dashboards with drill-down capabilities, automated reporting features, and predictive analytics components for forecasting future sales trends.",
      technologies: [
        "Tableau",
        "Excel",
        "SQL",
        "Data Visualization",
        "Business Analytics",
      ],
      icon: BarChart3,
      gradient: "from-blue-400 to-cyan-500",
      liveLink: "https://public.tableau.com/app/profile/viraj.chikhale/vizzes",
      githubLink: null,
      featured: false,
      category: "Data Analytics",
      duration: "6 weeks",
      keyFeatures: [
        "Interactive Tableau dashboards",
        "Regional sales analysis",
        "Seasonal trend identification",
        "Product performance metrics",
        "Predictive analytics insights",
      ],
    },
    {
      id: 5,
      title: "Chat with PDF - RAG-Based Chatbot",
      description:
        "Built a Retrieval-Augmented Generation (RAG) based chatbot that allows users to ask questions about the content of any uploaded PDF. The system extracts relevant context from the PDF and uses Gemini Pro API to generate accurate, human-like answers.",
      fullDescription:
        "This innovative chatbot application leverages Retrieval-Augmented Generation (RAG) technology to create an intelligent document interaction system. Users can upload PDF documents and engage in natural language conversations about the content. The system employs sophisticated document parsing techniques to extract and structure information from PDFs, creating searchable embeddings that enable efficient content retrieval. When users ask questions, the system performs semantic search to identify relevant document sections and uses the Gemini Pro API to generate contextually accurate, human-like responses. The application features a user-friendly Streamlit interface, real-time processing capabilities, and maintains conversation context for follow-up questions. Advanced features include multi-document support, citation tracking, and confidence scoring for generated answers.",
      technologies: [
        "Python",
        "Streamlit",
        "Gemini API",
        "RAG",
        "PDF Processing",
        "LLM",
      ],
      icon: MessageSquare,
      gradient: "from-slate-700 to-slate-900",
      liveLink: "https://chatwithpdfs-9fhnjbukrpxayetr2eufey.streamlit.app/",
      githubLink: null,
      featured: true,
      category: "AI/ML",
      duration: "5 weeks",
      keyFeatures: [
        "RAG-based document interaction",
        "Semantic search capabilities",
        "Multi-document support",
        "Real-time response generation",
        "Citation and confidence tracking",
      ],
    },
  ];

  const categories: (ProjectCategory | "All")[] = [
    "All",
    "AI/ML",
    "Deep Learning",
    "Machine Learning",
    "Data Analytics",
  ];
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "All"
  >("All");

  const filteredProjects: Project[] =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects: Project[] = projects.filter(
    (project) => project.featured
  );

  const handleShowDetails = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative solutions in AI, Machine Learning, and Data
            Analytics
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
              }`}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.slice(0, 2).map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              setHoveredProject={setHoveredProject}
              onShowDetails={handleShowDetails}
            />
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setHoveredProject={setHoveredProject}
              onShowDetails={handleShowDetails}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {showModal && selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

// Project Details Modal Component
interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
}) => {
  const IconComponent = project.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[90vh] p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}
              >
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-2">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Duration */}
            {project.duration && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Duration: {project.duration}</span>
              </div>
            )}

            {/* Featured Badge */}
            {project.featured && (
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Featured Project
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Project Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-slate-700">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Globe className="w-5 h-5" />
                <span>View Live Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Project Card Component
const FeaturedProjectCard: React.FC<ProjectCardProps> = ({
  project,
  setHoveredProject,
  onShowDetails,
}) => {
  const IconComponent = project.icon;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Featured Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          Featured
        </div>
      </div>

      <div className="relative p-8">
        {/* Project Icon */}
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}
        >
          <IconComponent className="w-8 h-8" />
        </div>

        {/* Project Info */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <ProjectActionButtons project={project} onShowDetails={onShowDetails} />
      </div>
    </div>
  );
};

// Regular Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  setHoveredProject,
  onShowDetails,
}) => {
  const IconComponent = project.icon;

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {project.featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        </div>
      )}

      <div className="relative p-6">
        {/* Project Icon */}
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
        >
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Project Info */}
        <div className="mb-4">
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-2">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <ProjectActionButtons
          project={project}
          isCompact
          onShowDetails={onShowDetails}
        />
      </div>
    </div>
  );
};

// Action Buttons Component
interface ProjectActionButtonsProps {
  project: Project;
  isCompact?: boolean;
  onShowDetails: (project: Project) => void;
}

const ProjectActionButtons: React.FC<ProjectActionButtonsProps> = ({
  project,
  isCompact = false,
  onShowDetails,
}) => {
  const buttonSize = isCompact ? "px-4 py-2 text-sm" : "px-6 py-3";
  const iconSize = isCompact ? "w-4 h-4" : "w-4 h-4";

  return (
    <div className="flex gap-2">
      {project.liveLink && (
        <Link
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${buttonSize} bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 ${
            !isCompact && "shadow-lg"
          }`}
        >
          <Globe className={iconSize} />
          <span>{isCompact ? "View" : "View Live"}</span>
          {!isCompact && (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          )}
        </Link>
      )}
      {project.githubLink && (
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${buttonSize} bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300`}
        >
          <Github className={iconSize} />
          <span>Code</span>
        </Link>
      )}

      {/* Always show Details button */}
      <button
        onClick={() => onShowDetails(project)}
        className={`flex items-center gap-2 ${buttonSize} ${
          project.liveLink || project.githubLink
            ? "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"
            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
        } rounded-lg font-medium transition-all duration-300`}
      >
        <ExternalLink className={iconSize} />
        <span>{isCompact ? "Details" : "View Details"}</span>
      </button>
    </div>
  );
};

export default ProjectsSection;
