import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResearchPage() {
  const collaborators = [
    {
      name: "Universiti Teknikal Malaysia Melaka (UTeM)",
      country: "Malaysia",
    },
    { name: "Multimedia University Malaysia (MMU)", country: "Malaysia" },
    {
      name: "Management and Science University (MSU)",
      country: "Malaysia",
    },
    { name: "Universiti Malaysia Pahang (UMP)", country: "Malaysia" },
    {
      name: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
      country: "Thailand",
    },
    { name: "Kyoto University", country: "Japan" },
    { name: "RMIT University", country: "Australia" },
  ];

  const researchAreas = [
    "Adaptive Learning Systems",
    "Immersive Learning Environments",
    "Cross-Cultural Educational Frameworks",
    "Sustainability-Focused Game Scenarios",
    "Game-Based Learning Methodologies",
    "Educational Technology Innovation",
    "Interactive Multimedia Applications",
    "Virtual Reality in Education",
  ];

  return (
    <div className="w-full">
      <div className="px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Research</h1>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Advancing Knowledge Together
              </h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">
                  Metalabs collaborates extensively with both national and international universities to advance research in game-based learning and educational technology.
                </p>
                <p className="text-lg leading-relaxed">
                  These collaborations aim to harness the power of interactive
                  multimedia and gamification to revolutionize educational
                  practices, making learning more engaging, accessible, and
                  effective.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Collaborators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {collaborators.map((collaborator, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg hover:bg-accent transition-colors"
                    >
                      <h3 className="font-semibold mb-1">{collaborator.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {collaborator.country}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {researchAreas.map((area) => (
                    <div
                      key={area}
                      className="p-4 border rounded-lg hover:bg-accent transition-colors"
                    >
                      <h3 className="font-medium">{area}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">
                    Through joint research initiatives, Metalabs and its partners
                    explore a wide array of topics, from adaptive learning systems
                    and immersive environments to cross-cultural educational
                    frameworks and sustainability-focused game scenarios.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    By integrating interdisciplinary expertise and cutting-edge
                    technology, this collective effort produces innovative tools,
                    methodologies, and content that address global educational
                    challenges, ensuring both academic excellence and practical
                    impact.
                  </p>
                </div>
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
