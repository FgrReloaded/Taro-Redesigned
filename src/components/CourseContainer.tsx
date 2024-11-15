import React from 'react'
import CourseCard from './CourseCard'
import { Open_Sans } from "next/font/google"




const openSans = Open_Sans({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "600", "800"]
})

const CourseContainer = () => {
  return (
    <div className="flex justify-center items-center w-full bg-transparent py-20 flex-col gap-8">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-200 to-violet-400 dark:from-secondary dark:to-primary" style={openSans.style}>
        Popular Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <CourseCard
          category={"Web Development"}
          duration={"6 months"}
          instructor={"John Doe"}
          price={250}
          rating={4.5}
          students={200}
          title={"React Development"}
          description={"Learn React from scratch to advanced"}
          thumbnail={"/images/founder.jpg"}
        />
        <CourseCard
          category={"Web Development"}
          duration={"6 months"}
          instructor={"John Doe"}
          price={250}
          rating={4.5}
          students={200}
          title={"React Development"}
          description={"Learn React from scratch to advanced"}
          thumbnail={"/images/founder.jpg"}
        />
        <CourseCard
          category={"Web Development"}
          duration={"6 months"}
          instructor={"John Doe"}
          price={250}
          rating={4.5}
          students={200}
          title={"React Development"}
          description={"Learn React from scratch to advanced"}
          thumbnail={"/images/founder.jpg"}
        />
        <CourseCard
          category={"Web Development"}
          duration={"6 months"}
          instructor={"John Doe"}
          price={250}
          rating={4.5}
          students={200}
          title={"React Development"}
          description={"Learn React from scratch to advanced"}
          thumbnail={"/images/founder.jpg"}
        />
        <CourseCard
          category={"Web Development"}
          duration={"6 months"}
          instructor={"John Doe"}
          price={250}
          rating={4.5}
          students={200}
          title={"React Development"}
          description={"Learn React from scratch to advanced"}
          thumbnail={"/images/founder.jpg"}
        />
        <CourseCard
          category={"Web Development"}
          duration={"6 months"}
          instructor={"John Doe"}
          price={250}
          rating={4.5}
          students={200}
          title={"React Development"}
          description={"Learn React from scratch to advanced"}
          thumbnail={"/images/founder.jpg"}
        />
      </div>
    </div>
  )
}

export default CourseContainer