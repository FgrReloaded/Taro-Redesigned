"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { Raleway, Open_Sans, Poppins } from "next/font/google"
import { Separator } from "./ui/separator"

const raleway = Raleway({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "600", "700"]
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "600", "800"]
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "600", "800", "900"]
})

const faqs = [
  {
    question: "Where can I stay?",
    answer: "We have partnered with several hotels in the area to provide discounted rates for attendees. You can find a list of recommended accommodations on our website.",
    category: "Where can I stay?",
  },
  {
    question: "What time does the event start?",
    answer: "The event officially begins at 9:00 AM on the first day. We recommend arriving at least 30 minutes early for registration and networking.",
    category: "In-person experience",
  },
]

const categories = [
  "All",
  "Where can I stay?",
  "In-person experience",
  "Tickets",
  "Venue",
  "Workshop sessions",
  "Networking & afterparty",
  "Other",
]

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <div className="p-4 min-h-screen mt-32 z-50">
      <h1 className="text-8xl font-bold text-left w-3/5 mx-auto text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-700" style={poppins.style}>FAQ</h1>
      <Separator className="w-3/5 mt-4 mb-8 mx-auto h-[1px] bg-fuchsia-300 "  />
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm ${activeCategory === category
                  ? "bg-gradient-to-tr from-violet-50 via-fuchsia-100 to-fuchsia-200 text-violet-900"
                  : "text-violet-900 bg-transparent"
                }`}
             style={raleway.style}
             >
              {category}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-tl from-fuchsia-50 via-white to-fuchsia-50 rounded-2xl shadow-md overflow-hidden group">
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <span className="text-lg px-8 text-violet-950" style={openSans.style}>{faq.question}</span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="p-2 flex rounded-full border border-fuchsia-200 group-hover:bg-fuchsia-200 transition">
                    {expandedIndex === index ? (
                      <Minus className="w-6 h-6 text-purple-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-purple-500" />
                    )}
                  </span>
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="py-6 px-12 text-violet-900" style={poppins.style}>{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}