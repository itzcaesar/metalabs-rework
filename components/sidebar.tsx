"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Trophy, Package, BookOpen } from "lucide-react";

export function Sidebar() {
  const achievements = [
    {
      label: "Competition 2024",
      href: "https://drive.google.com/drive/folders/1FvwMmt2PsRE9y1APEK7sjWyiY3T8iJbz",
    },
    {
      label: "Competition 2023",
      href: "https://drive.google.com/drive/folders/1s0aZbyZ4BhsWr2SHIlniv76RCM_lQuvC",
    },
    {
      label: "Competition 2022",
      href: "https://drive.google.com/drive/folders/1CNF5aajkQvqDJ9Lc0Iy6qIL31RzE0mqi",
    },
    {
      label: "Competition 2021",
      href: "https://drive.google.com/drive/folders/1EUHiHDbHKQ3782YnlozFLeez-bq_MNgn",
    },
    {
      label: "Competition 2020",
      href: "https://drive.google.com/drive/folders/1uvjNCrM8DVyawzT_i_Fhn7aQDSa8I2Yi",
    },
  ];

  const products = [
    { label: "TalkPlay", href: "https://metalabs.id/2025/01/21/talkplay/" },
    { label: "ARMazing", href: "https://metalabs.id/2024/12/07/armazing/" },
    { label: "Kidtective", href: "https://metalabs.id/virals/quest" },
    { label: "Fragment Quest", href: "https://fragmentquest.com/" },
  ];

  const libraries = [
    { label: "Zetcil 101", href: "https://bit.ly/Zetcil101" },
    {
      label: "Coder Template",
      href: "https://drive.google.com/drive/folders/1NbQZRjwWc7SR1yhC7QDUFfX3buQcB_t_",
    },
    {
      label: "Carolina Framework",
      href: "https://drive.google.com/drive/folders/182iDBfALq7mB6a67GDRUDqJ-rbAYRIHA",
    },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Achievement Card */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Trophy className="w-5 h-5 text-primary" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {achievements.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="group-hover:underline leading-tight">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Product Card */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Package className="w-5 h-5 text-primary" />
            Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {products.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="group-hover:underline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Library Card */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="w-5 h-5 text-primary" />
            Library
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {libraries.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="group-hover:underline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
}
