import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ProductPage() {
  const products = [
    { name: "Itara", image: "/images/Itara.jpg" },
    { name: "Grimmater", image: "/images/Grimmater.png" },
    { name: "Metaspeak", image: "/images/Metaspeak.png" },
    { name: "Kidtective Adventure", image: "/images/KidtectiveAdventure.png" },
    { name: "ARMazing", image: "/images/Screenshot_20241213_154131.png" },
    { name: "Personal Finance", image: "/images/PersonalFinance.png" },
    { name: "Ojek Rescuer", image: "/images/OjekRescuer.png" },
    { name: "Wonosobo", image: "/images/Wonosobo.png" },
    { name: "Everyday Encounter", image: "/images/EverydayEncounter.png" },
    { name: "Deadliner", image: "/images/Deadliner.png" },
    { name: "Badarau", image: "/images/Badarau.png" },
    { name: "Megamendung", image: "/images/Megamendung-1.png" },
  ];

  const technologies = [
    "2D Platformer Games",
    "Third-Person 3D Games",
    "Virtual Expos & Galleries",
    "Augmented Reality (AR)",
    "Speech Recognition",
    "Hand Tracking",
    "OpenCV Integration",
    "Arduino Sensors",
  ];

  return (
    <div className="w-full">
      <div className="px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Products</h1>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Our Creative Works
              </h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">
                  Metalabs has created a diverse range of interactive multimedia products, combining technology with education to deliver meaningful experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  Among these are 2D platformer games and third-person 3D games,
                  which combine engaging gameplay with educational content to
                  foster knowledge retention and problem-solving skills. In
                  addition to games, Metalabs develops immersive 3D applications
                  such as virtual expos and virtual galleries, providing dynamic
                  platforms for exploration, interaction, and learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technologies & Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="p-4 border rounded-lg hover:bg-accent transition-colors"
                    >
                      <h3 className="font-medium">{tech}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Product Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Our Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.name}
                      className="group relative aspect-video bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                        <h3 className="font-semibold">{product.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pricing Link */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-2">For pricing information and collaboration inquiries:</p>
                <Link
                  href="https://bit.ly/RABMetalabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Pricing Details
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
    </div>
  );
}
