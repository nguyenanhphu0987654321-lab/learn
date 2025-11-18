import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="font-bold text-white text-lg">LearnHub</span>
            </div>
            <p className="text-sm text-gray-400">
              Learn anything, become anything. Start your learning journey today.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-white mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  All Courses
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  New
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 LearnHub. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
