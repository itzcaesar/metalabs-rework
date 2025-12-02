"use client";

import { ProductCarousel } from "@/components/product-carousel";
import { BackgroundSlider } from "@/components/background-slider";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap, Trophy, BookOpen, Gamepad2, GraduationCap, Glasses, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { 
  FadeInUp, 
  ScaleIn, 
  StaggerContainer, 
  StaggerItem,
  Float,
  BlurIn
} from "@/components/motion";

export default function HomePage() {
  const stats = [
    { label: "Startup Created", value: "10" },
    { label: "Metalabs Assistant", value: "60" },
    { label: "Client Happy", value: "5" },
    { label: "Total Research", value: "22" },
  ];

  const features = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Creating immersive gaming experiences with cutting-edge technology and innovative gameplay mechanics.",
    },
    {
      icon: GraduationCap,
      title: "Interactive Learning",
      description: "Transforming education through game-based learning and engaging digital experiences.",
    },
    {
      icon: Glasses,
      title: "AR/VR Solutions",
      description: "Building immersive augmented and virtual reality experiences for education and beyond.",
    },
    {
      icon: FlaskConical,
      title: "Research Innovation",
      description: "Advancing knowledge through collaborative research and cutting-edge technology.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <BackgroundSlider />
        
        {/* Red Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(221,47,55,0.2),transparent_50%)] z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Telkom University Research Lab</span>
          </motion.div>
          
          {/* Metalabs Logo */}
          <Float duration={4}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex justify-center mb-8"
            >
              <Image
                src="/images/MetalabsH.png"
                alt="Metalabs"
                width={600}
                height={200}
                className="h-32 sm:h-40 lg:h-48 w-auto object-contain"
                priority
              />
            </motion.div>
          </Float>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 font-pixel"
          >
            <span className="text-foreground/90">Interactive Multimedia For Everything</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Driving innovation in game-based learning, educational technology, and immersive experiences at Telkom University
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/product"
              className="group px-8 py-4 bg-gradient-to-r from-[#DD2F37] to-[#D86F75] hover:from-[#C42A31] hover:to-[#C45F64] text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/research"
              className="px-10 py-4 glass hover:bg-accent rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View Research
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">About Metalabs</span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.1}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 font-pixel">
              Where Innovation Meets{" "}
              <span className="gradient-text">Education</span>
            </h2>
          </FadeInUp>
          
          <BlurIn delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Welcome to Metalabs, the Multimedia Engineering Research Laboratory at Telkom University. 
              We specialize in interactive multimedia for everything, driving innovation in game-based learning, 
              educational technology, and immersive experiences.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Guided by our core values of <strong className="text-foreground">Education</strong>,{" "}
              <strong className="text-foreground">Incubation</strong>, and{" "}
              <strong className="text-foreground">Monetization</strong>, we transform creative ideas into 
              impactful solutions that benefit students, researchers, and the wider community.
            </p>
          </BlurIn>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Featured Products</span>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 font-pixel">
                Our <span className="gradient-text">Products</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our innovative games and interactive multimedia applications
              </p>
            </FadeInUp>
          </div>
        </div>

        {/* Full Width Carousel */}
        <div className="w-full">
          <ProductCarousel />
        </div>

        <FadeInUp className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="text-center">
            <Link 
              href="/product"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInUp>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">What We Do</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-pixel">
                Our <span className="gradient-text">Expertise</span>
              </h2>
            </FadeInUp>
          </div>

          {/* Bento Grid Layout */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
            {/* Game Development - Large */}
            <StaggerItem className="md:col-span-2 md:row-span-2">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#DD2F37] to-[#B86A6E] p-8 flex flex-col justify-end cursor-pointer"
              >
                <motion.div 
                  className="absolute top-6 right-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Gamepad2 className="w-16 h-16 text-white/20" />
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {features[0].title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {features[0].description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Interactive Learning */}
            <StaggerItem className="md:col-span-2">
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: "rgba(221, 47, 55, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full group relative rounded-3xl overflow-hidden bg-card border border-border p-6 flex items-center gap-6 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#DD2F37] to-[#D86F75] flex items-center justify-center shrink-0"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {features[1].title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {features[1].description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>

            {/* AR/VR Solutions */}
            <StaggerItem>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#D86F75] to-[#E89A9E] p-6 flex flex-col justify-between cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Glasses className="w-10 h-10 text-white/80" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {features[2].title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    AR & VR experiences
                  </p>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Research Innovation */}
            <StaggerItem>
              <motion.div 
                whileHover={{ scale: 1.05, borderColor: "rgba(221, 47, 55, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full group relative rounded-3xl overflow-hidden bg-card border border-border p-6 flex flex-col justify-between cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FlaskConical className="w-10 h-10 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1">
                    {features[3].title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Cutting-edge research
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleIn>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DD2F37] via-[#D86F75] to-[#B86A6E] p-12 sm:p-16 text-white text-center"
            >
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Animated background shapes */}
              <motion.div
                className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/5"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              <div className="relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 font-pixel"
                >
                  Ready to Transform Education?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
                >
                  Join us in creating innovative solutions for game-based learning and educational technology
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
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
                </motion.div>
              </div>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
