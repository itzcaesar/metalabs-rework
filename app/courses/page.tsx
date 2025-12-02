import Link from "next/link";
import { ArrowRight, GraduationCap, Globe, BookOpen, Users, Award, Sparkles } from "lucide-react";

export default function CoursesPage() {
  const institutions = [
    {
      name: "King Mongkut's University of Technology Thonburi (KMUTT)",
      country: "Thailand",
      flag: "🇹🇭",
    },
    {
      name: "Management & Science University (MSU)",
      country: "Malaysia",
      flag: "🇲🇾",
    },
    {
      name: "Universiti Kuala Lumpur (UniKL)",
      country: "Malaysia",
      flag: "🇲🇾",
    },
    {
      name: "Indonesian Cyber Education (ICE) Institute",
      country: "Indonesia",
      flag: "🇮🇩",
    },
    {
      name: "Vocational School Graduate Academy (VSGA)",
      country: "Indonesia",
      flag: "🇮🇩",
    },
  ];

  const courseTopics = [
    { name: "Interactive Multimedia", icon: Sparkles },
    { name: "Game Development", icon: BookOpen },
    { name: "Game Design", icon: Award },
    { name: "Monetization Strategies", icon: Users },
    { name: "Unity Development", icon: GraduationCap },
    { name: "Unreal Engine", icon: Globe },
    { name: "AR/VR Development", icon: Sparkles },
    { name: "Educational Technology", icon: BookOpen },
  ];

  const stats = [
    { label: "Partner Institutions", value: "5+" },
    { label: "Countries Reached", value: "4" },
    { label: "Course Topics", value: "8+" },
    { label: "Students Trained", value: "500+" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(221,47,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(216,111,117,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Learn From The Best</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Courses</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Metalabs has conducted various training programs in interactive multimedia and game development at both national and international levels.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Global Network</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Partner <span className="gradient-text">Institutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading universities across Southeast Asia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((institution, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{institution.flag}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {institution.name}
                </h3>
                <p className="text-sm text-muted-foreground">{institution.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Topics - Bento Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">What We Teach</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold">
              Course <span className="gradient-text">Topics</span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[140px]">
            {/* Large card */}
            <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#DD2F37] to-[#B86A6E] p-8 flex flex-col justify-end cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-6 right-6">
                <GraduationCap className="w-16 h-16 text-white/20" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Interactive Multimedia
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Master the art of creating engaging digital experiences
                </p>
              </div>
            </div>

            {courseTopics.slice(1, 5).map((topic, index) => {
              const Icon = topic.icon;
              const isGradient = index === 2;
              return (
                <div
                  key={topic.name}
                  className={`group relative rounded-3xl overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isGradient
                      ? "bg-gradient-to-br from-[#D86F75] to-[#E89A9E] hover:scale-[1.02]"
                      : "bg-card border border-border hover:border-primary/50 hover:shadow-xl"
                  }`}
                >
                  <Icon className={`w-8 h-8 ${isGradient ? "text-white/80" : "text-primary"}`} />
                  <h3 className={`text-lg font-bold ${isGradient ? "text-white" : "group-hover:text-primary transition-colors"}`}>
                    {topic.name}
                  </h3>
                </div>
              );
            })}

            {courseTopics.slice(5).map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.name}
                  className="group relative rounded-3xl overflow-hidden bg-card border border-border p-6 flex flex-col justify-between cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary" />
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {topic.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DD2F37] via-[#D86F75] to-[#B86A6E] p-12 sm:p-16 text-white text-center">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join our training programs and learn from industry experts
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#DD2F37] rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
