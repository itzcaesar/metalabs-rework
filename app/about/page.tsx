import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Lightbulb, DollarSign } from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Equipping researchers and students with the knowledge and tools needed to explore new frontiers in multimedia technology.",
    },
    {
      icon: Lightbulb,
      title: "Incubation",
      description:
        "Nurturing innovation and fostering a collaborative environment to refine ideas into real-world applications.",
    },
    {
      icon: DollarSign,
      title: "Monetization",
      description:
        "Ensuring that research results create measurable value, aligning academic efforts with economic and societal impact.",
    },
  ];

  return (
    <div className="w-full">
      <div className="px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">About Metalabs</h1>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Interactive Multimedia For Everything
              </h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">
                  Welcome to Metalabs, the Multimedia Engineering Research Laboratory at Telkom University. We specialize in interactive multimedia for everything, driving innovation in game-based learning, educational technology, and immersive experiences.
                </p>
                <p className="text-lg leading-relaxed">Guided by our core values of Education, Incubation, and Monetization, we transform creative ideas into impactful solutions.</p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission & Vision */}
            <Card>
              <CardHeader>
                <CardTitle>Mission & Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To innovate and inspire through interactive multimedia
                      research, supporting research and community service programs
                      that contribute to impactful knowledge development and
                      dissemination.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be a leading research laboratory that transforms
                      creativity into value while enhancing the lives of students,
                      researchers, and the wider community through cutting-edge
                      interactive multimedia solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Focus Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Education Technology",
                    "Safety & Security",
                    "Environmental Sustainability",
                    "Interactive Multimedia",
                    "Game-Based Learning",
                    "Community Service",
                  ].map((area) => (
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

            {/* About Telkom University */}
            <Card>
              <CardHeader>
                <CardTitle>About Telkom University</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Metalabs is a research laboratory at Telkom University, one of
                  Indonesia's leading private universities. As a driving force
                  behind the university's research and community service
                  initiatives, Metalabs actively collaborates with industries,
                  institutions, and communities to address challenges and deliver
                  meaningful solutions.
                </p>
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
