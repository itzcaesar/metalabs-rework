import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoursesPage() {
  const institutions = [
    "King Mongkut's University of Technology Thonburi (KMUTT) - Thailand",
    "Management & Science University (MSU) - Malaysia",
    "Universiti Kuala Lumpur (UniKL) - Malaysia",
    "Indonesian Cyber Education (ICE) Institute",
    "Vocational School Graduate Academy (VSGA)",
  ];

  return (
    <div className="w-full">
      <div className="px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Courses</h1>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Learn From The Best
              </h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">Metalabs has conducted various training programs in interactive multimedia and game development at both national and international levels.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partner Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {institutions.map((institution, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary font-semibold mt-1">•</span>
                      <span>{institution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Interactive Multimedia",
                    "Game Development",
                    "Game Design",
                    "Monetization Strategies",
                    "Unity Development",
                    "Unreal Engine",
                    "AR/VR Development",
                    "Educational Technology",
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="p-4 border rounded-lg hover:bg-accent transition-colors"
                    >
                      <h3 className="font-medium">{topic}</h3>
                    </div>
                  ))}
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
