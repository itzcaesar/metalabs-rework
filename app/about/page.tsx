import Link from "next/link";
import { ArrowRight, Users, GraduationCap, Lightbulb, DollarSign, Target, Heart, Sparkles, Building } from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Equipping researchers and students with the knowledge and tools needed to explore new frontiers in multimedia technology.",
      color: "from-[#DD2F37] to-[#B86A6E]",
    },
    {
      icon: Lightbulb,
      title: "Incubation",
      description: "Nurturing innovation and fostering a collaborative environment to refine ideas into real-world applications.",
      color: "from-[#D86F75] to-[#E89A9E]",
    },
    {
      icon: DollarSign,
      title: "Monetization",
      description: "Ensuring that research results create measurable value, aligning academic efforts with economic and societal impact.",
      color: "from-[#B86A6E] to-[#DD2F37]",
    },
  ];

  const focusAreas = [
    { name: "Education Technology", icon: GraduationCap },
    { name: "Safety & Security", icon: Target },
    { name: "Environmental Sustainability", icon: Heart },
    { name: "Interactive Multimedia", icon: Sparkles },
    { name: "Game-Based Learning", icon: Lightbulb },
    { name: "Community Service", icon: Users },
  ];

  const stats = [
    { label: "Years Active", value: "5+" },
    { label: "Team Members", value: "60+" },
    { label: "Research Projects", value: "22+" },
    { label: "Products Created", value: "10+" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(221,47,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(216,111,117,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Interactive Multimedia For Everything</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            About <span className="gradient-text">Metalabs</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Welcome to Metalabs, the Multimedia Engineering Research Laboratory at Telkom University. 
            We specialize in driving innovation in game-based learning, educational technology, and immersive experiences.
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

      {/* Core Values */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">What Drives Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${value.color} p-8 text-white cursor-pointer hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="absolute top-6 right-6">
                    <Icon className="w-12 h-12 text-white/20" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end min-h-[200px]">
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-white/80 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative rounded-3xl overflow-hidden bg-card border border-border p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#DD2F37] to-[#D86F75] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To innovate and inspire through interactive multimedia research, supporting research and 
                community service programs that contribute to impactful knowledge development and dissemination.
              </p>
            </div>

            {/* Vision */}
            <div className="group relative rounded-3xl overflow-hidden bg-card border border-border p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D86F75] to-[#B86A6E] flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading research laboratory that transforms creativity into value while enhancing 
                the lives of students, researchers, and the wider community through cutting-edge interactive 
                multimedia solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Bento Grid */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">What We Focus On</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold">
              Focus <span className="gradient-text">Areas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              const isLarge = index === 0;
              return (
                <div
                  key={area.name}
                  className={`group relative rounded-3xl overflow-hidden p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                    isLarge
                      ? "md:col-span-2 bg-gradient-to-br from-[#DD2F37] to-[#B86A6E] hover:scale-[1.01]"
                      : "bg-card border border-border hover:border-primary/50 hover:shadow-xl"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    isLarge ? "bg-white/20" : "bg-primary/10"
                  }`}>
                    <Icon className={`w-7 h-7 ${isLarge ? "text-white" : "text-primary"}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${isLarge ? "text-white" : "group-hover:text-primary transition-colors"}`}>
                    {area.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Telkom University */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Building className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Home</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            About <span className="gradient-text">Telkom University</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Metalabs is a research laboratory at Telkom University, one of Indonesia's leading private universities. 
            As a driving force behind the university's research and community service initiatives, Metalabs actively 
            collaborates with industries, institutions, and communities to address challenges and deliver meaningful solutions.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DD2F37] via-[#D86F75] to-[#B86A6E] p-12 sm:p-16 text-white text-center">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                Want to Join Our Team?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                We're always looking for passionate individuals to join our research lab
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/courses"
                  className="px-8 py-4 bg-white text-[#DD2F37] rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
                >
                  Explore Courses
                </Link>
                <Link 
                  href="/research"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all transform hover:scale-105"
                >
                  View Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
