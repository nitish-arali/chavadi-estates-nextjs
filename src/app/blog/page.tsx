"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  Search,
  ChevronRight,
} from "lucide-react";
import { articles } from "../../../data/articles"; // Import static articles data
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const articlesPerPage = 6;

  const [formData, setFormData] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);

  // Filter articles based on search query and category
  useEffect(() => {
    let filtered = [...articles];

    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (article) => article.category === activeCategory
      );
    }

    setFilteredArticles(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, activeCategory]);

  // Get all unique categories
  const categories = [
    "All",
    ...new Set(articles.map((article) => article.category)),
  ];

  // Get current articles based on pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Generate page numbers array
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Complex pagination with ellipsis
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "ellipsis", totalPages];
    } else if (currentPage >= totalPages - 2) {
      return [
        1,
        "ellipsis",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      return [
        1,
        "ellipsis",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "ellipsis",
        totalPages,
      ];
    }
  };

  const featuredArticle = articles.length > 0 ? articles[0] : null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already applied via useEffect
  };

  // Handle page click with proper type checking
  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      setCurrentPage(page);
    }
    // Do nothing if it's a string (ellipsis)
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/newsLetterSubscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      await response.json();

      setFormData({ email: "" });
      toast.success("Subscribed to newsletter successfully!", {
        position: "top-center",
        autoClose: 2000,        // 2 seconds
        hideProgressBar: true,
        pauseOnHover: false,    // don’t pause on hover
        pauseOnFocusLoss: false,// don’t pause when tab/window loses focus
        closeOnClick: false,    // clicking won’t close it early
        draggable: false,
      });
    }
    catch (error) {
      console.error("Error submitting email:", error);
      toast.error("Failed to subscribe. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      })
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-200/20 rounded-full translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-amber-200/20 rounded-full -translate-y-1/4 blur-3xl"></div> */}

      <div className="bg-gradient-to-b from-emerald-50/50 via-white to-white relative z-10 mt-8">
        <div className="container-custom py-16 md:py-24">
          {/* Header Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                <BookOpen className="h-4 w-4 mr-2" />
                Our Journal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              News & Insights
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stay updated with the latest news, trends, and insights from the
              real estate industry and Chavadi Estates.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Featured Article */}
          {featuredArticle &&
            searchQuery === "" &&
            activeCategory === "All" &&
            currentPage === 1 && (
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-emerald-50 to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-96 relative overflow-hidden">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      priority // Load featured image eagerly as it's visible above the fold
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-medium mb-3">
                        Featured
                      </span>
                      <span className="inline-block px-3 py-1 bg-white/90 text-emerald-800 rounded-full text-xs font-medium ml-2">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-emerald-600" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-emerald-600" />
                        <span>{featuredArticle.author}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 line-clamp-2 hover:text-emerald-700 transition-colors">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 line-clamp-3 text-lg">
                      {featuredArticle.excerpt}
                    </p>

                    <Link
                      href={`/blog/${featuredArticle.id}`}
                      className="inline-flex items-center px-5 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                  ? "bg-emerald-600 text-white"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="mb-16">
            {filteredArticles.length === 0 ? (
              <div className="text-center p-12 bg-emerald-50 rounded-lg border border-emerald-100">
                <h3 className="text-xl font-medium text-emerald-800 mb-2">
                  No Articles Found
                </h3>
                <p className="text-emerald-600 mb-4">
                  We couldn't find any articles matching your search criteria.
                </p>
                <button
                  className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-white/90 text-emerald-800 rounded-full text-xs font-medium backdrop-blur-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-emerald-600" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1 text-emerald-600" />
                          <span>{article.author.split(" ")[0]}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-serif font-bold mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground mb-5 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>

                      <Link
                        href={`/blog/${article.id}`}
                        className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-800 transition-colors"
                      >
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <div className="flex justify-center">
              <nav className="inline-flex items-center rounded-lg bg-white shadow-sm p-1 border border-slate-200">
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-md text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <ChevronRight className="h-5 w-5 rotate-180" />
                </button>

                {getPageNumbers().map((page, index) =>
                  page === "ellipsis" ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="w-10 h-10 flex items-center justify-center text-slate-400"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={`page-${page}`}
                      className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${currentPage === page
                        ? "bg-emerald-600 text-white"
                        : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
                        }`}
                      onClick={() => handlePageClick(page)}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  className="w-10 h-10 flex items-center justify-center rounded-md text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            </div>
          )}

          {/* Newsletter Subscription */}
          <div className="mt-24 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="text-white md:max-w-md">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="mb-0 text-white/80">
                  Get the latest articles, property listings, and exclusive
                  offers straight to your inbox.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="">
                <div className="w-full md:w-auto">
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-3 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-white/50"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <button type="submit" disabled={loading} className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-white/70 text-sm mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
