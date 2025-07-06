"use client";

import { useState, useEffect } from "react";
import {
  Code,
  Brain,
  Database,
  ChevronRight,
  Terminal,
  LucideIcon,
} from "lucide-react";

interface Skill {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const About = () => {
  const [currentLine, setCurrentLine] = useState<number>(0);

  const codeLines: string[] = [
    "const profile = {",
    '  "name": "Atharv Jori",',
    '  "age": 21,',
    '  "role": ["AI/ML Engineer",',
    '          "Data Engineer"],',
    '  "passion": "Building Intelligence",',
    '  "location": "India",',
    '  "status": "Available for hire"',
    "}",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [codeLines.length]);

  const skills: Skill[] = [
    {
      icon: Brain,
      title: "AI/ML Engineering",
      desc: "Deep Learning, Neural Networks, Computer Vision",
    },
    {
      icon: Database,
      title: "Data Engineering",
      desc: "ETL Pipelines, Big Data, Data Architecture",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      desc: "React, Next.js, Python, Node.js",
    },
  ];

  const renderCodeLine = (line: string, index: number): React.ReactElement => {
    const lineNumber = String(index + 1).padStart(2, "0");
    const isCurrentLine = index === currentLine;

    return (
      <div
        key={index}
        className={`mb-2 transition-all duration-500 ${
          isCurrentLine
            ? "bg-blue-500/10 border-l-4 border-blue-500 pl-4 transform scale-105"
            : "pl-2"
        }`}
      >
        <span className="text-slate-500 mr-4 select-none">{lineNumber}</span>
        <span className="text-orange-400">
          {renderSyntaxHighlighting(line)}
        </span>
      </div>
    );
  };

  const renderSyntaxHighlighting = (line: string): React.ReactElement => {
    if (line.includes("const")) {
      return (
        <>
          <span className="text-purple-400">const </span>
          <span className="text-blue-400">profile</span>
          <span className="text-white"> = </span>
          <span className="text-yellow-400">{"{"}</span>
        </>
      );
    }

    if (line.includes('"name"')) {
      return (
        <>
          <span className="text-green-400">"name"</span>
          <span className="text-white">: </span>
          <span className="text-yellow-300">"Atharv Jori"</span>
          <span className="text-white">,</span>
        </>
      );
    }

    if (line.includes('"age"')) {
      return (
        <>
          <span className="text-green-400">"age"</span>
          <span className="text-white">: </span>
          <span className="text-blue-300">21</span>
          <span className="text-white">,</span>
        </>
      );
    }

    if (line.includes('"role"')) {
      return (
        <>
          <span className="text-green-400">"role"</span>
          <span className="text-white">: </span>
          <span className="text-yellow-400">[</span>
          <span className="text-yellow-300">"AI/ML Engineer"</span>
          <span className="text-white">,</span>
        </>
      );
    }

    if (line.includes('"Data Engineer"')) {
      return (
        <>
          <span className="text-yellow-300">"Data Engineer"</span>
          <span className="text-yellow-400">]</span>
          <span className="text-white">,</span>
        </>
      );
    }

    if (line.includes('"passion"')) {
      return (
        <>
          <span className="text-green-400">"passion"</span>
          <span className="text-white">: </span>
          <span className="text-yellow-300">"Building Intelligence"</span>
          <span className="text-white">,</span>
        </>
      );
    }

    if (line.includes('"location"')) {
      return (
        <>
          <span className="text-green-400">"location"</span>
          <span className="text-white">: </span>
          <span className="text-yellow-300">"India"</span>
          <span className="text-white">,</span>
        </>
      );
    }

    if (line.includes('"status"')) {
      return (
        <>
          <span className="text-green-400">"status"</span>
          <span className="text-white">: </span>
          <span className="text-yellow-300">"Available for hire"</span>
        </>
      );
    }

    if (line.includes("}")) {
      return <span className="text-yellow-400">{"}"}</span>;
    }

    return <span>{line}</span>;
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Atharv
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming data into intelligent solutions through AI/ML and
            robust data engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm a passionate{" "}
                <span className="font-semibold text-blue-600">
                  AI/ML Engineer
                </span>{" "}
                and{" "}
                <span className="font-semibold text-purple-600">
                  Data Engineer
                </span>{" "}
                dedicated to building intelligent systems that solve real-world
                problems. With experience in data pipelines and machine learning
                models, I strive to harness data to drive innovation and make a
                meaningful impact.
              </p>

              {/* <p className="text-lg leading-relaxed">
                My journey spans from designing robust data pipelines to
                implementing cutting-edge machine learning models. I believe in
                the power of data to drive innovation and create meaningful
                impact in people's lives.
              </p> */}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-1 gap-6">
              {skills.map((skill: Skill, index: number) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {skill.title}
                        </h3>
                        <p className="text-gray-600">{skill.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Let's Collaborate
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Side - Code Display */}
          <div className="relative">
            {/* Code Editor Window */}
            <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
              {/* Window Header */}
              <div className="bg-slate-800 px-6 py-4 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-slate-400 text-sm font-mono">
                  profile.js
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                {codeLines.map((line: string, index: number) =>
                  renderCodeLine(line, index)
                )}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-10 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
