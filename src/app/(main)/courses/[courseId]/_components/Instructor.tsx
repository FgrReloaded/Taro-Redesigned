import { Card } from "@/components/ui/card";
import { Youtube, Briefcase, Users, GraduationCap, Trophy, ArrowRight } from 'lucide-react';
import { Jost, Lato } from "next/font/google";

const jost = Jost({
  subsets: ['latin'],
  weight: ["400", "600", "800"]
});

const lato = Lato({
  subsets: ['latin'],
  weight: ["400", "700"]
});

const InstructorSection = () => {
  const achievements = [
    {
      icon: <Briefcase />,
      title: "Google Software Engineer",
      color: "text-blue-500"
    },
    {
      icon: <GraduationCap />,
      title: "Lead Curriculum Developer",
      description: "at a top coding bootcamp",
      color: "text-violet-500"
    },
    {
      icon: <Youtube />,
      title: "Featured Instructor",
      description: "6M+ views on freeCodeCamp",
      color: "text-red-500"
    },
    {
      icon: <Trophy />,
      title: "Teaching Excellence",
      description: "10+ years of experience",
      color: "text-yellow-500"
    }
  ];

  return (
    <Card className="p-8 bg-gradient-to-br from-violet-50/50 to-fuchsia-50/50">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-violet-200">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tech-career-growth.appspot.com/o/user_images%2F1730306402-Alvin%20Zablan.jpg?alt=media&token=c285e99d-9bc2-4a4f-be14-e4d575db01cc"
                alt="Alvin Zablan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 style={jost.style} className="text-3xl font-bold text-violet-900 mb-2">
              Meet Alvin Zablan
            </h2>
            <p style={lato.style} className="text-lg text-gray-600 mb-4">
              Hey Programmers! I&apos;m <span className="font-semibold text-violet-700">Alvin</span>.
              I&apos;m a software engineer with a serious passion for teaching.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg border border-violet-100 hover:border-violet-200 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center ${achievement.color}`}>
                {achievement.icon}
              </div>
              <div className="ml-4">
                <h3 style={jost.style} className="font-semibold text-violet-900">
                  {achievement.title}
                </h3>
                {achievement.description && (
                  <p style={lato.style} className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-gradient-to-r from-violet-100/50 to-fuchsia-100/50 rounded-xl p-6 space-y-4">
          <h3 style={jost.style} className="text-xl font-semibold text-violet-900 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Teaching Philosophy
          </h3>
          <div style={lato.style} className="space-y-4 text-gray-600">
            <p>
              I have spent the better part of the last decade teaching students the skills needed to be a great developer and
              <span className="font-semibold text-violet-700"> land their dream job</span>.
            </p>
            <p>
              Through years of experience leading in the classroom, working with students one-on-one, and in front of the video camera,
              I&apos;ve developed a teaching style that I&apos;m excited to share with you.
            </p>
            <div className="bg-white p-4 rounded-lg border border-violet-100">
              <p className="text-violet-700 font-medium">
                I believe that <span className="font-bold">gradual progression is the key</span> to building robust knowledge
                that you&apos;ll be able to apply in your interviews and on the job.
              </p>
            </div>
          </div>
        </div>

        {/* Final Promise */}
        <div className="bg-gradient-to-r from-fuchsia-100/50 to-violet-100/50 rounded-xl p-6">
          <div style={lato.style} className="flex items-center text-gray-600">
            <ArrowRight className="w-6 h-6 mr-2 text-violet-500" />
            <p>
              We&apos;ll go slow so that you don&apos;t miss a step. With my system, you&apos;ll enter the course as a beginner,
              but leave with the <span className="font-semibold text-violet-700">skills to land your dream job</span>.
              Let&apos;s learn together.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InstructorSection;