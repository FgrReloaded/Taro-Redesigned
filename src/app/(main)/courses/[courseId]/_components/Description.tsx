import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Target, Brain, Star, Sparkles } from 'lucide-react';
import { Jost, Lato, Open_Sans } from "next/font/google"

const jost = Jost({ subsets: ['latin'], weight: ["400", "600", "800"] })
const lato = Lato({ subsets: ['latin'], weight: ["400", "700"] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ["400", "700"] })

const CourseDescriptionCard = () => {
  const learningOutcomes = [
    "Solve interview problems about hash-maps, linked lists, binary trees, graphs, and dynamic programming",
    "Analyze algorithms using Big-O notation so an optimal implementation is achieved",
    "Visualize and understand core algorithm concepts so you can apply them to solve new problems"
  ];

  return (
    <Card className="p-6 space-y-8">
      <div className="space-y-4">
        <h3 style={jost.style} className="text-xl font-semibold text-violet-900 mb-4 flex items-center">
          Course Description
        </h3>

        <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4 rounded-lg border border-violet-100">
          <h4 style={lato.style} className="text-lg font-semibold text-violet-800 mb-2">
            Tired of the frustrating LeetCode grind?
          </h4>
          <p style={openSans.style} className="text-gray-600 leading-relaxed">
            The reason people struggle with learning data structures and algorithms (DSA) is that they go about it in the completely wrong way. They jump straight into trying to solve problems without the proper prerequisite knowledge.
          </p>
          <div className="mt-3 text-violet-700 font-medium">
            This is why studying DSA feels like a slow &quot;grind&quot; for many.
          </div>
        </div>

        <div className="space-y-4">
          <p style={openSans.style} className="text-gray-600 leading-relaxed">
            If you are going to land your dream job, you are going to need to build your knowledge in a way where you can apply your skills to new problems, when it matters most, on a technical interview.
          </p>

          <div className="bg-violet-50 p-4 rounded-lg border border-violet-100">
            <p style={openSans.style} className="text-violet-700 font-medium">
              In this crash course we&apos;ll build up your DSA knowledge gradually so you never miss a step.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 style={lato.style} className="text-lg font-semibold text-violet-800 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            By the end of this course, you will be able to:
          </h4>
          <div className="grid gap-3">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-5 h-5 text-violet-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-fuchsia-50 to-violet-50 p-4 rounded-lg border border-fuchsia-100">
          <div className="flex items-start">
            <Brain className="w-5 h-5 text-fuchsia-500 mr-2 mt-1" />
            <div className="space-y-2">
              <p style={openSans.style} className="text-gray-600">
                This course is designed for beginners, so you don&apos;t need any DSA knowledge to begin. We will start at the fundamentals and increase the difficulty slowly over time; this is the key to truly <span className="font-semibold text-violet-700">mastering</span> the concepts.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-violet-100/50 p-4 rounded-lg border border-violet-200">
          <div className="flex items-center">
            <Sparkles className="w-5 h-5 text-violet-600 mr-2" />
            <p style={openSans.style} className="text-violet-800 font-medium">
              Once you complete this course, you&apos;ll have the skills you need to ace your technical interviews and land your dream job.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-fuchsia-50 rounded-lg border border-fuchsia-100">
          <div className="flex items-start">
            <Star className="w-5 h-5 text-fuchsia-500 mr-2 mt-1" />
            <p style={openSans.style} className="text-gray-600">
              If you need additional support taking those skills and actually applying them, take Alvin&apos;s <span className="font-medium">complete</span> data structures and algorithms course on <Badge className="ml-1 bg-violet-100 text-violet-700 hover:bg-violet-200">Structy</Badge>. You can try out the concepts yourself in their interactive code editor and learn advanced DSA patterns like stack exhaustive recursion.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseDescriptionCard;