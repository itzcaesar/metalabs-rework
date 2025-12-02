import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Cpu, Gamepad2, Sparkles, ExternalLink, Glasses, Hand, Camera, Microchip } from "lucide-react";

export default function ProductPage() {
  const products = [
    { name: "Itara", image: "/images/Itara.jpg", category: "Game" },
    { name: "Grimmater", image: "/images/Grimmater.png", category: "Game" },
    { name: "Metaspeak", image: "/images/Metaspeak.png", category: "App" },
    { name: "Kidtective Adventure", image: "/images/KidtectiveAdventure.png", category: "Game" },
    { name: "ARMazing", image: "/images/Screenshot_20241213_154131.png", category: "AR" },
    { name: "Personal Finance", image: "/images/PersonalFinance.png", category: "App" },
    { name: "Ojek Rescuer", image: "/images/OjekRescuer.png", category: "Game" },
    { name: "Wonosobo", image: "/images/Wonosobo.png", category: "VR" },
    { name: "Everyday Encounter", image: "/images/EverydayEncounter.png", category: "Game" },
    { name: "Deadliner", image: "/images/Deadliner.png", category: "Game" },
    { name: "Badarau", image: "/images/Badarau.png", category: "Game" },
    { name: "Megamendung", image: "/images/Megamendung-1.png", category: "VR" },
  ];

  const technologies = [
    { name: "2D Platformer Games", icon: Gamepad2 },
    { name: "Third-Person 3D Games", icon: Gamepad2 },
    { name: "Virtual Expos & Galleries", icon: Glasses },
    { name: "Augmented Reality (AR)", icon: Sparkles },
    { name: "Speech Recognition", icon: Cpu },
    { name: "Hand Tracking", icon: Hand },
    { name: "OpenCV Integration", icon: Camera },
    { name: "Arduino Sensors", icon: Microchip },
  ];

  const stats = [
    { label: "Products Created", value: "12+" },
    { label: "Technologies Used", value: "8+" },
    { label: "Happy Clients", value: "5+" },
    { label: "Awards Won", value: "15+" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(221,47,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(216,111,117,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Creative Works</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Metalabs has created a diverse range of interactive multimedia products, combining technology with education to deliver meaningful experiences.
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

      {/* Technologies Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Stack</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Technologies & <span className="gradient-text">Capabilities</span>
            </h2>
          </div>

          {/* Bento Grid for Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[120px]">
            {/* Large card */}
            <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#DD2F37] to-[#B86A6E] p-8 flex flex-col justify-end cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-6 right-6">
                <Gamepad2 className="w-16 h-16 text-white/20" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Game Development
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  2D platformers, 3D adventures, and immersive experiences
                </p>
              </div>
            </div>

            {technologies.slice(2, 6).map((tech, index) => {
              const Icon = tech.icon;
              const isGradient = index === 1;
              return (
                <div
                  key={tech.name}
                  className={`group relative rounded-3xl overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isGradient
                      ? "bg-gradient-to-br from-[#D86F75] to-[#E89A9E] hover:scale-[1.02]"
                      : "bg-card border border-border hover:border-primary/50 hover:shadow-xl"
                  }`}
                >
                  <Icon className={`w-8 h-8 ${isGradient ? "text-white/80" : "text-primary"}`} />
                  <h3 className={`text-sm font-bold ${isGradient ? "text-white" : "group-hover:text-primary transition-colors"}`}>
                    {tech.name}
                  </h3>
                </div>
              );
            })}

            {technologies.slice(6).map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group relative rounded-3xl overflow-hidden bg-card border border-border p-6 flex flex-col justify-between cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary" />
                  <h3 className="text-sm font-bold group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold">
              Product <span className="gradient-text">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative aspect-video rounded-3xl overflow-hidden bg-muted cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DD2F37] via-[#D86F75] to-[#B86A6E] p-12 sm:p-16 text-white text-center">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                Interested in Our Products?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                View our pricing details and collaboration opportunities
              </p>
              <Link 
                href="https://bit.ly/RABMetalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#DD2F37] rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
              >
                View Pricing
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
