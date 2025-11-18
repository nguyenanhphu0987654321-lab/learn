import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  image,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 flex-1 line-clamp-4">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-600 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
