import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Package, Gamepad2, Glasses, Mic, Hand } from "lucide-react";

export default function ProductPage() {
  const products = [
    { name: "Itara", image: "/images/Itara.jpg", category: "Adventure" },
    { name: "Grimmater", image: "/images/Grimmater.png", category: "Horror" },
    { name: "Metaspeak", image: "/images/Metaspeak.png", category: "Education" },
    { name: "Kidtective Adventure", image: "/images/KidtectiveAdventure.png", category: "Kids" },
    { name: "ARMazing", image: "/images/Screenshot_20241213_154131.png", category: "AR" },
    { name: "Personal Finance", image: "/images/PersonalFinance.png", category: "Simulation" },
    { name: "Ojek Rescuer", image: "/images/OjekRescuer.png", category: "Action" },
    { name: "Wonosobo", image: "/images/Wonosobo.png", category: "VR" },
    { name: "Everyday Encounter", image: "/images/EverydayEncounter.png", category: "Story" },
    { name: "Deadliner", image: "/images/Deadliner.png", category: "Strategy" },
    { name: "Badarau", image: "/images/Badarau.png", category: "Adventure" },
    { name: "Megamendung", image: "/images/Megamendung-1.png", category: "VR" },
  ];

  const technologies = [
    { name: "2D & 3D Games", icon: Gamepad2, desc: "Platformers to open-world adventures" },
    { name: "AR Experiences", icon: Glasses, desc: "Augmented reality applications" },
    { name: "VR Environments", icon: Glasses, desc: "Immersive virtual galleries & expos" },
    { name: "Speech Recognition", icon: Mic, desc: "Voice-controlled interactions" },
    { name: "Hand Tracking", icon: Hand, desc: "Gesture-based controls" },
    { name: "IoT Integration", icon: Package, desc: "Arduino & sensor connectivity" },
  ];

  return (
    <div className="w-full">
      {/* Hero - Full Width Featured Product */}
      <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(221,47,55,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-muted/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Creative Works</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <Link 
                href="https://docs.google.com/presentation/d/1zlQPnoIkl0goyz0Lnn0UI70SKErgOfJt0ep0MWUW-UU/edit?slide=id.g32869c12113_0_311#slide=id.g32869c12113_0_311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#DD2F37] via-[#FF6B6B] to-[#DD2F37] bg-[length:200%_auto] animate-shine underline decoration-[#DD2F37] underline-offset-8 decoration-4 hover:opacity-80 transition-opacity"
              >
                Products
              </Link>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse interactive multimedia products combining technology with education
            </p>
          </div>

          {/* Featured Products Grid - Masonry Style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {products.map((product, index) => {
              const isLarge = index === 0 || index === 5;
              const isTall = index === 2 || index === 7;
              return (
                <div
                  key={product.name}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                    isLarge ? "md:col-span-2 md:row-span-2" : ""
                  } ${isTall ? "row-span-2" : ""}`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies - Icon Cards */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technologies & <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge technologies to create immersive experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group p-8 rounded-3xl transition-all duration-300 bg-card border border-border hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent hover:shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/80 transition-colors">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Interested in Our Products?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              View our pricing details and collaboration opportunities
            </p>
            <Link 
              href="https://bit.ly/RABMetalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#DD2F37] to-[#D86F75] text-white rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              View Pricing
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
