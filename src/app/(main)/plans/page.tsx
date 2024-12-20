'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Check, X } from 'lucide-react'
import { Jost, Lato, Open_Sans } from "next/font/google"

const jost = Jost({ subsets: ['latin'], weight: ["400", "600", "800"] })
const lato = Lato({ subsets: ['latin'], weight: ["400", "700"] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ["400", "700"] })

const plans = [
  {
    name: "Basic",
    monthlyPrice: 19.99,
    yearlyPrice: 199.99,
    features: {
      "Access to all basic courses": true,
      "24/7 support": true,
      "Monthly webinars": true,
      "Basic course completion certificate": true,
      "Access to advanced courses": false,
      "1-on-1 mentoring": false,
      "Job placement assistance": false,
      "Weekly webinars": false,
      "Advanced course completion certificate": false,
      "Priority support": false,
      "Daily webinars": false,
      "Professional course completion certificate": false,
      "Unlimited 1-on-1 mentoring": false,
      "Custom curriculum design": false,
      "Access to exclusive content": false,
      "VIP support": false,
    }
  },
  {
    name: "Pro",
    monthlyPrice: 49.99,
    yearlyPrice: 499.99,
    features: {
      "Access to all basic courses": true,
      "24/7 support": true,
      "Monthly webinars": true,
      "Basic course completion certificate": true,
      "Access to advanced courses": true,
      "1-on-1 mentoring": "2 hours/month",
      "Job placement assistance": false,
      "Weekly webinars": true,
      "Advanced course completion certificate": true,
      "Priority support": true,
      "Daily webinars": false,
      "Professional course completion certificate": false,
      "Unlimited 1-on-1 mentoring": false,
      "Custom curriculum design": false,
      "Access to exclusive content": false,
      "VIP support": false,
    }
  },
  {
    name: "Enterprise",
    monthlyPrice: 99.99,
    yearlyPrice: 999.99,
    features: {
      "Access to all basic courses": true,
      "24/7 support": true,
      "Monthly webinars": true,
      "Basic course completion certificate": true,
      "Access to advanced courses": true,
      "1-on-1 mentoring": true,
      "Job placement assistance": true,
      "Weekly webinars": true,
      "Advanced course completion certificate": true,
      "Priority support": true,
      "Daily webinars": true,
      "Professional course completion certificate": true,
      "Unlimited 1-on-1 mentoring": true,
      "Custom curriculum design": true,
      "Access to exclusive content": true,
      "VIP support": true,
    }
  }
]

// @ts-expect-error-ignore
const PlanCard = ({ plan, isPopular, isYearly }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <Card className="p-6 flex flex-col h-full relative overflow-hidden">
      {isPopular && (
        <Badge className="absolute top-0 right-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-2 py-1 rounded-bl-lg">
          Most Popular
        </Badge>
      )}
      <h3 className="text-2xl font-bold text-violet-900 mb-2" style={jost.style}>{plan.name}</h3>
      <div className="text-4xl font-bold text-violet-700 mb-4" style={jost.style}>
        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
        <span className="text-lg font-normal text-violet-600">/{isYearly ? 'year' : 'month'}</span>
      </div>
      {isYearly && (
        <Badge className="mb-4 bg-green-100 text-green-800">
          Save ${((plan.monthlyPrice * 12) - plan.yearlyPrice).toFixed(2)} a year
        </Badge>
      )}
      <ul className="mb-6 flex-grow">
        {Object.entries(plan.features).map(([feature, included], index) => (
          <li key={index} className={`flex items-center mb-2 ${included ? 'text-gray-700' : 'text-gray-400'}`}>
            {included ? (
              <Check className="w-5 h-5 text-green-500 mr-2" />
            ) : (
              <X className="w-5 h-5 mr-2" />
            )}
            <span style={openSans.style}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white">
        Choose {plan.name}
      </Button>
    </Card>
  </motion.div>
)

// @ts-expect-error-ignore
const ComparisonTable = ({ plans, isYearly }) => (
  <div className="overflow-x-auto mt-16 bg-fuchsia-50 p-4">
    <Table >
      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">Feature</TableHead>
          {/* @ts-expect-error-ignore */}
          {plans.map((plan, index) => (
            <TableHead key={index} className="text-center">{plan.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium" style={openSans.style}>Price</TableCell>
          {/* @ts-expect-error-ignore */}
          {plans.map((plan, index) => (
            <TableCell key={index} className="text-center font-bold text-violet-700">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/{isYearly ? 'year' : 'month'}
            </TableCell>
          ))}
        </TableRow>
        {Object.keys(plans[0].features).map((feature, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium" style={openSans.style}>{feature}</TableCell>
            {/* @ts-expect-error-ignore */}
            {plans.map((plan, planIndex) => (
              <TableCell key={planIndex} className="text-center">
                {typeof plan.features[feature] === 'boolean' ? (
                  plan.features[feature] ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className="text-violet-700" style={openSans.style}>{plan.features[feature]}</span>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
)

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="container mx-auto px-4 py-16 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-violet-900 mb-4" style={jost.style}>Choose Your Learning Journey</h1>
        <p className="text-center text-lg text-violet-700 mb-12" style={lato.style}>
          Unlock your potential with our flexible pricing plans
        </p>
      </motion.div>
      <div className="flex justify-center items-center mb-8">
        <Label htmlFor="pricing-toggle" className={`mr-2 ${isYearly ? 'text-gray-500' : 'text-violet-700 font-semibold'}`}>Monthly</Label>
        <Switch
          id="pricing-toggle"
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <Label htmlFor="pricing-toggle" className={`ml-2 ${isYearly ? 'text-violet-700 font-semibold' : 'text-gray-500'}`}>Yearly</Label>
        {isYearly && (
          <Badge className="ml-2 bg-green-100 text-green-800">Save up to 20%</Badge>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} isPopular={index === 1} isYearly={isYearly} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ComparisonTable plans={plans} isYearly={isYearly} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-center text-gray-600 mt-12" style={openSans.style}>
          All plans include a 14-day free trial. No credit card required.
        </p>
      </motion.div>
    </div>
  )
}