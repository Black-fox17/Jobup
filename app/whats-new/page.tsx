"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const updates = [
  {
    date: "July 1, 2024",
    title: "New Feature: AI-Powered Resume Analysis",
    description:
      "We've launched a new feature that uses AI to analyze your resume and provide feedback on how to improve it for Applicant Tracking Systems (ATS).",
    tags: ["New Feature", "AI", "Resume"],
  },
  {
    date: "June 15, 2024",
    title: "Partnership with Top Tech Companies",
    description:
      "We've partnered with several top tech companies to bring you exclusive job listings and opportunities.",
    tags: ["Partnerships", "Jobs"],
  },
  {
    date: "May 30, 2024",
    title: "Website Redesign",
    description:
      "We've redesigned our website to provide a better user experience and make it easier to find the information you need.",
    tags: ["Website", "UI/UX"],
  },
];

export default function WhatsNewPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What's New at Job Up
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with the latest news, features, and announcements from the Job Up team.
          </p>
        </div>

        <div className="space-y-12">
          {updates.map((update, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{update.date}</p>
                  <div className="flex space-x-2">
                    {update.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900 pt-2">{update.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section id="cta" className="mt-20">
          <div className="bg-red-50 rounded-xl py-16">
            <div className="relative container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Elevate Your Career?
              </h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                Join Job Up today and take the next step towards your dream job.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Get Started for Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
