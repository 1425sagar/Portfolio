import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Memoized Components ---
const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-[#000000b3] border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="relative bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-100 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
          JAVA
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="relative bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
          Full Stack Developer
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/10 text-gray-200 text-sm font-medium shadow-md shadow-indigo-400/20 hover:shadow-indigo-400/50 hover:scale-105 transition-all duration-300 ease-in-out">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="relative h-11 bg-white/10 rounded-lg overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-indigo-500/20 to-purple-600/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="text-gray-200 font-medium z-10">{text}</span>
          <Icon
            className={`w-4 h-4 text-gray-200 ${
              text === "Contact" ? "group-hover:translate-x-1" : "group-hover:rotate-45"
            } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="relative rounded-xl bg-white/10 p-2 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(93,234,255,0.7)] group-hover:scale-105">
        <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
      </div>
    </button>
  </a>
));

// --- Typing Config ---
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 1000;
const WORDS = [
  "Information Science and Engineering Student",
  "Tech Enthusiast",
];
const TECH_STACK = ["HTML", "CSS", "JavaScript", "Java", "MongoDB"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/1425sagar" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/sagargukkali46/" },
  { icon: Instagram, link: "https://www.instagram.com/_sagar_vasishta_/?next=%2F&hl=en" },
];

// --- Main Component ---
const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
    return () => AOS.refresh();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  useEffect(() => {
    console.log("Home mounted");
    const blurredDivs = document.querySelectorAll('[class*="backdrop-blur"]');
    blurredDivs.forEach(div => {
      console.log("Blurred element:", div);
      div.style.backdropFilter = 'none';
      div.style.webkitBackdropFilter = 'none';
      div.style.background = 'transparent';
    });
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div className="w-full min-h-screen bg-transparent" id="Home">
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center lg:items-start justify-start pt-[8vh] min-h-screen text-center lg:text-left gap-8 lg:gap-10 px-4">
            <div className="w-full max-w-3xl space-y-6" data-aos="fade-up">
              <StatusBadge />
              <MainTitle />
              <div className="h-8 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800">
                <span className="text-xl md:text-2xl text-gray-300 font-light">{text}</span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-indigo-500 to-purple-500 ml-1 animate-blink"></span>
              </div>
              <p
                className="text-base md:text-lg text-white/90 leading-relaxed font-light max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                I build robust, scalable, and user-friendly web applications. From intuitive interfaces to solid back-end architecture, I transform ideas into seamless digital solutions.
              </p>
              <div className="flex flex-wrap justify-start gap-3" data-aos="fade-up" data-aos-delay="1200">
                {TECH_STACK.map((tech, i) => <TechStack key={i} tech={tech} />)}
              </div>
              <div className="flex justify-start gap-3" data-aos="fade-up" data-aos-delay="1400">
                <CTAButton href="#Portfolio" text="Projects" icon={ExternalLink} />
                <CTAButton href="#Contact" text="Contact" icon={Mail} />
              </div>
              <div className="flex justify-start gap-4" data-aos="fade-up" data-aos-delay="1600">
                {SOCIAL_LINKS.map((s, i) => <SocialLink key={i} {...s} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
