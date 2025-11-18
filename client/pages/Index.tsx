import { useState } from "react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Code,
  Briefcase,
  Palette,
  TrendingUp,
  Brain,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const mockCourses = [
  {
    id: "1",
    title: "Python for Beginners",
    instructor: "John Smith",
    rating: 4.8,
    reviews: 2543,
    students: 45320,
    lessons: 24,
    difficulty: "Beginner" as const,
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    price: 49,
  },
  {
    id: "2",
    title: "Web Development Masterclass",
    instructor: "Sarah Johnson",
    rating: 4.9,
    reviews: 3201,
    students: 67890,
    lessons: 48,
    difficulty: "Intermediate" as const,
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=400&h=300&fit=crop",
    price: 79,
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    instructor: "Mike Davis",
    rating: 4.7,
    reviews: 1856,
    students: 32450,
    lessons: 32,
    difficulty: "Intermediate" as const,
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    price: 59,
  },
  {
    id: "4",
    title: "Advanced JavaScript Patterns",
    instructor: "Alex Chen",
    rating: 4.9,
    reviews: 2120,
    students: 28930,
    lessons: 40,
    difficulty: "Advanced" as const,
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f70674a78?w=400&h=300&fit=crop",
    price: 89,
  },
  {
    id: "5",
    title: "Digital Marketing Strategy",
    instructor: "Emma Wilson",
    rating: 4.6,
    reviews: 1432,
    students: 19840,
    lessons: 28,
    difficulty: "Beginner" as const,
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    price: 39,
  },
  {
    id: "6",
    title: "Data Science with Python",
    instructor: "Dr. Lisa Anderson",
    rating: 4.8,
    reviews: 2789,
    students: 54320,
    lessons: 56,
    difficulty: "Advanced" as const,
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-adf4e7bc7501?w=400&h=300&fit=crop",
    price: 99,
  },
];

const categories = [
  { id: "tech", name: "Technology", icon: "💻", courseCount: 128 },
  { id: "business", name: "Business", icon: "💼", courseCount: 95 },
  { id: "design", name: "Design", icon: "🎨", courseCount: 67 },
  { id: "marketing", name: "Marketing", icon: "📊", courseCount: 54 },
  { id: "personal", name: "Personal Development", icon: "🚀", courseCount: 89 },
  { id: "health", name: "Health & Wellness", icon: "💪", courseCount: 43 },
];

const testimonials = [
  {
    name: "Alex Rodriguez",
    role: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content:
      "This platform completely transformed my career. I went from complete beginner to landing a dev job in 6 months!",
    rating: 5,
  },
  {
    name: "Jessica Lee",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content:
      "The courses are incredibly well-structured. The instructors are experienced and the community support is amazing.",
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content:
      "I started my own business based on the skills I learned here. Best investment I ever made in myself.",
    rating: 5,
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {t("hero.headline")}
                <br />
                <span className="text-blue-500">
                  {t("hero.highlightedText")}
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("hero.subtext")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t("hero.browseCoursesBtn")}{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  {t("hero.startLearningBtn")} <Zap className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <p className="text-gray-600">{t("hero.activeStudents")}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <p className="text-gray-600">{t("hero.expertCourses")}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.8★</div>
                  <p className="text-gray-600">{t("hero.averageRating")}</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:block relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full"></div>
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-100 rounded-full"></div>
              <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder={t("search.placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("categories.title")}
            </h2>
            <p className="text-gray-600 text-lg">{t("categories.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("popularCourses.title")}
            </h2>
            <p className="text-gray-600 text-lg">
              {t("popularCourses.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                {t("popularCourses.viewAll")}{" "}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-gray-600 text-lg">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-blue-100 text-lg mb-8">{t("cta.subtitle")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                {t("cta.startFreeTrialBtn")}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-white hover:bg-white hover:text-blue-500"
              >
                {t("cta.explorePricingBtn")}
              </Button>
            </div>

            <p className="text-blue-100 text-sm mt-6">{t("cta.note")}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
