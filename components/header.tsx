"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Trophy, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { PixelRunner } from "@/components/pixel-runner";
import Image from "next/image";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/product", label: "Products" },
    { href: "/research", label: "Research" },
    { href: "/about", label: "About" },
  ];

  const achievementItems = [
    { href: "https://drive.google.com/drive/folders/1FvwMmt2PsRE9y1APEK7sjWyiY3T8iJbz", label: "2024", external: true },
    { href: "https://drive.google.com/drive/folders/1s0aZbyZ4BhsWr2SHIlniv76RCM_lQuvC", label: "2023", external: true },
    { href: "https://drive.google.com/drive/folders/1CNF5aajkQvqDJ9Lc0Iy6qIL31RzE0mqi", label: "2022", external: true },
    { href: "https://drive.google.com/drive/folders/1EUHiHDbHKQ3782YnlozFLeez-bq_MNgn", label: "2021", external: true },
    { href: "https://drive.google.com/drive/folders/1uvjNCrM8DVyawzT_i_Fhn7aQDSa8I2Yi", label: "2020", external: true },
  ];

  const libraryItems = [
    { href: "https://bit.ly/Zetcil101", label: "Zetcil 101", external: true },
    { href: "https://drive.google.com/drive/folders/1NbQZRjwWc7SR1yhC7QDUFfX3buQcB_t_", label: "Coder Template", external: true },
    { href: "https://drive.google.com/drive/folders/182iDBfALq7mB6a67GDRUDqJ-rbAYRIHA", label: "Carolina", external: true },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="glass border rounded-2xl shadow-lg px-6 flex h-16 items-center justify-between relative overflow-hidden"
      >
        {/* Pixel Runner Background Animation */}
        <PixelRunner />
        
        <div className="flex items-center gap-8 relative z-10">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/images/MetalabsH.png"
                alt="Metalabs"
                width={140}
                height={46}
                className="h-8 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 text-xs font-medium font-pixel">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === route.href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3 relative z-10">
          {/* Achievement Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all hover:bg-accent/10 ${
                  pathname.startsWith("/achievement")
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                <Trophy className="h-4 w-4" />
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32 font-pixel text-[10px]">
              {achievementItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Separator */}
          <div className="h-5 w-px bg-foreground/20" />

          {/* Library Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all hover:bg-accent/10 ${
                  pathname.startsWith("/library")
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 font-pixel text-[10px]">
              {libraryItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Separator */}
          <div className="h-5 w-px bg-foreground/20" />

          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col h-full font-pixel">
              {/* Main Navigation Links */}
              <div className="flex flex-col py-4 px-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`py-3 text-xs transition-colors hover:text-primary ${
                      pathname === route.href
                        ? "text-foreground font-semibold"
                        : "text-foreground/70"
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
              
              {/* Achievement Section */}
              <div className="px-6 py-4 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-[10px]">Achievements</span>
                </div>
                <div className="flex flex-col pl-6">
                  {achievementItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 text-[10px] transition-colors hover:text-primary text-foreground/60"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Library Section */}
              <div className="px-6 py-4 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-[10px]">Library</span>
                </div>
                <div className="flex flex-col pl-6">
                  {libraryItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 text-[10px] transition-colors hover:text-primary text-foreground/60"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Theme Toggle at Bottom */}
              <div className="mt-auto px-6 py-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </motion.div>
    </motion.header>
  );
}
