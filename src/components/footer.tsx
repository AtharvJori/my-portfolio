"use client";

import Link from "next/link";
import { Github, Linkedin, Code2, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/atharv-jori-56b84a25a/",
      color: "hover:text-blue-600 hover:bg-blue-50",
      bgColor: "hover:shadow-blue-200",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/AtharvJori",
      color: "hover:text-gray-900 hover:bg-gray-100",
      bgColor: "hover:shadow-gray-200",
    },
    {
      name: "LeetCode",
      icon: Code2,
      href: "https://leetcode.com/u/AtharvJori/",
      color: "hover:text-orange-600 hover:bg-orange-50",
      bgColor: "hover:shadow-orange-200",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/atharv_jori?igsh=MTgwZmIxY2g1YXFucw==",
      color: "hover:text-pink-600 hover:bg-pink-50",
      bgColor: "hover:shadow-pink-200",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left Side - Name/Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">AJ</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AtharvJori
                </h3>
                <p className="text-gray-300 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Passionate about creating innovative solutions and bringing ideas
              to life through code.
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-6 text-gray-200">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:scale-110 ${social.color} ${social.bgColor} hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6 transition-all duration-300" />

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link
                href="#about"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()} AtharvJori.</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
