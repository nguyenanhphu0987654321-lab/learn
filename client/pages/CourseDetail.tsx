import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Star,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

const mockCourseDetail = {
  id: "1",
  title: "Python for Beginners",
  instructor: "John Smith",
  instructorImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  instructorBio:
    "Senior Software Engineer with 10+ years of experience in Python development.",
  rating: 4.8,
  reviews: 2543,
  students: 45320,
  lessons: 24,
  hours: 18,
  difficulty: "Beginner",
  thumbnail:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
  price: 49,
  description:
    "Learn Python from scratch with this comprehensive beginner course. Master the fundamentals and build real-world applications.",
  whatYouWillLearn: [
    "Python syntax and basic concepts",
    "Working with variables and data types",
    "Control flow and loops",
    "Functions and modules",
    "File handling and exceptions",
    "Object-oriented programming basics",
  ],
  curriculum: [
    {
      section: "Getting Started",
      lessons: [
        { title: "Introduction to Python", duration: "15 min" },
        { title: "Setting up Your Environment", duration: "20 min" },
        { title: "Your First Python Program", duration: "25 min" },
      ],
    },
    {
      section: "Python Fundamentals",
      lessons: [
        { title: "Variables and Data Types", duration: "30 min" },
        { title: "Operators and Expressions", duration: "25 min" },
        { title: "String Manipulation", duration: "35 min" },
      ],
    },
    {
      section: "Control Flow",
      lessons: [
        { title: "If Statements", duration: "30 min" },
        { title: "Loops and Iteration", duration: "40 min" },
        { title: "Break and Continue", duration: "20 min" },
      ],
    },
  ],
  reviews: [
    {
      author: "Alex Rodriguez",
      rating: 5,
      text: "Excellent course! The instructor explains everything clearly and the examples are very practical.",
      date: "2 weeks ago",
    },
    {
      author: "Jessica Chen",
      rating: 4,
      text: "Great course overall. Would have liked more exercises in the intermediate sections.",
      date: "1 month ago",
    },
  ],
};

export default function CourseDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const course = mockCourseDetail;

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-gray-300 text-lg mb-6">{course.description}</p>

              {/* Rating and Stats */}
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-400">
                    ({course.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-400">Instructor</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full sm:w-auto sticky bottom-4 sm:sticky-none"
              >
                {t("courseDetail.enrollNow")} - ${course.price}
              </Button>
            </div>

            {/* Right Thumbnail */}
            <div className="hidden md:block">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:w-auto md:grid-cols-3 mb-8 bg-gray-100">
              <TabsTrigger value="overview">
                {t("courseDetail.overview")}
              </TabsTrigger>
              <TabsTrigger value="curriculum">
                {t("courseDetail.curriculum")}
              </TabsTrigger>
              <TabsTrigger value="reviews">
                {t("courseDetail.reviews")}
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("courseDetail.whatYouWillLearn")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("courseDetail.courseDetails")}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-blue-500 mb-2">
                      {course.hours}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t("courseDetail.hoursOfContent")}
                    </p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500 mb-2">
                      {course.lessons}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t("popularCourses.lessons")}
                    </p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500 mb-2">
                      {course.difficulty}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t("courseDetail.difficulty")}
                    </p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500 mb-2">
                      {t("courseDetail.certificate")}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t("courseDetail.uponCompletion")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructor Profile */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("courseDetail.aboutTheInstructor")}
                </h2>
                <div className="flex gap-6">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {course.instructor}
                    </h3>
                    <p className="text-gray-600">{course.instructorBio}</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="space-y-4">
              {course.curriculum.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      {section.section}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                      >
                        <span className="text-gray-700">{lesson.title}</span>
                        <span className="text-gray-500 text-sm">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-6">
              {course.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 last:border-b-0"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.author}
                      </h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sticky Enroll Button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg md:hidden">
        <div className="container mx-auto px-4 py-4">
          <Button className="w-full">Enroll Now - ${course.price}</Button>
        </div>
      </div>
    </Layout>
  );
}
