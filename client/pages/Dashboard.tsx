import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Settings, LogOut, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const myCourses = [
  {
    id: "1",
    title: "Python for Beginners",
    instructor: "John Smith",
    progress: 65,
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=150&fit=crop",
  },
  {
    id: "2",
    title: "Web Development Masterclass",
    instructor: "Sarah Johnson",
    progress: 40,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=200&h=150&fit=crop",
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    instructor: "Mike Davis",
    progress: 85,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=150&fit=crop",
  },
];

const certificates = [
  {
    id: "1",
    course: "Python for Beginners",
    completedDate: "2024-01-15",
    certificateUrl: "#",
  },
  {
    id: "2",
    course: "Digital Marketing Basics",
    completedDate: "2023-12-20",
    certificateUrl: "#",
  },
];

export default function Dashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"courses" | "certificates" | "settings">("courses");

  const menuItems = [
    { id: "courses", label: t('dashboard.myCourses'), icon: BookOpen },
    { id: "certificates", label: t('dashboard.certificates'), icon: Award },
    { id: "settings", label: t('dashboard.settings'), icon: Settings },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('dashboard.welcomeTitle', 'Welcome back, {name}!').replace('{name}', 'Alex')} 👋
                </h1>
                <p className="text-gray-600">
                  {t('dashboard.welcomeSubtitle')}
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                <LogOut className="w-4 h-4" />
                {t('dashboard.signOut')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <div className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id as any)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                          activeTab === item.id
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* My Courses Tab */}
              {activeTab === "courses" && (
                <div>
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                        <p className="text-gray-600 text-sm">Courses Enrolled</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 mb-1">2</div>
                        <p className="text-gray-600 text-sm">Completed</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600 mb-1">63%</div>
                        <p className="text-gray-600 text-sm">Avg. Progress</p>
                      </div>
                    </div>

                    {/* Courses List */}
                    <div className="space-y-4">
                      {myCourses.map((course) => (
                        <div
                          key={course.id}
                          className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
                        >
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {course.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                              {course.instructor}
                            </p>

                            {/* Progress Bar */}
                            <div className="mb-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Progress</span>
                                <span className="text-sm font-semibold text-gray-900">
                                  {course.progress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-500 h-2 rounded-full transition-all"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Continue
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Certificates Tab */}
              {activeTab === "certificates" && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    My Certificates
                  </h2>

                  {certificates.length > 0 ? (
                    <div className="space-y-4">
                      {certificates.map((cert) => (
                        <div
                          key={cert.id}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
                        >
                          <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {cert.course}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Completed on{" "}
                                {new Date(cert.completedDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Certificate
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">
                        Complete courses to earn certificates
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>

                  <div className="space-y-6">
                    {/* Account Settings */}
                    <div className="pb-6 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Account Settings
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value="alex@example.com"
                            readOnly
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value="Alex Rodriguez"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="pb-6 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Preferences
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 rounded border-gray-300"
                          />
                          <span className="text-gray-700">
                            Email me about course recommendations
                          </span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 rounded border-gray-300"
                          />
                          <span className="text-gray-700">
                            Notify me when new courses are available
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Danger Zone */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Danger Zone</h3>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
