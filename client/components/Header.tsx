import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              L
            </div>
            <span className="hidden sm:inline text-gray-900">LearnHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/courses" className="text-gray-700 hover:text-blue-500 transition">
              Courses
            </Link>
            <a href="#categories" className="text-gray-700 hover:text-blue-500 transition">
              Categories
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 transition">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <Link
              to="/courses"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <a href="#categories" className="block text-gray-700 hover:text-blue-500 transition">
              Categories
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-500 transition">
              About
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-500 transition">
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
