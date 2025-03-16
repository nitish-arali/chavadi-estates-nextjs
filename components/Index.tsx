"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import TestimonialSlider from "./TestimonialSlider";
import VideoGallery from "./VideoGallery";
import { projects, testimonials } from "../data/projects";
import { articles } from "../data/articles";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  MapPin,
  Leaf,
  Settings,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
} from "lucide-react";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

const Index = () => {
  const heroSlides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      title: "Luxury Living Redefined",
      subtitle: "Premium Properties",
      buttonText: "Explore Properties",
      buttonLink: "/projects",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      title: "Exceptional Living Spaces",
      subtitle: "Architectural Excellence",
      buttonText: "Our Projects",
      buttonLink: "/projects",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      title: "Where Dreams Take Shape",
      subtitle: "Crafting Excellence",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  ];

  const [isVisible, setIsVisible] = useState({
    about: false,
    features: false,
    news: false,
  });

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const newsPerPage = 3;
  const totalPages = Math.ceil(articles.length / newsPerPage);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      const featuresSection = document.getElementById("features-section");
      const newsSection = document.getElementById("news-section");

      if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect();
        if (aboutPosition.top < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, about: true }));
        }
      }

      if (featuresSection) {
        const featuresPosition = featuresSection.getBoundingClientRect();
        if (featuresPosition.top < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, features: true }));
        }
      }

      if (newsSection) {
        const newsPosition = newsSection.getBoundingClientRect();
        if (newsPosition.top < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, news: true }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextNewsSlide = () => {
    setCurrentNewsIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevNewsSlide = () => {
    setCurrentNewsIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const currentNewsArticles = articles.slice(
    currentNewsIndex * newsPerPage,
    (currentNewsIndex + 1) * newsPerPage
  );

  return (
    <>
      <Hero slides={heroSlides} />

      {/* About Section */}
      <section
        id="about-section"
        className="section-padding bg-gradient-to-b from-white to-emerald-50"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`
          lg:transition-all lg:duration-700 lg:delay-100 lg:transform
          ${
            isVisible.about
              ? "lg:opacity-100 lg:translate-x-0 opacity-100"
              : "lg:opacity-0 lg:-translate-x-10 opacity-100"
          }
        `}
            >
              <span className="text-emerald-600 uppercase tracking-wider text-sm font-medium">
                About Chavadi Estates
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 title-with-line after:bg-emerald-500">
                Building Excellence Since 2017
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Chavadi Estates, we believe in creating living spaces that
                inspire. With our unwavering commitment to quality and
                innovation, we have established ourselves as a premier real
                estate builders and developers specializing in luxury
                properties.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our team of visionary architects, skilled craftsmen, and
                dedicated professionals work collaboratively to deliver
                properties that exceed expectations. From concept to completion,
                we maintain the highest standards in every project we undertake.
              </p>
              <Link
                href="/about"
                className="btn-primary bg-emerald-600 hover:bg-emerald-700"
              >
                Learn More About Us
              </Link>
            </div>

            <div
              className={`
          relative 
          lg:transition-all lg:duration-700 lg:delay-300 lg:transform
          ${
            isVisible.about
              ? "lg:opacity-100 lg:translate-x-0 opacity-100"
              : "lg:opacity-0 lg:translate-x-10 opacity-100"
          }
        `}
            >
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="Chavadi Estates Building"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="text-4xl font-serif font-bold text-emerald-600">
                      8
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Years of Excellence</h4>
                    <p className="text-sm text-slate-600">
                      Delivering premium real estate solutions since 2017
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-80 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="text-4xl font-serif font-bold text-emerald-600">
                      24/7
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Customer Support</h4>
                    <p className="text-sm text-slate-600">
                      Showcasing client service commitment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects projects={projects} />

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Features Section - Why Choose Us */}
      <section
        id="features-section"
        className="section-padding bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-600 uppercase tracking-wider text-sm font-medium">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold title-with-line-center after:bg-emerald-500">
              The Chavadi Difference
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart from other developers.
              Discover the unique advantages of choosing Chavadi Estates for
              your next home or investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Craftsmanship",
                description:
                  "We use only the finest materials and employ skilled craftsmen to ensure superior build quality in every project.",
                icon: <Award className="h-6 w-6" />,
                delay: 100,
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                title: "Innovative Design",
                description:
                  "Our award-winning architects create spaces that blend functionality with aesthetic appeal, setting new standards in design excellence.",
                icon: <Settings className="h-6 w-6" />,
                delay: 300,
                color: "bg-teal-50 text-teal-600",
              },
              {
                title: "Prime Locations",
                description:
                  "We carefully select locations that offer convenience, growth potential, and a high quality of life for our residents.",
                icon: <MapPin className="h-6 w-6" />,
                delay: 500,
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                title: "Sustainable Development",
                description:
                  "Environmental responsibility is at the core of our projects, with green building practices and energy-efficient systems.",
                icon: <Leaf className="h-6 w-6" />,
                delay: 700,
                color: "bg-teal-50 text-teal-600",
              },
              {
                title: "Transparent Processes",
                description:
                  "From booking to possession, we maintain clear communication and transparency throughout your journey with us.",
                icon: <CheckCircle2 className="h-6 w-6" />,
                delay: 900,
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                title: "After-Sales Support",
                description:
                  "Our relationship doesn't end with the handover. Our dedicated team provides comprehensive after-sales service.",
                icon: <HeartHandshake className="h-6 w-6" />,
                delay: 1100,
                color: "bg-teal-50 text-teal-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all duration-700 transform hover:shadow-md hover:-translate-y-1 ${
                  isVisible.features
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div
                  className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News and Insights Section */}
      <section id="news-section" className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <div>
              <span className="text-emerald-600 uppercase tracking-wider text-sm font-medium">
                Stay Informed
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold title-with-line after:bg-emerald-500">
                News & Insights
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl">
                Stay updated with the latest trends, market insights, and
                developments in the real estate industry.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/blog"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
              >
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 transform ${
                isVisible.news
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {currentNewsArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{article.author.split(" ")[0]}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-serif font-medium mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <Link
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevNewsSlide}
                    className="p-2 rounded-full border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 transition-colors"
                    aria-label="Previous news articles"
                  >
                    <ChevronLeft className="h-5 w-5 text-slate-600" />
                  </button>

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNewsIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentNewsIndex
                          ? "bg-emerald-600"
                          : "bg-slate-300"
                      }`}
                      aria-label={`Go to news page ${index + 1}`}
                    />
                  ))}

                  <button
                    onClick={nextNewsSlide}
                    className="p-2 rounded-full border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 transition-colors"
                    aria-label="Next news articles"
                  >
                    <ChevronRight className="h-5 w-5 text-slate-600" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider testimonials={testimonials} />

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-b from-white to-emerald-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-emerald-600 uppercase tracking-wider text-sm font-medium">
                Get In Touch
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 title-with-line after:bg-emerald-500">
                Let's Start Your Journey
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you're looking for your dream home or considering an
                investment, our team is here to assist you every step of the
                way. Reach out to us today to schedule a consultation or
                property viewing.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-lg font-medium mb-4">Visit Our Office</h4>
                <div className="mb-4">
                  <GoogleMap />
                </div>
                <p className="text-slate-600 mb-4">
                  <strong>Chavadi Estates Private Limited</strong>, <br />
                  #63/1, Hoodi Main Road, <br />
                  Surya Layout, Ayyappa Nagar, <br />
                  Beside Adyar Ananda Bhavan - A2B,
                  <br />K R Pura, Bengaluru, Karnataka-560036
                </p>

                <h4 className="text-lg font-medium mb-1">Office Hours</h4>
                <div className="grid grid-cols-2 gap-4 text-slate-600">
                  <div>
                    <span className="font-medium">Monday - Sunday</span>
                    <p>9:00 AM - 9:00 PM</p>
                  </div>
                  {/* <div>
                    <span className="font-medium">Saturday</span>
                    <p>10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <span className="font-medium">Sunday</span>
                    <p>Closed</p>
                  </div> */}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
              >
                View Detailed Contact Information{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
