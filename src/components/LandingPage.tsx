import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaCouch, FaLaptop, FaBlender, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="text-center p-12 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Doe Web - Post and Find Items Easily</h1>
        <p className="mt-4 text-lg">Give away or find appliances, furniture, and more.</p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200">Get Started</Button>
      </header>
      
      {/* Categories Section */}
      <section className="p-12">
        <h2 className="text-3xl font-bold text-center">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <Card className="p-4 text-center">
            <FaCouch className="text-4xl mx-auto text-blue-500" />
            <CardContent>Furniture</CardContent>
          </Card>
          <Card className="p-4 text-center">
            <FaLaptop className="text-4xl mx-auto text-green-500" />
            <CardContent>Electronics</CardContent>
          </Card>
          <Card className="p-4 text-center">
            <FaBlender className="text-4xl mx-auto text-red-500" />
            <CardContent>Appliances</CardContent>
          </Card>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="p-12 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="mt-6 space-y-4 max-w-xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-lg shadow">
            <p className="text-lg font-medium">1. Sign up and create a free account</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-lg shadow">
            <p className="text-lg font-medium">2. Post an ad with photos and description</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-lg shadow">
            <p className="text-lg font-medium">3. Connect with people interested in your items</p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="p-6 bg-blue-600 text-white text-center">
        <p>&copy; 2025 Doe Web. All rights reserved.</p>
      </footer>
    </div>
  );
}
