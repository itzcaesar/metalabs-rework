import { Sidebar } from "@/components/sidebar";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap, Trophy, BookOpen } from "lucide-react";

export default function HomePage() {
  const stats = [
    { label: "Active Projects", value: "50+" },
    { label: "Research Papers", value: "100+" },
    { label: "Student Teams", value: "30+" },
    { label: "Awards Won", value: "25+" },
  ];

  const features = [
    {
      icon: "🎮",
      title: "Game Development",
      description: "Creating immersive gaming experiences with cutting-edge technology and innovative gameplay mechanics.",
      gradient: "from-[#DD2F37] to-[#D86F75]",
    },
    {
      icon: "📚",
      title: "Interactive Learning",
      description: "Transforming education through game-based learning and engaging digital experiences.",
      gradient: "from-[#B86A6E] to-[#D86F75]",
    },
    {
      icon: "🥽",
      title: "AR/VR Solutions",
      description: "Building immersive augmented and virtual reality experiences for education and beyond.",
      gradient: "from-[#D86F75] to-[#E89A9E]",
    },
    {
      icon: "🔬",
      title: "Research Innovation",
      description: "Advancing knowledge through collaborative research and cutting-edge technology.",
      gradient: "from-[#DD2F37] to-[#B86A6E]",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Full Width */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#DD2F37]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D86F75]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B86A6E]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fadeInUp">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Telkom University Research Lab</span>
          </div>
          
          {/* Metalabs Logo */}
          <div className="flex justify-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <Image
              src="/images/MetalabsH.png"
              alt="Metalabs"
              width={600}
              height={200}
              className="h-32 sm:h-40 lg:h-48 w-auto object-contain"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
            <span className="text-foreground/90">Interactive Multimedia For Everything</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Driving innovation in game-based learning, educational technology, and immersive experiences at Telkom University
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Link 
              href="/product"
              className="group px-8 py-4 bg-gradient-to-r from-[#DD2F37] to-[#D86F75] hover:from-[#C42A31] hover:to-[#C45F64] text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/research"
              className="px-8 py-4 glass hover:bg-accent rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View Research
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Content */}
          <div className="flex-1 space-y-20">
            {/* About Section */}
            <section>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">About Metalabs</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Where Innovation Meets{" "}
                <span className="gradient-text">Education</span>
              </h2>
              
              <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Welcome to Metalabs, the Multimedia Engineering Research Laboratory at Telkom University. 
                  We specialize in interactive multimedia for everything, driving innovation in game-based learning, 
                  educational technology, and immersive experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Guided by our core values of <strong className="text-foreground">Education</strong>,{" "}
                  <strong className="text-foreground">Incubation</strong>, and{" "}
                  <strong className="text-foreground">Monetization</strong>, we transform creative ideas into 
                  impactful solutions that benefit students, researchers, and the wider community.
                </p>
              </div>
            </section>

            {/* Features Section */}
            <section>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">What We Do</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-12">
                Our <span className="gradient-text">Expertise</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{feature.icon}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Products Section */}
            <section>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Featured Products</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold">
                    Our <span className="gradient-text">Products</span>
                  </h2>
                </div>
                <Link 
                  href="/product"
                  className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  View All
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard name="Itara" image="Itara.jpg" />
                <ProductCard name="Grimmater" image="Grimmater.png" />
                <ProductCard name="Metaspeak" image="Metaspeak.png" />
                <ProductCard name="ARMazing" image="Screenshot_20241213_154131.png" />
              </div>

              <Link 
                href="/product"
                className="md:hidden flex items-center justify-center gap-2 text-primary hover:gap-3 transition-all mt-8"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DD2F37] via-[#D86F75] to-[#B86A6E] p-12 text-white text-center">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Transform Education?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Join us in creating innovative solutions for game-based learning and educational technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/courses"
                    className="px-8 py-4 bg-white text-[#DD2F37] rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
                  >
                    Explore Courses
                  </Link>
                  <Link 
                    href="/about"
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
