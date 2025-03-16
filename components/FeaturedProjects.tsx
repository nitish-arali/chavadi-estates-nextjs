import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  featured: boolean;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  const featuredProjects = projects.filter((project) => project.featured);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          entry.target.classList.add("opacity-100");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-gold-600 uppercase tracking-wider text-xs sm:text-sm font-medium">
            Discover Our Collection
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold title-with-line-center">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="opacity-0 transition-all duration-500"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white text-xs font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded text-white
                        ${
                          project.status === "Completed"
                            ? "bg-green-500"
                            : project.status === "Ongoing"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                        }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center text-estate-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-medium mb-4">
                    {project.title}
                  </h3>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-gold-600 font-medium hover:text-gold-800 transition-colors"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/projects" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
