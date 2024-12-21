"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Lato, Jost, Open_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const lato = Lato({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "700"]
})

const jost = Jost({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "600", "800"]
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "700"]
})

// @ts-expect-error-ignore
const CourseCard = ({ title, instructor, duration, students, rating, price, category, description }) => {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}

    >
      <Card className="w-96 h-[28rem] overflow-hidden relative bg-gradient-to-br from-violet-100 via-fuchsia-50 to-pink-100 border-none shadow-lg">
        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-300 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-300 rounded-full filter blur-3xl opacity-30 animate-pulse" />

        <CardContent className="p-6 flex flex-col h-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge style={openSans.style} className="mb-2 bg-violet-600 text-white font-semibold px-3 py-1 rounded-full">
              {category}
            </Badge>
            <h3 style={jost.style} className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              {title}
            </h3>
            <p style={openSans.style} className="text-sm text-gray-600 mb-4">{description}</p>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={openSans.style}
          >
            <div className="flex items-center space-x-2">
              <Clock size={18} className="text-violet-600" />
              <span className="text-sm font-medium text-gray-700">{duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={18} className="text-violet-600" />
              <span className="text-sm font-medium text-gray-700">{students} enrolled</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen size={18} className="text-violet-600" />
              <span className="text-sm font-medium text-gray-700">By {instructor}</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
              ))}
              <span className="text-sm font-medium text-gray-700 ml-2">{rating.toFixed(1)}</span>
            </div>
          </motion.div>

          <motion.div
            className="mt-auto flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={lato.style}
          >
            <span className="text-2xl font-bold text-violet-700">${price}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r z-50 from-violet-100 to-fuchsia-200 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-violet-900"
              onClick={() => { router.push("/courses/react-developement") }}
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div >
  );
};


export default CourseCard;