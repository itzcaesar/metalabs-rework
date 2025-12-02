import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FlaskConical, MapPin } from "lucide-react";

export default function ResearchPage() {
  const collaborators = [
    {
      name: "Universiti Teknikal Malaysia Melaka",
      shortName: "UTeM",
      country: "Malaysia",
      logo: "/images/partners/icon-utem.png",
    },
    {
      name: "Multimedia University Malaysia",
      shortName: "MMU",
      country: "Malaysia",
      logo: "/images/partners/icon-mmu.png",
    },
    {
      name: "Management and Science University",
      shortName: "MSU",
      country: "Malaysia",
      logo: "/images/partners/icon-msu.jpg",
    },
    {
      name: "Universiti Malaysia Pahang",
      shortName: "UMP",
      country: "Malaysia",
      logo: "/images/partners/icon-pahang.jpg",
    },
    {
      name: "King Mongkut's Institute of Technology Ladkrabang",
      shortName: "KMITL",
      country: "Thailand",
      logo: "/images/partners/icon-mongkut.png",
    },
    {
      name: "Kyoto University",
      shortName: "Kyoto U",
      country: "Japan",
      logo: "/images/partners/icon-mmu.png",
    },
    {
      name: "RMIT University",
      shortName: "RMIT",
      country: "Australia",
      logo: "/images/partners/icon-rmit.png",
    },
  ];

  const researchAreas = [
    { title: "Adaptive Learning Systems", number: "01" },
    { title: "Immersive Learning Environments", number: "02" },
    { title: "Cross-Cultural Educational Frameworks", number: "03" },
    { title: "Sustainability-Focused Game Scenarios", number: "04" },
    { title: "Game-Based Learning Methodologies", number: "05" },
    { title: "Educational Technology Innovation", number: "06" },
  ];

  return (
    <div className="w-full">
      {/* Hero - Map Style */}
      <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(221,47,55,0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-[70vh] items-center">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <FlaskConical className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Research & Collaboration</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Advancing
                <br />
                <span className="gradient-text">Knowledge</span>
                <br />
                Together
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Collaborating with world-class universities to advance 
                game-based learning and educational technology.
              </p>

              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Partners</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">22+</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
              </div>
            </div>

            {/* Right - Partner Logos Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {collaborators.map((collab) => (
                  <div
                    key={collab.shortName}
                    className="group bg-card border border-border rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center overflow-hidden p-1 flex-shrink-0">
                        <Image
                          src={collab.logo}
                          alt={collab.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm group-hover:text-primary transition-colors leading-tight">
                          {collab.name}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          {collab.country}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas - Timeline Style */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Research Focus <span className="gradient-text">Areas</span>
            </h2>
            <p className="text-muted-foreground">
              Our key areas of exploration and innovation
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-6">
              {researchAreas.map((area, index) => (
                <div
                  key={area.number}
                  className="group relative flex items-center gap-6 md:pl-20"
                >
                  {/* Number Circle */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#DD2F37] to-[#D86F75] flex items-center justify-center text-white font-bold text-lg hidden md:flex">
                    {area.number}
                  </div>
                  
                  <div className="flex-1 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group-hover:translate-x-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-primary/30 md:hidden">
                          {area.number}
                        </span>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {area.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Research <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Through joint research initiatives, Metalabs and its partners explore 
                adaptive learning systems, immersive environments, cross-cultural 
                educational frameworks, and sustainability-focused game scenarios.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By integrating interdisciplinary expertise and cutting-edge technology, 
                we produce innovative tools and methodologies that address global 
                educational challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-card border border-border rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300">
                <div className="text-4xl font-bold mb-2 text-primary group-hover:text-white transition-colors">22+</div>
                <div className="text-muted-foreground group-hover:text-white/80 transition-colors">Research Publications</div>
              </div>
              <div className="group bg-card border border-border rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-white transition-colors">6</div>
                <div className="text-muted-foreground group-hover:text-white/80 transition-colors">Focus Areas</div>
              </div>
              <div className="group bg-card border border-border rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-white transition-colors">4</div>
                <div className="text-muted-foreground group-hover:text-white/80 transition-colors">Continents</div>
              </div>
              <div className="group bg-card border border-border rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#D86F75] hover:to-[#E89A9E] hover:border-transparent transition-all duration-300">
                <div className="text-4xl font-bold mb-2 text-primary group-hover:text-white transition-colors">∞</div>
                <div className="text-muted-foreground group-hover:text-white/80 transition-colors">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in advancing game-based learning research
          </p>
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#DD2F37] to-[#D86F75] text-white rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
