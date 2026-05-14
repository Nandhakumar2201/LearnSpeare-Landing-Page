import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Users, ShieldCheck, Award, Bell, Settings,
  CheckCircle, CheckCircle2, XCircle, ChevronRight, PlayCircle,
  Code, Database, Server, Cloud, MonitorSmartphone, LayoutDashboard,
  Star, Quote, Menu, X,
  GraduationCap, Clock, FileText, BarChart, Layers,
  CheckSquare, Lock, Play, ArrowRight
} from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      category: "Authentication & User Management",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      items: [
        "Unified User Model (Student & Teacher in one account)",
        "JWT Authentication (Secure access & refresh tokens)",
        "3-Step Registration (Mandatory + optional fields)",
        "Teacher Application & Admin Approval",
        "Profile Management (Education, social links, bio)"
      ]
    },
    {
      category: "Course Management",
      icon: <Layers className="w-8 h-8 text-pink-500" />,
      items: [
        "Progressive Course Structure (Levels → Modules → Lessons)",
        "Video Lessons (Cloudinary CDN streaming)",
        "Progress Tracking (Resume from last position)",
        "Enrollment System (One-click enroll, My Learning dashboard)",
        "Course Analytics (Student progress, completion rates)"
      ]
    },
    {
      category: "Assessments",
      icon: <CheckSquare className="w-8 h-8 text-purple-500" />,
      items: [
        "Multi-Layer Assessments (Module → Level → Course)",
        "Auto-Grading (MCQ, True/False, instant results)",
        "Manual Grading (Text answers, assignments)",
        "Progressive Unlocking (Pass to advance)",
        "Time Limits & Attempt Limits"
      ]
    },
    {
      category: "Certifications",
      icon: <Award className="w-8 h-8 text-pink-500" />,
      items: [
        "Automatic Certificate Generation",
        "QR Code for Instant Verification",
        "Public Verification Portal (Anyone can check)",
        "Verification Counter (Tracks how many times verified)",
        "PDF Download & LinkedIn Sharing"
      ]
    },
    {
      category: "Attendance & Engagement",
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      items: [
        "Activity-Based Attendance (Automatic, no check-in)",
        "Once-per-Day Counting (No inflation)",
        "Student Dashboard (Attendance percentage, streak)",
        "Teacher Reports (Per-student attendance data)",
        "Real-Time Notifications (In-app bell + email)"
      ]
    },
    {
      category: "Admin Dashboard",
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      items: [
        "User Management (View, suspend, promote to teacher)",
        "Teacher Application Review (Approve/Reject with reason)",
        "Course Moderation (View all courses, edit/delete)",
        "Category Management (CRUD)",
        "Platform Analytics (User growth, enrollments, popularity)",
        "System Settings (Site name, logo, feature toggles)"
      ]
    }
  ];

  const innovations = [
    { title: "Unified User Model", desc: "Same account can be student AND teacher", icon: <Users /> },
    { title: "Multi-Layer Progressive Assessments", desc: "Ensures genuine mastery at every step", icon: <Layers /> },
    { title: "QR-Verifiable Certificates", desc: "Solves fake certificate problem instantly", icon: <ShieldCheck /> },
    { title: "Activity-Based Attendance", desc: "Rewards consistent learning without manual check-ins", icon: <Clock /> },
    { title: "Teacher Quality Control", desc: "Admin-approved application process ensures quality", icon: <CheckCircle /> },
    { title: "Real-Time Notifications", desc: "Keeps users engaged with their learning journey", icon: <Bell /> },
  ];

  const techStack = [
    { name: "React 18", desc: "Frontend UI Library", icon: <Code className="text-blue-400" /> },
    { name: "Tailwind CSS", desc: "Utility-First Styling", icon: <LayoutDashboard className="text-teal-400" /> },
    { name: "Django 4.2", desc: "Backend Framework", icon: <Server className="text-green-600" /> },
    { name: "PostgreSQL", desc: "Relational Database", icon: <Database className="text-blue-500" /> },
    { name: "Cloudinary", desc: "Media CDN", icon: <Cloud className="text-indigo-400" /> },
    { name: "Render / Vercel", desc: "Cloud Hosting", icon: <MonitorSmartphone className="text-gray-800 dark:text-white" /> },
  ];

  const steps = [
    { title: "Sign Up", desc: "Create your free account in just 2 minutes", icon: "1" },
    { title: "Browse Courses", desc: "Find courses that match your career goals", icon: "2" },
    { title: "Enroll & Learn", desc: "Watch video lessons and track your progress", icon: "3" },
    { title: "Take Assessments", desc: "Pass module quizzes to unlock higher levels", icon: "4" },
    { title: "Complete Course", desc: "Pass the final exam and submit your project", icon: "5" },
    { title: "Get Certificate", desc: "Download your QR-verified digital certificate", icon: "6" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-purple-200">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-2 rounded-lg">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
              LearnSpeare
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a href="#problem" className="text-slate-600 hover:text-purple-600 transition-colors">Problem</a>
            <a href="#solution" className="text-slate-600 hover:text-purple-600 transition-colors">Solution</a>
            <a href="#features" className="text-slate-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#innovation" className="text-slate-600 hover:text-purple-600 transition-colors">Innovation</a>
            <a href="#tech" className="text-slate-600 hover:text-purple-600 transition-colors">Tech Stack</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login" className="text-slate-700 hover:text-purple-700 font-medium px-4 py-2">Log in</Link>
            <Link to="/register" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t">
            <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2 border-b">Problem</a>
            <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2 border-b">Solution</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2 border-b">Features</a>
            <a href="#innovation" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2 border-b">Innovation</a>
            <div className="flex flex-col gap-3 mt-2">
              <Link to="/login" className="text-center font-medium py-2 border rounded-lg border-slate-200">Log in</Link>
              <Link to="/register" className="text-center font-medium py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white">Get Started</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-2 border border-purple-200">
                <Sparkles className="w-4 h-4" />
                <span>Next-Generation LMS Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
                Learn Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Limits</span>,<br />
                Teach Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Borders</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A complete centralized Learning Management System integrating user logins, progressive course enrollment, activity-based attendance, and QR-verifiable certifications into one seamless dashboard.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                  Start Learning for Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-purple-600 rounded-full font-bold text-lg shadow-sm transition-all flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Explore Features
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 mt-8 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-slate-900">10k+</div>
                  <div className="text-sm text-slate-500 font-medium">Active Learners</div>
                </div>
                <div className="text-center lg:text-left border-l border-slate-200 pl-4">
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-500 font-medium">Certificates Issued</div>
                </div>
                <div className="text-center lg:text-left border-l border-slate-200 pl-4">
                  <div className="text-3xl font-bold text-slate-900">200+</div>
                  <div className="text-sm text-slate-500 font-medium">Expert Courses</div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students learning on laptops"
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover border-4 border-white/50 h-[500px]"
              />
              {/* Floating UI Elements */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold">Module Passed!</div>
                  <div className="text-xs text-slate-500">Score: 95%</div>
                </div>
              </div>
              <div className="absolute bottom-10 -right-10 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold">Certificate Earned</div>
                  <div className="text-xs text-slate-500">React Mastery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Problem We're Solving</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              <span className="font-medium italic text-slate-800">"How might we create a centralized LMS that integrates user logins, course enrollment, attendance, assessments, and certifications into a seamless and intuitive dashboard?"</span>
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              Current Issues in Traditional LMS Platforms:
            </h3>
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Separate student/teacher accounts create friction",
                "No clear pathway from learner to instructor",
                "Certificates are easily forged and hard to verify",
                "No structured skill progression (anyone takes any course)",
                "Attendance tracking requires manual, tedious check-ins",
                "Assessments don't ensure genuine mastery of the subject"
              ].map((issue, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section id="solution" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Design */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-pink-900/20 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The LearnSpeare Solution</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We've re-engineered the learning experience from the ground up to solve the core frustrations of modern education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Unified User Model",
                desc: "One single account. Learn new skills, then seamlessly apply to teach others on the same platform.",
                icon: <Users className="w-10 h-10 text-purple-400" />,
                bg: "bg-slate-800"
              },
              {
                title: "Progressive Structure",
                desc: "Courses organized by Levels → Modules → Lessons. True structured learning paths.",
                icon: <Layers className="w-10 h-10 text-blue-400" />,
                bg: "bg-slate-800"
              },
              {
                title: "Multi-Layer Assessments",
                desc: "Pass module quizzes, complete level exams, conquer the final test. Proves real mastery.",
                icon: <CheckSquare className="w-10 h-10 text-emerald-400" />,
                bg: "bg-slate-800"
              },
              {
                title: "QR-Verifiable Certs",
                desc: "Instant, public verification of certificates via QR code. Eliminates forgery completely.",
                icon: <ShieldCheck className="w-10 h-10 text-pink-400" />,
                bg: "bg-slate-800"
              }
            ].map((sol, idx) => (
              <div key={idx} className={`${sol.bg} p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all hover:-translate-y-2 group`}>
                <div className="mb-6 p-4 bg-slate-900/50 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-slate-400 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Feature Suite</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to run a world-class educational platform, built right in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{feature.category}</h3>
                </div>
                <ul className="space-y-4">
                  {feature.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Innovations Section */}
      <section id="innovation" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Innovations</h2>
                <p className="text-lg text-slate-600">
                  We didn't just build another LMS. We rethought the fundamental mechanics of online learning to create a more engaging, trustworthy, and scalable system.
                </p>
              </div>

              <div className="space-y-6">
                {innovations.map((inn, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0">
                      {inn.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{inn.title}</h4>
                      <p className="text-slate-600 mt-1">{inn.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="bg-gradient-to-br from-purple-100 to-pink-50 p-8 md:p-12 rounded-3xl relative">
                {/* Decorative dots */}
                <div className="absolute top-4 right-4 grid grid-cols-4 gap-2 opacity-20">
                  {[...Array(16)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-purple-500"></div>)}
                </div>

                <img
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Innovation in learning"
                  className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-[600px]"
                />

                {/* Overlay Card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      QR
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">Certificate Valid</h5>
                      <p className="text-xs text-slate-500">Verified by LearnSpeare</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full mb-2">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                  <p className="text-xs text-center text-slate-500">Authenticity Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The User Journey</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A clear, step-by-step path from creating an account to earning verifiable credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition-all">
                <div className="text-6xl font-black text-slate-100 absolute top-4 right-6 group-hover:text-purple-50 transition-colors">
                  {step.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Modern Tech</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Built with industry-leading frameworks for performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-slate-700 hover:border-purple-500 hover:bg-slate-750 transition-all">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4 shadow-inner">
                  {React.cloneElement(tech.icon, { className: `w-8 h-8 ${tech.icon.props.className}` })}
                </div>
                <h4 className="font-bold text-sm mb-1">{tech.name}</h4>
                <p className="text-xs text-slate-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Compare</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See why LearnSpeare is the next evolution in learning management systems.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-5 font-bold text-slate-700">Feature</th>
                  <th className="p-5 font-semibold text-slate-600 text-center">Udemy</th>
                  <th className="p-5 font-semibold text-slate-600 text-center">Coursera</th>
                  <th className="p-5 font-semibold text-slate-600 text-center">Skillshare</th>
                  <th className="p-5 font-bold text-purple-700 text-center bg-purple-50 border-l border-purple-100">LearnSpeare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {[
                  { name: "Open to anyone", u: true, c: false, s: true, l: true },
                  { name: "Teacher application", u: false, c: true, s: true, l: true },
                  { name: "Multi-layer assessments", u: false, c: true, s: false, l: true },
                  { name: "QR-verifiable certs", u: false, c: false, s: false, l: true },
                  { name: "Unified user model", u: false, c: false, s: false, l: true },
                  { name: "Activity attendance", u: false, c: false, s: false, l: true },
                  { name: "Teacher tiers/badges", u: false, c: false, s: false, l: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 text-slate-700 font-medium">{row.name}</td>
                    <td className="p-5 text-center">
                      {row.u ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-red-300 mx-auto" />}
                    </td>
                    <td className="p-5 text-center">
                      {row.c ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-red-300 mx-auto" />}
                    </td>
                    <td className="p-5 text-center">
                      {row.s ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-red-300 mx-auto" />}
                    </td>
                    <td className="p-5 text-center bg-purple-50 border-l border-purple-100">
                      {row.l ? <CheckCircle2 className="w-6 h-6 text-purple-600 mx-auto drop-shadow-sm" /> : <X className="w-5 h-5 text-red-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Users Say</h2>
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-4">
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: "Student",
                text: "The progressive unlocking keeps me motivated. I actually have to understand the material before moving on, which means I'm actually learning, not just watching videos.",
                name: "Sarah Jenkins",
                title: "Frontend Developer",
                img: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                role: "Instructor",
                text: "Being able to learn advanced topics and teach beginner courses from the exact same account is brilliant. The platform's attendance tracking saves me hours of administrative work.",
                name: "David Chen",
                title: "Data Science Instructor",
                img: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                role: "Employer",
                text: "We used to spend days verifying applicant certificates. With LearnSpeare's QR verification, I scan a code on my phone and instantly know if a candidate's credentials are legitimate.",
                name: "Elena Rodriguez",
                title: "Technical Recruiter",
                img: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative pt-12">
                <Quote className="absolute top-6 left-8 w-10 h-10 text-purple-100" />
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {testimonial.role}
                </div>
                <p className="text-slate-600 mb-8 relative z-10 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-purple-100" />
                  <div>
                    <h5 className="font-bold text-slate-900">{testimonial.name}</h5>
                    <p className="text-xs text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0"></div>
        {/* Dynamic background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-slate-900 to-pink-900/80 z-0"></div>

        {/* Animated pattern */}
        <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to Start Your Journey?</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto font-light">
            Join thousands of learners and educators on LearnSpeare. Experience the future of structured, verifiable online education today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-white text-purple-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Create Free Account
            </Link>
            <Link to="/demo" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-full font-bold text-lg transition-all">
              View Demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-purple-200">No credit card required. Free basic courses available.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-purple-500" />
                <span className="font-bold text-xl text-white">LearnSpeare</span>
              </div>
              <p className="text-sm mb-4">
                Learn Without Limits, Teach Beyond Borders. The centralized LMS for the modern web.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><TwitterIcon className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Verify Certificate</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Teacher Guide</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} LearnSpeare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// Sparkles icon component since it wasn't imported from lucide-react in the original list
function Sparkles(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function GithubIcon(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
}

function TwitterIcon(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
}

function LinkedinIcon(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
}
