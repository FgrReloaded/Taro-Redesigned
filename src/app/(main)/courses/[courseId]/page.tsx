"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  CheckCircle2,
  PlayCircle,
  Download,
  Share2,
  BookmarkPlus
} from 'lucide-react';
import { Jost, Lato, Open_Sans } from "next/font/google"
import Image from 'next/image';
import CourseDescriptionCard from './_components/Description';
import InstructorSection from './_components/Instructor';
import Review from './_components/Review';

const jost = Jost({ subsets: ['latin'], weight: ["400", "600", "800"] })
const lato = Lato({ subsets: ['latin'], weight: ["400", "700"] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ["400", "700"] })

const SingleCoursePage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const course = {
    title: "Advanced React Patterns",
    category: "Web Development",
    rating: 4.8,
    students: 1234,
    duration: 8,
    price: 99.99,
    level: "Advanced",
    instructor: "Sarah Johnson",
    lastUpdated: "March 2024",
    description: "Master advanced React patterns and build scalable applications with best practices and modern architecture.",
    image: "https://www.jointaro.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftech-career-growth.appspot.com%2Fo%2Fevent_images%252F1727734225-image.jpg%3Falt%3Dmedia%26token%3D72676afc-4798-4c1f-84cb-9d934324b647&w=1920&q=75",
    learningOutcomes: [
      "Implement advanced React patterns like Compound Components",
      "Master React Performance Optimization",
      "Build scalable React applications",
      "Understand Advanced State Management",
    ],
    modules: [
      {
        title: "Introduction to Advanced Patterns",
        duration: "2.5 hours",
        lessons: 8,
        progress: 100
      },
      {
        title: "Compound Components",
        duration: "3 hours",
        lessons: 10,
        progress: 60
      },
      {
        title: "State Management Patterns",
        duration: "4 hours",
        lessons: 12,
        progress: 0
      }
    ]
  };

  return (
    <div className="min-h-screen mt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8 mb-8"
        >
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Badge className="bg-violet-100 hover:bg-violet-100/80 text-violet-700">
                {course.category}
              </Badge>
              <Badge className="bg-fuchsia-100 hover:bg-fuchsia-100/80 text-fuchsia-700">
                {course.level}
              </Badge>
            </div>

            <h1 style={jost.style} className="text-5xl font-bold text-violet-900">
              {course.title}
            </h1>

            <div style={openSans.style} className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                <span>{course.duration} weeks</span>
              </div>
            </div>

            <p style={lato.style} className="text-gray-600">
              Created by <span className="text-violet-700">{course.instructor}</span>
              <span className="mx-2">•</span>
              Last updated {course.lastUpdated}
            </p>

            <Card className="mb-8 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </Card>
          </div>

          <Card style={openSans.style} className="p-6 sticky top-24 bg-gradient-to-br from-fuchsia-50 to-violet-50 h-max shadow-lg border-2 border-transparent hover:border-violet-200 transition-all duration-300">
            <div className="text-3xl font-bold text-violet-900 mb-4">
              ${course.price}
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-violet-300 to-fuchsia-200 text-violet-900 font-bold hover:bg-gradient-to-tr transition">
                Enroll Now
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <BookmarkPlus className={`mr-2 ${isBookmarked ? 'text-violet-500' : ''}`} />
                {isBookmarked ? 'Bookmarked' : 'Add to Wishlist'}
              </Button>

              <div className="flex justify-between text-sm text-gray-600">
                <Button className='bg-transparent hover:bg-fuchsia-200 border-none shadow-none text-violet-950' size="sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
                <Button className='bg-transparent hover:bg-fuchsia-200 border-none shadow-none text-violet-950' size="sm">
                  <Download className="w-4 h-4 mr-1" />
                  Resources
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-violet-100/50 p-1" style={openSans.style}>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card className="p-6">
              <h3 style={jost.style} className="text-xl font-semibold text-violet-900 mb-4">
                What you&apos;ll learn
              </h3>
              <div style={lato.style} className="grid md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </Card>
            <CourseDescriptionCard />
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-4">
            {course.modules.map((module, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 style={jost.style} className="font-semibold flex gap-2 mb-2 text-violet-900">
                      <BookOpen /> {module.title}
                    </h4>
                    <div style={lato.style} className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {module.duration}
                      <BookOpen className="w-4 h-4 ml-4 mr-1" />
                      {module.lessons} lessons
                    </div>
                  </div>
                  <PlayCircle className="w-6 h-6 text-violet-500" />
                </div>
                <Progress value={module.progress} className="h-2" />
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="instructor">
            <InstructorSection />
          </TabsContent>
        </Tabs>
        <Review />
      </div>
    </div>
  );
};

export default SingleCoursePage;
