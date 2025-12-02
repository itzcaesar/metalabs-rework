import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, ExternalLink, BookOpen } from "lucide-react";

export default function CoursesPage() {
  const institutions = [
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
  ];

  const freeEducationMaterials = [
    {
      name: "University Kuala Lumpur (UniKL)",
      logo: "/images/partners/icon-utem.png",
      link: "https://docs.google.com/presentation/d/1spH914S6D4uaamLpZeBgMCHplg_F0VDi/edit#slide=id.p1",
    },
    {
      name: "Coimbatore Institute Of Technology",
      logo: "/images/partners/icon-mmu.png",
      link: "https://docs.google.com/presentation/d/1XLmbg2bxx97WTIuJ8p4JxFPku2sJcD51/edit#slide=id.g324e100ea72_0_0",
    },
    {
      name: "Management & Science University (MSU)",
      logo: "/images/partners/icon-msu.jpg",
      link: "https://docs.google.com/presentation/d/1hatOl1UmNKBLOeFfgD4SZakNZgMrz_UK/edit#slide=id.p1",
    },
    {
      name: "Multimedia Engineering Technology Research Laboratory (Metalabs)",
      logo: "/images/Metalabs-1.jpg",
      link: "https://docs.google.com/presentation/d/1GbB5OgTs9Bp22cDPl7q1k1SYgomDfaoi/edit#slide=id.p1",
    },
    {
      name: "King Mongkut's Institute Of Technology Ladkrabang",
      logo: "/images/partners/icon-mongkut.png",
      link: "https://docs.google.com/presentation/d/1DWCpI1LS1kIrldAo9S_p0uCOvL_Es6U6/edit?slide=id.g32ac0ac223e_0_1#slide=id.g32ac0ac223e_0_1",
    },
    {
      name: "Multimedia Engineering Technology Research Laboratory (Metalabs) - Telkom University",
      logo: "/images/Metalabs-2.jpg",
      link: "https://docs.google.com/presentation/d/1WDkekY96nlmurTomYx_CUMouWXf_c_Hv/edit#slide=id.p1",
    },
  ];

  const courseTopics = [
    "Interactive Multimedia",
    "Game Development",
    "Game Design",
    "Monetization Strategies",
    "Unity Development",
    "Unreal Engine",
    "AR/VR Development",
    "Educational Technology",
  ];

  return (
    <div className="w-full">
      {/* Hero - Split Layout */}
      <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(221,47,55,0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Training Programs</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Learn From
                <br />
                <span className="gradient-text">The Best</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Metalabs has conducted various training programs in interactive 
                multimedia and game development at both national and international levels.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {courseTopics.slice(0, 4).map((topic) => (
                  <span 
                    key={topic}
                    className="px-4 py-2 rounded-full bg-muted text-sm font-medium"
                  >
                    {topic}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  +{courseTopics.length - 4} more
                </span>
              </div>

              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right - Stats Cards Stack */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="group bg-card border border-border rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300">
                    <div className="text-5xl font-bold mb-2 text-primary group-hover:text-white transition-colors">5+</div>
                    <div className="text-muted-foreground group-hover:text-white/80 transition-colors">Partner Institutions</div>
                  </div>
                  <div className="group bg-card border border-border rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300">
                    <div className="text-5xl font-bold text-primary mb-2 group-hover:text-white transition-colors">8+</div>
                    <div className="text-muted-foreground group-hover:text-white/80 transition-colors">Course Topics</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="group bg-card border border-border rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300">
                    <div className="text-5xl font-bold text-primary mb-2 group-hover:text-white transition-colors">4</div>
                    <div className="text-muted-foreground group-hover:text-white/80 transition-colors">Countries</div>
                  </div>
                  <div className="group bg-card border border-border rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#D86F75] hover:to-[#E89A9E] hover:border-transparent transition-all duration-300">
                    <div className="text-5xl font-bold mb-2 text-primary group-hover:text-white transition-colors">500+</div>
                    <div className="text-muted-foreground group-hover:text-white/80 transition-colors">Students Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Education Materials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Free Resources</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Free <span className="gradient-text">Education Materials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access our collection of free learning resources and course materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeEducationMaterials.map((material, index) => (
              <Link
                key={index}
                href={material.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Logo */}
                <div className="h-48 bg-muted flex items-center justify-center p-8">
                  <Image
                    src={material.logo}
                    alt={material.name}
                    width={160}
                    height={160}
                    className="object-contain max-h-32 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors leading-tight">
                    {material.name}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>View Course</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities - Horizontal Scroll */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Partner <span className="gradient-text">Institutions</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We collaborate with leading universities across Southeast Asia and beyond
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {institutions.map((inst) => (
              <div
                key={inst.shortName}
                className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center overflow-hidden p-2">
                  <Image
                    src={inst.logo}
                    alt={inst.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors leading-tight">
                  {inst.name}
                </h3>
                <p className="text-sm text-muted-foreground">{inst.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Topics - List Layout */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What We <span className="gradient-text">Teach</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Comprehensive training in modern game development and multimedia
          </p>

          <div className="space-y-4">
            {courseTopics.map((topic, index) => (
              <div
                key={topic}
                className="group flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {topic}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us to learn more about our training programs
          </p>
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#DD2F37] to-[#D86F75] text-white rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
          >
            Contact Us
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
