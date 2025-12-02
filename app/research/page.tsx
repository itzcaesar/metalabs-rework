import Link from "next/link";
import { ArrowRight, FlaskConical, Globe, Users, BookOpen, Lightbulb, Target } from "lucide-react";

export default function ResearchPage() {
  const collaborators = [
    {
      name: "Universiti Teknikal Malaysia Melaka (UTeM)",
      country: "Malaysia",
      flag: "🇲🇾",
    },
    { 
      name: "Multimedia University Malaysia (MMU)", 
      country: "Malaysia",
      flag: "🇲🇾",
    },
    {
      name: "Management and Science University (MSU)",
      country: "Malaysia",
      flag: "🇲🇾",
    },
    { 
      name: "Universiti Malaysia Pahang (UMP)", 
      country: "Malaysia",
      flag: "🇲🇾",
    },
    {
      name: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
      country: "Thailand",
      flag: "🇹🇭",
    },
    { 
      name: "Kyoto University", 
      country: "Japan",
      flag: "🇯🇵",
    },
    { 
      name: "RMIT University", 
      country: "Australia",
      flag: "🇦🇺",
    },
  ];

  const researchAreas = [
    { name: "Adaptive Learning Systems", icon: Lightbulb },
    { name: "Immersive Learning Environments", icon: Globe },
    { name: "Cross-Cultural Educational Frameworks", icon: Users },
    { name: "Sustainability-Focused Game Scenarios", icon: Target },
    { name: "Game-Based Learning Methodologies", icon: BookOpen },
    { name: "Educational Technology Innovation", icon: FlaskConical },
    { name: "Interactive Multimedia Applications", icon: Lightbulb },
    { name: "Virtual Reality in Education", icon: Globe },
  ];

  const stats = [
    { label: "Research Partners", value: "7+" },
    { label: "Countries", value: "5" },
    { label: "Research Areas", value: "8+" },
    { label: "Publications", value: "22+" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(221,47,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(216,111,117,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <FlaskConical className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Advancing Knowledge Together</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Research</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Metalabs collaborates extensively with both national and international universities to advance research in game-based learning and educational technology.
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

      {/* International Collaborators */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Global Collaboration</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              International <span className="gradient-text">Collaborators</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partnering with world-class institutions across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{collaborator.flag}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {collaborator.name}
                </h3>
                <p className="text-sm text-muted-foreground">{collaborator.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Areas - Bento Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">What We Study</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold">
              Research Focus <span className="gradient-text">Areas</span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[140px]">
            {/* Large card */}
            <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#DD2F37] to-[#B86A6E] p-8 flex flex-col justify-end cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-6 right-6">
                <FlaskConical className="w-16 h-16 text-white/20" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Game-Based Learning
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Revolutionizing education through interactive gameplay and gamification
                </p>
              </div>
            </div>

            {researchAreas.slice(0, 4).map((area, index) => {
              const Icon = area.icon;
              const isGradient = index === 1;
              return (
                <div
                  key={area.name}
                  className={`group relative rounded-3xl overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isGradient
                      ? "bg-gradient-to-br from-[#D86F75] to-[#E89A9E] hover:scale-[1.02]"
                      : "bg-card border border-border hover:border-primary/50 hover:shadow-xl"
                  }`}
                >
                  <Icon className={`w-8 h-8 ${isGradient ? "text-white/80" : "text-primary"}`} />
                  <h3 className={`text-sm font-bold ${isGradient ? "text-white" : "group-hover:text-primary transition-colors"}`}>
                    {area.name}
                  </h3>
                </div>
              );
            })}

            {researchAreas.slice(5).map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.name}
                  className="group relative rounded-3xl overflow-hidden bg-card border border-border p-6 flex flex-col justify-between cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary" />
                  <h3 className="text-sm font-bold group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Making a Difference</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Research <span className="gradient-text">Impact</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Through joint research initiatives, Metalabs and its partners explore a wide array of topics, 
            from adaptive learning systems and immersive environments to cross-cultural educational 
            frameworks and sustainability-focused game scenarios.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            By integrating interdisciplinary expertise and cutting-edge technology, this collective effort 
            produces innovative tools, methodologies, and content that address global educational challenges, 
            ensuring both academic excellence and practical impact.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DD2F37] via-[#D86F75] to-[#B86A6E] p-12 sm:p-16 text-white text-center">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                Interested in Collaboration?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join us in advancing game-based learning research
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#DD2F37] rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
