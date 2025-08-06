import React, { useEffect } from "react";
import {
  GraduationCap,
  Download,
  Phone,
  Mail,
  Globe,
  Code2,
  Settings2,
  Languages,
  Award,
  User2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="Resume"
      className="w-full min-h-screen px-4 md:px-10 py-16 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-[5%]">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="fade-up"
          >
            Resume
          </h2>
        </div>

        {/* Download Button */}
        <div
          className="flex justify-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
  href="https://drive.google.com/uc?export=download&id=1gbco3-jPuO-NBlw7tcTPJ-PNxRci74Tj"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-flex items-center gap-3 px-6 py-3 text-white rounded-xl font-semibold bg-gradient-to-r from-[#f59e0b] via-[#ef4444] to-[#8b5cf6] shadow-lg hover:shadow-orange-500/50 transition-all duration-300 group overflow-hidden"
>
  <span className="absolute inset-0 bg-white opacity-10 rounded-xl blur-md scale-150 group-hover:animate-pulse"></span>
  <Download className="w-5 h-5 animate-bounce-slow group-hover:scale-110 transition-transform duration-300 text-white" />
  <span className="z-10">Download Resume (PDF)</span>
</a>



        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Panel */}
          <div className="w-full space-y-6" data-aos="fade-right">
            {/* Profile Image */}
            <div className="rounded-full w-60 h-60 mx-auto shadow-lg border-4 border-white/20 overflow-hidden group">
              <img
                src="/Profile2.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 rounded-full group-hover:rotate"
                loading="lazy"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-gray-100/10 backdrop-blur-sm hover:bg-gray-100/20 transition-all p-4 rounded-2xl shadow-md border border-white/10 space-y-3">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <User2 className="w-5 h-5 text-blue-400" /> Contact
              </h3>
              <div className="text-gray-100 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400" /> sagarsantu0143@gmail.com
              </div>
              <div className="text-gray-100 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" /> +91-9535126481
              </div>
              <div className="text-gray-100 text-sm flex items-center gap-2">
                <Globe className="w-4 h-4 text-yellow-400" /> www.yourportfolio.com
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-100/10 backdrop-blur-sm hover:bg-gray-100/20 transition-all p-4 rounded-2xl shadow-md border border-white/10">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-purple-400" /> Languages
              </h3>
              <ul className="list-disc ml-5 text-gray-100 text-sm space-y-1">
                <li>English – Professional</li>
                <li>Kannada – Native</li>
                <li>Hindi – Intermediate</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-gray-100/10 backdrop-blur-sm hover:bg-gray-100/20 transition-all p-4 rounded-2xl shadow-md border border-white/10">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-yellow-400" /> Technical Skills
              </h3>
              <ul className="list-disc ml-5 text-gray-100 text-sm space-y-1 mt-2">
                <li>JavaScript, HTML, Java</li>
                <li>React, Tailwind CSS</li>
                <li>Node.js, Express.js</li>
                <li>MongoDB, SQL</li>
                <li>Git & GitHub</li>
                <li>Netlify, Vercel</li>
              </ul>
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:col-span-2 space-y-8" data-aos="fade-left">
            {/* Career Objective */}
            <div className="bg-gray-100/10 backdrop-blur-sm hover:bg-gray-100/20 transition-all p-6 rounded-2xl shadow-md border border-white/10">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Career Objective
              </h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                A passionate Information Science engineering student with expertise
                in full-stack development, building responsive, user-friendly web
                applications, and data analysis. Committed to leveraging technical
                skills and creative problem-solving abilities to contribute to
                innovative projects and gain valuable industry experience.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-100/10 backdrop-blur-sm hover:bg-gray-100/20 transition-all p-6 rounded-2xl shadow-md border border-white/10">
              <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
                <GraduationCap className="w-6 h-6 text-green-400" /> Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    B.Tech from Presidency University
                  </h4>
                  <span className="text-sm text-gray-300">2021 – 2025</span>
                  <p className="text-sm mt-1 text-gray-100">
                    Information Science and Engineering. <br />
                    CGPA: 7.33
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-gray-100/10 backdrop-blur-sm hover:bg-gray-100/20 transition-all p-6 rounded-2xl shadow-md border border-white/10">
              <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
                <Code2 className="w-6 h-6 text-indigo-400" /> Projects
              </h3>
              <ul className="list-disc ml-5 text-gray-100 text-sm space-y-2">
                <li>
                  <strong className="text-white">IMA Market for Women Empowerment:</strong> Full-stack
                  e-commerce platform supporting Manipuri women entrepreneurs.
                </li>
                <li>
                  <strong className="text-white">Namami Gange AI Saarthi:</strong> AI chatbot with
                  Chacha Chaudhary interface for river awareness.
                </li>
                <li>
                  <strong className="text-white">Airline Reservation System:</strong> Flight booking
                  interface using MySQL and Java.
                </li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="bg-gray-100/10 backdrop-blur-sm hover:bg-gray-100/20 transition-all p-6 rounded-2xl shadow-md border border-white/10">
              <h3 className="text-2xl font-semibold flex items-center gap-2 mb-2 text-white">
                <Award className="w-6 h-6 text-orange-400" /> Achievements
              </h3>
              <ul className="list-disc ml-5 text-gray-100 text-sm space-y-1">
                <li>
                  IMA Market Project selected and funded by KSCST (Karnataka State
                  Council of Science and Technology)
                </li>
                <li>Member at DSA (Art Designer) in Presidency University</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
