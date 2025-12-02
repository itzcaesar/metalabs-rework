"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, GraduationCap, Lightbulb, DollarSign, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight, 
  ScaleIn, 
  StaggerContainer, 
  StaggerItem,
  BlurIn
} from "@/components/motion";

export default function AboutPage() {
  const coreValues = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Equipping researchers and students with knowledge and tools to explore new frontiers in multimedia technology.",
    },
    {
      icon: Lightbulb,
      title: "Incubation",
      description: "Nurturing innovation and fostering collaboration to refine ideas into real-world applications.",
    },
    {
      icon: DollarSign,
      title: "Monetization",
      description: "Ensuring research results create measurable value, aligning academic efforts with economic impact.",
    },
  ];

  const focusAreas = [
    "Education Technology",
    "Safety & Security",
    "Environmental Sustainability",
    "Interactive Multimedia",
    "Game-Based Learning",
    "Community Service",
  ];

  const team = [
    { role: "Researchers", count: "20+" },
    { role: "Students", count: "40+" },
    { role: "Alumni", count: "100+" },
    { role: "Partners", count: "10+" },
  ];

  const leaders = [
    {
      name: "Rickman Roedavan",
      role: "Head of Metalabs",
      image: "https://metalabs.id/wp-content/uploads/2025/01/Rickman-Roedavan-Metalabs.png",
    },
    {
      name: "Rio Korio Utoro",
      role: "Vice Head I of Metalabs",
      image: "https://metalabs.id/wp-content/uploads/2025/01/Rio-Korio-Utoro.jpg",
    },
    {
      name: "Sritenaya Geovani",
      role: "Vice Head II of Metalabs",
      image: "https://metalabs.id/wp-content/uploads/2025/01/MentorNaya-1.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero - About Intro */}
      <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(221,47,55,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left - Main Content */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">About Us</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight font-pixel"
              >
                Interactive
                <br />
                Multimedia
                <br />
                <span className="gradient-text">For Everything</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Welcome to Metalabs, the Multimedia Engineering Research Laboratory 
                at Telkom University. We drive innovation in game-based learning, 
                educational technology, and immersive experiences.
              </motion.p>

              {/* Team Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                {team.map((item, idx) => (
                  <motion.div 
                    key={item.role}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-primary">{item.count}</div>
                    <div className="text-sm text-muted-foreground">{item.role}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right - Logo & Values Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-card border border-border rounded-3xl p-12 text-center hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300"
              >
                <div className="bg-muted group-hover:bg-white rounded-2xl p-6 mb-8 inline-block transition-colors">
                  <Image
                    src="/images/MetalabsH.png"
                    alt="Metalabs"
                    width={300}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <p className="text-muted-foreground group-hover:text-white/90 text-lg leading-relaxed transition-colors">
                  Transforming creative ideas into impactful solutions that benefit 
                  students, researchers, and the wider community.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Cards */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInUp>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 font-pixel">
                Our Core <span className="gradient-text">Values</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-muted-foreground">
                The principles that guide everything we do
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative h-full"
                  >
                    {/* Card */}
                    <div className="bg-card border border-border rounded-3xl p-8 h-full hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                      {/* Icon */}
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                          index === 0 
                            ? "bg-gradient-to-br from-[#DD2F37] to-[#D86F75]"
                            : index === 1
                            ? "bg-gradient-to-br from-[#D86F75] to-[#E89A9E]"
                            : "bg-gradient-to-br from-[#B86A6E] to-[#DD2F37]"
                        }`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Meet Our Leaders */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInUp>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 font-pixel">
                Meet Our <span className="gradient-text">Leaders</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-muted-foreground">
                The people driving innovation at Metalabs
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <StaggerItem key={leader.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover object-top"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <FadeInLeft>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-card border border-border rounded-3xl p-10 hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300 h-full"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors"
                >
                  <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">Mission</h3>
                <p className="text-muted-foreground group-hover:text-white/90 text-lg leading-relaxed transition-colors">
                  To innovate and inspire through interactive multimedia research, 
                  supporting programs that contribute to impactful knowledge 
                  development and dissemination.
                </p>
              </motion.div>
            </FadeInLeft>

            {/* Vision */}
            <FadeInRight>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-card border border-border rounded-3xl p-10 hover:bg-gradient-to-br hover:from-[#DD2F37] hover:to-[#B86A6E] hover:border-transparent transition-all duration-300 h-full"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors"
                >
                  <Sparkles className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">Vision</h3>
                <p className="text-muted-foreground group-hover:text-white/90 text-lg leading-relaxed transition-colors">
                  To be a leading research laboratory that transforms creativity 
                  into value while enhancing lives through cutting-edge interactive 
                  multimedia solutions.
                </p>
              </motion.div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeInUp>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 font-pixel">
                Focus <span className="gradient-text">Areas</span>
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((area, index) => (
              <StaggerItem key={area}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="px-8 py-4 rounded-full font-medium transition-all duration-300 cursor-pointer bg-card border border-border hover:bg-gradient-to-r hover:from-[#DD2F37] hover:to-[#D86F75] hover:text-white hover:border-transparent"
                >
                  {area}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Telkom University */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleIn>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-card border border-border rounded-3xl p-12 text-center"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white flex items-center justify-center p-2"
              >
                <Image
                  src="/images/partners/logotelkom.png"
                  alt="Telkom University"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 font-pixel">
                Part of <span className="gradient-text">Telkom University</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Metalabs is a research laboratory at Telkom University, one of Indonesia's 
                leading private universities. We actively collaborate with industries, 
                institutions, and communities to address challenges and deliver meaningful solutions.
              </p>
            </motion.div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 font-pixel">
              Want to Join Our Team?
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for passionate individuals
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/courses"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#DD2F37] to-[#D86F75] text-white rounded-full font-semibold hover:opacity-90 transition-all"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/research"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-full font-semibold hover:border-primary/50 transition-all"
                >
                  View Research
                </Link>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
