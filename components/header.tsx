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
import Image from "next/image";

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
    { href: "/achievement/2024", label: "Competition 2024" },
    { href: "/achievement/2023", label: "Competition 2023" },
    { href: "/achievement/2022", label: "Competition 2022" },
    { href: "/achievement/2021", label: "Competition 2021" },
    { href: "/achievement/2020", label: "Competition 2020" },
  ];

  const libraryItems = [
    { href: "/library/zetcil-101", label: "Zetcil 101" },
    { href: "/library/coder-template", label: "Coder Template" },
    { href: "/library/carolina-framework", label: "Carolina Framework" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="glass border rounded-2xl shadow-lg px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/MetalabsH.png"
              alt="Metalabs"
              width={140}
              height={46}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
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
        <div className="hidden md:flex items-center gap-2">
          {/* Achievement Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 p-2 rounded-lg transition-all hover:bg-accent/10 ${
                  pathname.startsWith("/achievement")
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                <Trophy className="h-4 w-4" />
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {achievementItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Library Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 p-2 rounded-lg transition-all hover:bg-accent/10 ${
                  pathname.startsWith("/library")
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {libraryItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
            <nav className="flex flex-col h-full">
              {/* Main Navigation Links */}
              <div className="flex flex-col py-4 px-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`py-3 text-base transition-colors hover:text-primary ${
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
                  <span className="font-semibold text-sm">Achievements</span>
                </div>
                <div className="flex flex-col pl-6">
                  {achievementItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`py-2 text-sm transition-colors hover:text-primary ${
                        pathname === item.href
                          ? "text-foreground font-medium"
                          : "text-foreground/60"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Library Section */}
              <div className="px-6 py-4 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-sm">Library</span>
                </div>
                <div className="flex flex-col pl-6">
                  {libraryItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`py-2 text-sm transition-colors hover:text-primary ${
                        pathname === item.href
                          ? "text-foreground font-medium"
                          : "text-foreground/60"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Theme Toggle at Bottom */}
              <div className="mt-auto px-6 py-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
