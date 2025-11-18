import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=400&h=300&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f70674a78?w=400&h=300&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1460925895917-adf4e7bc7501?w=400&h=300&fit=crop",
    price: 99,
  },
];

export default function Courses() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterDifficulty, setFilterDifficulty] = useState("all");

  let filteredCourses = [...mockCourses];

  // Filter by search query
  if (searchQuery) {
    filteredCourses = filteredCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter by difficulty
  if (filterDifficulty !== "all") {
    filteredCourses = filteredCourses.filter(
      (course) => course.difficulty === filterDifficulty
    );
  }

  // Sort
  if (sortBy === "rating") {
    filteredCourses.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "price-low") {
    filteredCourses.sort((a, b) => a.price! - b.price!);
  } else if (sortBy === "price-high") {
    filteredCourses.sort((a, b) => b.price! - a.price!);
  } else {
    filteredCourses.sort((a, b) => b.students - a.students);
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('coursesPage.title')}</h1>
          <p className="text-gray-600 text-lg">
            {t('coursesPage.subtitle', `Choose from ${mockCourses.length} expert-led courses`).replace('{count}', mockCourses.length.toString())}
          </p>
        </div>
      </section>

      {/* Filters and Courses */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  {t('coursesPage.filters')}
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('coursesPage.search')}
                  </label>
                  <Input
                    placeholder={t('coursesPage.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white"
                  />
                </div>

                {/* Difficulty */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('coursesPage.difficulty')}
                  </label>
                  <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('coursesPage.allLevels')}</SelectItem>
                      <SelectItem value="Beginner">{t('popularCourses.difficulty.beginner')}</SelectItem>
                      <SelectItem value="Intermediate">{t('popularCourses.difficulty.intermediate')}</SelectItem>
                      <SelectItem value="Advanced">{t('popularCourses.difficulty.advanced')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('coursesPage.sortBy')}
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">{t('coursesPage.mostPopular')}</SelectItem>
                      <SelectItem value="rating">{t('coursesPage.highestRated')}</SelectItem>
                      <SelectItem value="price-low">{t('coursesPage.priceLowToHigh')}</SelectItem>
                      <SelectItem value="price-high">{t('coursesPage.priceHighToLow')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('coursesPage.noResults')}
                  </h3>
                  <p className="text-gray-600">
                    {t('coursesPage.noResultsText')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
