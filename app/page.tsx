import Image from "next/image"
import {
  ChevronDown,
  Star,
  Briefcase,
  Users,
  Search,
  FileText,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Job Up</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#for-employers" className="text-gray-700 hover:text-gray-900">
                For Employers
              </a>
              <a href="#for-job-seekers" className="text-gray-700 hover:text-gray-900">
                For Job Seekers
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                Login
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-8 bg-red-50 text-red-600 border-red-200">
            Your Career, Elevated
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connecting Talent with Opportunity
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Job Up is the bridge between ambitious professionals and innovative companies. We find the perfect match for long-term success.
          </p>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Find Talent
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700">
              Find a Job
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section id="for-employers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">For Employers</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Access a pool of pre-vetted, high-quality candidates ready to drive your business forward.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Candidates</h3>
              <p className="text-gray-600">We source and vet the best talent, so you don't have to. Save time and resources with our curated candidate pool.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Streamlined Hiring</h3>
              <p className="text-gray-600">Our platform simplifies the hiring process, from posting jobs to managing applications and scheduling interviews.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Our consultants have deep knowledge of various industries, ensuring you find the right fit for your company culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Job Seekers Section */}
      <section id="for-job-seekers" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">For Job Seekers</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Let us help you find a career that aligns with your skills and aspirations. Your dream job is within reach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume Assistance</h3>
              <p className="text-gray-600">Our experts will help you craft a compelling resume that stands out to employers.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Job Matching</h3>
              <p className="text-gray-600">We match your skills and preferences with the best job opportunities available.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Coaching</h3>
              <p className="text-gray-600">Get expert advice on interview preparation, salary negotiation, and career growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section id="featured-jobs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Jobs</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Explore some of the exciting opportunities we are currently offering.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Senior Frontend Developer</CardTitle>
                <p className="text-sm text-gray-500">Tech Solutions Inc. - San Francisco, CA</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">We are looking for an experienced Frontend Developer to join our dynamic team.</p>
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">Apply Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Product Manager</CardTitle>
                <p className="text-sm text-gray-500">Innovate Co. - New York, NY</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Seeking a visionary Product Manager to lead our next generation of products.</p>
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">Apply Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>UX/UI Designer</CardTitle>
                <p className="text-sm text-gray-500">Creative Minds LLC - Remote</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Join our team to create beautiful and intuitive user experiences.</p>
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Job Up made our hiring process incredibly efficient. We found the perfect candidate in just two weeks!"
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Alex Rivera"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Alex Rivera</div>
                  <div className="text-gray-600 text-sm">HR Manager at Tech Solutions Inc.</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As a job seeker, I felt supported throughout the entire process. I landed my dream job thanks to their guidance."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Samantha Lee"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Samantha Lee</div>
                  <div className="text-gray-600 text-sm">Senior Frontend Developer</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The quality of candidates presented by Job Up was exceptional. They truly understand our needs."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Michael Chen"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-gray-600 text-sm">CTO at Innovate Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                How does Job Up screen candidates?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                We have a rigorous screening process that includes resume review, technical assessments, and behavioral interviews to ensure we only present the most qualified candidates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Is there a fee for job seekers?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                No, our services are completely free for job seekers. Our mission is to help you find your next career opportunity without any financial burden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                What industries do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                We specialize in a wide range of industries, including technology, finance, healthcare, and creative services. Our consultants have expertise in various sectors to meet your specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-900">Job Up</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">For Employers</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Post a Job</a></li>
                <li><a href="#" className="hover:text-gray-900">Search Candidates</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">For Job Seekers</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Find Jobs</a></li>
                <li><a href="#" className="hover:text-gray-900">Resume Builder</a></li>
                <li><a href="#" className="hover:text-gray-900">Career Advice</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-g"C:\Users\owner\Desktop\2025\jobup\app\page.tsx"ray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Social</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 Job Up Career Consulting. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}