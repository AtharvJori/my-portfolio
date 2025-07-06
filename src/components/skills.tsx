// import React from "react";
// import Image from "next/image";
// import {
//   Code2,
//   Database,
//   Wrench,
//   BarChart3,
//   Brain,
//   Globe,
//   Sparkles,
// } from "lucide-react";

// interface Skill {
//   name: string;
//   logo: string;
//   category: string;
//   level?: string;
// }

// interface CategoryConfig {
//   name: string;
//   icon: React.ReactNode;
//   gradient: string;
//   bgGradient: string;
//   borderColor: string;
// }

// const Skills: React.FC = () => {
//   const categoryConfig: CategoryConfig[] = [
//     {
//       name: "Programming",
//       icon: <Code2 className="w-6 h-6" />,
//       gradient: "from-blue-500 to-cyan-500",
//       bgGradient: "from-blue-50 to-cyan-50",
//       borderColor: "border-blue-200",
//     },
//     {
//       name: "Frontend",
//       icon: <Globe className="w-6 h-6" />,
//       gradient: "from-green-500 to-emerald-500",
//       bgGradient: "from-green-50 to-emerald-50",
//       borderColor: "border-green-200",
//     },
//     {
//       name: "Database",
//       icon: <Database className="w-6 h-6" />,
//       gradient: "from-purple-500 to-pink-500",
//       bgGradient: "from-purple-50 to-pink-50",
//       borderColor: "border-purple-200",
//     },
//     {
//       name: "Tools",
//       icon: <Wrench className="w-6 h-6" />,
//       gradient: "from-orange-500 to-red-500",
//       bgGradient: "from-orange-50 to-red-50",
//       borderColor: "border-orange-200",
//     },
//     {
//       name: "Data Engineering",
//       icon: <BarChart3 className="w-6 h-6" />,
//       gradient: "from-indigo-500 to-blue-600",
//       bgGradient: "from-indigo-50 to-blue-50",
//       borderColor: "border-indigo-200",
//     },
//     {
//       name: "Data Platform",
//       icon: <BarChart3 className="w-6 h-6" />,
//       gradient: "from-cyan-500 to-teal-500",
//       bgGradient: "from-cyan-50 to-teal-50",
//       borderColor: "border-cyan-200",
//     },
//     {
//       name: "AI/ML",
//       icon: <Brain className="w-6 h-6" />,
//       gradient: "from-red-500 to-rose-500",
//       bgGradient: "from-red-50 to-rose-50",
//       borderColor: "border-red-200",
//     },
//   ];

//   const skills: Skill[] = [
//     // Programming Languages & Frameworks
//     {
//       name: "Python",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//       category: "Programming",
//       level: "Expert",
//     },
//     {
//       name: "Next.js",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//       category: "Frontend",
//       level: "Advanced",
//     },
//     {
//       name: "React",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//       category: "Frontend",
//       level: "Expert",
//     },

//     // Databases
//     {
//       name: "MySQL",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//       category: "Database",
//       level: "Advanced",
//     },
//     {
//       name: "MongoDB",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//       category: "Database",
//       level: "Advanced",
//     },

//     // Development Tools
//     {
//       name: "VS Code",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
//       category: "Tools",
//       level: "Expert",
//     },
//     {
//       name: "GitHub",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//       category: "Tools",
//       level: "Advanced",
//     },

//     // API & Data Tools
//     {
//       name: "Postman",
//       logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
//       category: "Tools",
//       level: "Advanced",
//     },
//     {
//       name: "Apache Kafka",
//       logo: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
//       category: "Data Engineering",
//       level: "Intermediate",
//     },
//     {
//       name: "Apache Airflow",
//       logo: "https://www.vectorlogo.zone/logos/apache_airflow/apache_airflow-icon.svg",
//       category: "Data Engineering",
//       level: "Advanced",
//     },
//     {
//       name: "Snowflake",
//       logo: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg",
//       category: "Data Platform",
//       level: "Advanced",
//     },
//     {
//       name: "Apache Spark",
//       logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg",
//       category: "Data Engineering",
//       level: "Intermediate",
//     },

//     // AI & ML
//     {
//       name: "TensorFlow",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
//       category: "AI/ML",
//       level: "Advanced",
//     },
//     {
//       name: "PyTorch",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
//       category: "AI/ML",
//       level: "Advanced",
//     },
//     {
//       name: "Hugging Face",
//       logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
//       category: "AI/ML",
//       level: "Advanced",
//     },
//     {
//       name: "CrewAI",
//       logo: "https://raw.githubusercontent.com/joaomdmoura/crewAI/main/docs/crewai_logo.png",
//       category: "AI/ML",
//       level: "Intermediate",
//     },
//   ];

//   const categories = Array.from(new Set(skills.map((skill) => skill.category)));

//   return (
//     <section className="relative py-20 px-4 w-full overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-60"></div>
//       <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
//             <Sparkles className="w-5 h-5 text-blue-600" />
//             <span className="text-sm font-medium text-blue-800">
//               Technical Expertise
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
//             Skills & Technologies
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             A comprehensive toolkit spanning full-stack development, data
//             engineering, and cutting-edge AI/ML technologies
//           </p>
//         </div>

//         {/* Featured Skills Showcase */}
//         <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl">
//           <div className="text-center mb-10">
//             <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               The technologies I work with most frequently
//             </h3>
//           </div>

//           <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
//             {skills.map((skill, index) => (
//               <div
//                 key={`featured-${index}`}
//                 className="group/featured relative flex flex-col items-center p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
//               >
//                 {/* Skill Level Badge - Always visible on hover */}
//                 {skill.level && (
//                   <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg opacity-0 group-hover/featured:opacity-100 transition-all duration-300 transform scale-75 group-hover/featured:scale-100 z-10">
//                     {skill.level}
//                   </div>
//                 )}
//                 <div className="relative w-10 h-10 md:w-12 md:h-12">
//                   <Image
//                     src={skill.logo}
//                     alt={`${skill.name} logo`}
//                     fill
//                     className="object-contain filter brightness-0 invert group-hover/featured:brightness-100 group-hover/featured:invert-0 transition-all duration-300"
//                     sizes="(max-width: 768px) 40px, 48px"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import Image from "next/image";
import {
  Code2,
  Database,
  Wrench,
  BarChart3,
  Brain,
  Globe,
  Sparkles,
} from "lucide-react";

interface Skill {
  name: string;
  logo: string;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Programming Languages & Frameworks
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Programming",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },

    // Databases
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database",
    },

    // Development Tools
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "Tools",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      category: "Tools",
    },

    // API & Data Tools
    {
      name: "Postman",
      logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      category: "Tools",
    },
    // {
    //   name: "Apache Kafka",
    //   logo: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
    //   category: "Data Engineering",
    // },
    // {
    //   name: "Apache Airflow",
    //   logo: "https://www.vectorlogo.zone/logos/apache_airflow/apache_airflow-icon.svg",
    //   category: "Data Engineering",
    // },
    // {
    //   name: "Snowflake",
    //   logo: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg",
    //   category: "Data Platform",
    // },
    // {
    //   name: "Apache Spark",
    //   logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg",
    //   category: "Data Engineering",
    // },

    // AI & ML
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      category: "AI/ML",
    },
    {
      name: "PyTorch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      category: "AI/ML",
    },
    {
      name: "Hugging Face",
      logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      category: "AI/ML",
    },
    // {
    //   name: "CrewAI",
    //   logo: "https://raw.githubusercontent.com/joaomdmoura/crewAI/main/docs/crewai_logo.png",
    //   category: "AI/ML",
    // },
  ];

  return (
    <section className="relative py-20 px-4 w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-60"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning full-stack development, data
            engineering, and cutting-edge AI/ML technologies
          </p>
        </div>

        {/* Featured Skills Showcase */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The technologies I work with most frequently
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={`featured-${index}`}
                className="group relative flex flex-col items-center p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {skill.name}
                </div>
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 40px, 48px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
