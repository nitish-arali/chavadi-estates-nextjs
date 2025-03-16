"use client"; // Mark this as a Client Component

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Copy,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { articles } from "../../../../data/articles"; // Import static articles data

// Define proper types for params
type BlogDetailParams = {
  id: string;
};

const BlogDetail = ({ params }: { params: Promise<BlogDetailParams> }) => {
  const router = useRouter();
  // Use React.use to unwrap the params Promise
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  // Find the article by ID
  const article = articles.find((a) => a.id === id);

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article?.title,
          text: article?.excerpt,
          url: window.location.href,
        })
        .catch((error) => {
          console.log("Error sharing", error);
        });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  if (!article) {
    return (
      <div className="container-custom py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Article Not Found</h2>
          <p className="mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-emerald-50 to-white overflow-hidden mt-8">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-emerald-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute top-40 right-0 w-60 h-60 bg-amber-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="container-custom py-16 md:py-24 relative">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors hover:scale-105 transform duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Category badge */}
          <div className="mb-4">
            <Link
              href={`/blog/category/${article.category.toLowerCase()}`}
              className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
            >
              {article.category}
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight text-emerald-900">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="h-4 w-4 mr-2 text-emerald-500" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <User className="h-4 w-4 mr-2 text-emerald-500" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center mb-2">
              <Tag className="h-4 w-4 mr-2 text-emerald-500" />
              <span>{article.category}</span>
            </div>
          </div>

          {/* Social engagement buttons */}
          <div className="flex items-center space-x-4 mb-8">
            <button className="text-slate-500 hover:text-emerald-600 flex items-center text-sm transition-colors">
              <Heart className="h-4 w-4 mr-1" />
              <span>Like</span>
            </button>
            <button className="text-slate-500 hover:text-emerald-600 flex items-center text-sm transition-colors">
              <Bookmark className="h-4 w-4 mr-1" />
              <span>Save</span>
            </button>
            <button className="text-slate-500 hover:text-emerald-600 flex items-center text-sm transition-colors">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>Comment</span>
            </button>
            <button
              className="text-slate-500 hover:text-emerald-600 flex items-center text-sm transition-colors ml-auto"
              onClick={handleShareClick}
            >
              <Share2 className="h-4 w-4 mr-1" />
              <span>Share</span>
            </button>
          </div>

          <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              priority // Load the main image eagerly
            />
          </div>

          <div className="prose prose-lg max-w-none prose-emerald prose-headings:font-serif prose-headings:font-semibold prose-headings:text-emerald-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800 prose-p:leading-relaxed prose-p:text-gray-700 prose-p:text-lg prose-strong:text-emerald-900 prose-strong:font-medium prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-blockquote:border-l-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-emerald-800">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Article footer with tags and share */}
          <div className="mt-12 pt-8 border-t border-emerald-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-sm text-muted-foreground">
                  Filed under:
                </span>
                <Link
                  href={`/blog/category/${article.category.toLowerCase()}`}
                  className="ml-2 inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm hover:bg-emerald-200 transition-colors"
                >
                  {article.category}
                </Link>
              </div>

              <div className="flex space-x-4">
                <button
                  className="inline-flex items-center text-muted-foreground hover:text-emerald-600 transition-colors"
                  onClick={handleShareClick}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </button>
                <button
                  className="inline-flex items-center text-muted-foreground hover:text-emerald-600 transition-colors"
                  onClick={handleShareClick}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-12 p-6 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-800">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium mb-2">
                  {article.author}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Real estate expert with over 10 years of experience in luxury
                  property development. Passionate about sustainable
                  architecture and innovative design solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/blog")}
              className="text-center btn-gold"
            >
              Back to Articles
            </button>
          </div>
          {/* Related articles section with improved styling */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-serif font-medium mb-8 title-with-line">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Link href="#" key={i} className="group">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 flex-grow">
                      <div className="text-xs text-emerald-600 mb-2 font-medium">
                        Sustainability
                      </div>
                      <h4 className="font-medium mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                        Related Article Title {i}
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
                        A brief excerpt from the related article that gives
                        readers an idea of what the content is about...
                      </p>
                      <div className="text-emerald-600 text-sm font-medium group-hover:text-emerald-800 transition-colors mt-auto inline-flex items-center">
                        Read More
                        <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
