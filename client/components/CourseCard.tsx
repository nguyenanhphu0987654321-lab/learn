import { Link } from "react-router-dom";
import { Star, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  students: number;
  lessons: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
  price?: number;
}

export default function CourseCard({
  id,
  title,
  instructor,
  rating,
  reviews,
  students,
  lessons,
  difficulty,
  thumbnail,
  price,
}: CourseCardProps) {
  const { t } = useLanguage();

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <Link to={`/course/${id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden h-full">
        {/* Thumbnail */}
        <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{instructor}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm text-gray-900">
                  {rating}
                </span>
                <span className="text-sm text-gray-600">({reviews})</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>
                  {lessons} {t("popularCourses.lessons")}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{students.toLocaleString()}</span>
              </div>
            </div>

            {/* Difficulty */}
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}
              >
                {difficulty}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {price !== undefined && (
              <span className="font-bold text-lg text-gray-900">${price}</span>
            )}
            <Button size="sm" variant="outline">
              {t("coursesPage.viewCourse")}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
