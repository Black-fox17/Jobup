"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, FileCheck, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AtsCheckerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setScore(null);
    }
  };

  const handleCheckScore = () => {
    if (!file) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockScore = Math.floor(Math.random() * 31) + 70; // Score between 70 and 100
      setScore(mockScore);
      setLoading(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 80) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-red-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">ATS Resume Checker</CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              Upload your resume to see how well it scores against Applicant Tracking Systems.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="resume-upload" className="font-semibold text-gray-700">Upload Resume (.pdf, .docx)</label>
                <Input id="resume-upload" type="file" onChange={handleFileChange} className="file:text-red-600 file:font-semibold hover:file:bg-red-50" />
              </div>
              {file && (
                <div className="flex items-center text-sm text-gray-500">
                  <FileCheck className="w-4 h-4 mr-2 text-green-500" />
                  <span>{file.name}</span>
                </div>
              )}
              <Button onClick={handleCheckScore} disabled={!file || loading} className="w-full bg-red-600 hover:bg-red-700 text-white">
                {loading ? "Analyzing..." : "Check Score"}
              </Button>
            </div>
            {score !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-center">Your Score</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className={`text-7xl font-bold ${getScoreColor(score)}`}>
                      {score}
                    </div>
                    <p className="text-gray-600 mt-2">
                      {score >= 90 ? "Excellent! Your resume is well-optimized." : score >= 80 ? "Good, but could be improved." : "Needs improvement for ATS."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
            <div className="mt-6 text-xs text-gray-500 flex items-start">
              <AlertCircle className="w-4 h-4 mr-2 mt-0.5" />
              <span>This is a simulation. The score is for demonstration purposes and does not guarantee job application success.</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
