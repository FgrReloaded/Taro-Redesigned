"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Clock, Users, Star, ChevronRight, Search, Filter, X } from 'lucide-react'
import Image from 'next/image'
import { Open_Sans, Lato, Jost } from "next/font/google"

const lato = Lato({
  subsets: ['latin'],
  weight: ["400", "700"]
})

const jost = Jost({
  subsets: ['latin'],
  weight: ["400", "600", "800"]
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["400", "700"]
})


const courses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    category: "Web Development",
    rating: 4.8,
    students: 1234,
    duration: 8,
    price: 99.99,
    level: "Advanced",
    image: "https://www.jointaro.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftech-career-growth.appspot.com%2Fo%2Fevent_images%252F1727734225-image.jpg%3Falt%3Dmedia%26token%3D72676afc-4798-4c1f-84cb-9d934324b647&w=1920&q=75"
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    rating: 4.9,
    students: 2345,
    duration: 12,
    price: 129.99,
    level: "Intermediate",
    image: "https://www.jointaro.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftech-career-growth.appspot.com%2Fo%2Fevent_images%252F1727734225-image.jpg%3Falt%3Dmedia%26token%3D72676afc-4798-4c1f-84cb-9d934324b647&w=1920&q=75"
  },
  {
    id: 3,
    title: "iOS App Development",
    category: "Mobile Development",
    rating: 4.7,
    students: 1876,
    duration: 10,
    price: 89.99,
    level: "Beginner",
    image: "https://www.jointaro.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftech-career-growth.appspot.com%2Fo%2Fevent_images%252F1727734225-image.jpg%3Falt%3Dmedia%26token%3D72676afc-4798-4c1f-84cb-9d934324b647&w=1920&q=75"
  },
  {
    id: 4,
    title: "Blockchain Essentials",
    category: "Cryptocurrency",
    rating: 4.6,
    students: 987,
    duration: 6,
    price: 79.99,
    level: "Intermediate",
    image: "https://www.jointaro.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftech-career-growth.appspot.com%2Fo%2Fevent_images%252F1727734225-image.jpg%3Falt%3Dmedia%26token%3D72676afc-4798-4c1f-84cb-9d934324b647&w=1920&q=75"
  }
]

// @ts-expect-error-ignore
const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className="relative overflow-hidden h-[60vh] bg-gradient-to-br from-indigo-100 to-indigo-100 border-2 border-transparent hover:border-indigo-300 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={openSans.style}
      >
        <div className="p-6">
          <motion.div
            className="mb-4 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              height={192}
              width={300}
              src={course.image}
              alt={course.title}
              className="w-full object-cover"
            />
          </motion.div>
          <Badge className="absolute top-4 right-4 bg-white/80 hover:bg-white/70 text-indigo-700 backdrop-blur-sm">
            {course.category}
          </Badge>
          <h3 className="text-lg font-semibold mb-2 text-indigo-900" style={jost.style}>{course.title}</h3>
          <div className="flex items-center mb-2">
            <Star className="w-5 h-5 text-yellow-500 mr-1" />
            <span className="text-sm font-medium text-gray-600">{course.rating}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{course.duration} weeks</span>
            </div>
          </div>
          <div className="text-lg font-semibold text-indigo-700 mb-4" style={lato.style}>${course.price}</div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: isHovered ? 5 : 50, opacity: isHovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              className="w-full bg-gradient-to-r from-indigo-400 to-indigo-400 text-white hover:from-indigo-500 hover:to-indigo-500 transition-all duration-300"
            >
              Enroll Now <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-200/40 to-indigo-200/40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: isHovered ? 1.2 : 1,
            x: isHovered ? 10 : 0,
            y: isHovered ? -10 : 0,
          }}
        />
        <motion.div
          className="absolute -top-2 -right-2 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: isHovered ? 1.2 : 1,
            x: isHovered ? -10 : 0,
            y: isHovered ? 10 : 0,
          }}
        />
      </Card>
    </motion.div>
  )
}

// @ts-expect-error-ignore
const FilterBadge = ({ label, isSelected, onClick }) => (
  <Badge
    variant={isSelected ? "default" : "outline"}
    className={`mr-2 mb-2 cursor-pointer transition-all duration-300 ${isSelected
      ? "bg-indigo-500 hover:bg-indigo-600 text-white"
      : "bg-white text-indigo-700 hover:bg-indigo-100"
      }`}
    onClick={onClick}
  >
    {label}
  </Badge>
)

export default function CourseCardsWithBadgeFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLevels, setSelectedLevels] = useState([])
  const [priceRange, setPriceRange] = useState([200])
  const [durationRange, setDurationRange] = useState([12])
  const [filteredCourses, setFilteredCourses] = useState(courses)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // @ts-expect-error-ignore
  const categories = [...new Set(courses.map(course => course.category))]
  // @ts-expect-error-ignore
  const levels = [...new Set(courses.map(course => course.level))]

  useEffect(() => {
    const results = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      // @ts-expect-error-ignore
      (selectedCategories.length === 0 || selectedCategories.includes(course.category)) &&
      // @ts-expect-error-ignore
      (selectedLevels.length === 0 || selectedLevels.includes(course.level)) &&
      course.price <= priceRange[0] && course.price <= 200 &&
      course.duration <= durationRange[0] && course.duration <= 12
    )
    setFilteredCourses(results)
  }, [searchTerm, selectedCategories, selectedLevels, priceRange, durationRange])

  // @ts-expect-error-ignore
  const toggleCategory = (category) => {
    // @ts-expect-error-ignore
    setSelectedCategories(prev =>
      // @ts-expect-error-ignore
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }
  // @ts-expect-error-ignore
  const toggleLevel = (level) => {
    // @ts-expect-error-ignore
    setSelectedLevels(prev =>
      // @ts-expect-error-ignore
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-24">
      <h2 className="text-4xl md:ml-96 font-bold text-center text-indigo-900" style={jost.style}>Software Engineering Career Courses</h2>
      <p className="text-center text-lg text-indigo-500 mb-12 ml-96" style={lato.style}>
        On-demand courses dedicated to helping you navigate your software engineering career
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          className={`lg:w-1/4 h-[74vh] overflow-hidden top-[20%] fixed left-2 -translate-y-1/2 bg-gradient-to-tr from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg ${!isSidebarOpen && 'hidden lg:block'}`}
          initial={false}
          animate={{ x: isSidebarOpen ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={lato.style}
        >
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-indigo-900 border-b border-indigo-200 w-full" >Filters</h3>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-indigo-800">Categories</h4>
              <div className="flex flex-wrap">
                {categories.map(category => (
                  <FilterBadge
                    key={category}
                    label={category}
                    // @ts-expect-error-ignore
                    isSelected={selectedCategories.includes(category)}
                    onClick={() => toggleCategory(category)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-indigo-800">Levels</h4>
              <div className="flex flex-wrap">
                {levels.map(level => (
                  <FilterBadge
                    key={level}
                    label={level}
                    // @ts-expect-error-ignore
                    isSelected={selectedLevels.includes(level)}
                    onClick={() => toggleLevel(level)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-indigo-800">Price Range</h4>
              <Slider
                min={0}
                max={200}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>$ 200</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-indigo-800">Duration (weeks)</h4>
              <Slider
                min={0}
                max={12}
                step={1}
                value={durationRange}
                onValueChange={setDurationRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{durationRange[0]} weeks</span>
                <span>12 weeks</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:w-[74%] ml-auto">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={jost.style}
                className="pl-10 bg-gradient-to-tl from-blue-100 to-blue-50  outline-none focus-visible:ring-0 text-indigo-400 hover:border-indigo-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>

          <AnimatePresence>
            {filteredCourses.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </motion.div>
            ) : (
              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-blue-300 h-[60vh] flex items-center justify-center text-2xl mt-8"
                style={jost.style}
              >
                No courses found. Try adjusting your filters.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}