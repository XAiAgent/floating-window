'use client'

import { motion } from "framer-motion"
import { ArrowRight, Github, Twitter, Sparkles, Zap, Globe } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FlowDemo from "./components/flow-demo"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="relative">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-slate-900 text-2xl font-bold flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600" />
                Flow UI
              </Link>
              <div className="flex items-center gap-4">
                <Link href="https://github.com" target="_blank">
                  <Github className="w-6 h-6 text-slate-600 hover:text-purple-600 transition-colors" />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="w-6 h-6 text-slate-600 hover:text-purple-600 transition-colors" />
                </Link>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Launch App
                </Button>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Build Visual{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Workflows
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                Create interactive node-based interfaces with our powerful flow editor.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Flow Demo Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="h-[400px] rounded-xl overflow-hidden border border-slate-200 shadow-lg">
              <FlowDemo />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 rounded-2xl bg-white shadow-lg border border-slate-200"
                >
                  <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const features = [
  {
    icon: Sparkles,
    title: "Interactive Nodes",
    description: "Create dynamic node-based interfaces with drag and drop functionality.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "See changes instantly with our real-time visualization system.",
  },
  {
    icon: Globe,
    title: "Custom Nodes",
    description: "Build and style your own custom nodes to match your needs.",
  },
]

