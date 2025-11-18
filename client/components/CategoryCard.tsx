import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: string;
  name: string;
  icon: ReactNode;
  courseCount: number;
}

export default function CategoryCard({
  id,
  name,
  icon,
  courseCount,
}: CategoryCardProps) {
  return (
    <Link to={`/courses?category=${id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center cursor-pointer h-full flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-3xl">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-600">
            {courseCount} {courseCount === 1 ? "course" : "courses"}
          </p>
        </div>
      </div>
    </Link>
  );
}
