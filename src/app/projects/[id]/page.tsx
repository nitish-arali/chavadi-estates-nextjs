"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Check } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import Image from "next/image";
import { projects } from "../../../../data/projects"; // Import static projects data
import FullScreenImageViewer from "../../../../components/FullScreenImageViewer";
import ProjectInquiryForm from "../../../../components/ProjectEnquiryForm";

// Define the type for params
type ProjectDetailParams = {
  id: string;
};

// Define props type for the component
interface ProjectDetailProps {
  params: Promise<ProjectDetailParams>;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ params }) => {
  const router = useRouter();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"gallery" | "layout-plan">(
    "gallery"
  ); // Track active tab

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  // Unwrap the params Promise with React.use()
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Find the project by ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container-custom py-16 min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <button onClick={() => router.push("/projects")} className="btn-gold">
          View All Projects
        </button>
      </div>
    );
  }

  // Mock data that would normally come from the API
  const projectDetails = {
    description:
      "Chavadi Lotus Layout offers an unparalleled living experience, combining tranquility with modern sophistication. Thoughtfully designed with precision and style, this exceptional development blends contemporary architecture with nature’s serenity. Featuring spacious plots, lush greenery, and state-of-the-art amenities, it’s the perfect place for those seeking a peaceful yet luxurious lifestyle. The layout is designed to provide both comfort and functionality, creating a harmonious environment that caters to the needs of every resident. Welcome to a life of elegance and convenience at Chavadi Lotus Layout.",
    features: [
      "Gated Community with Controlled Access",
      "Modern Leisure and Fitness Amenities",
      "Well-connected Roads and Pathways",
      "Children’s Play Area",
      "Spacious Plots with Lush Greenery",
      "Outdoor Relaxation Areas amidst Gardens",
      "24/7 security system",
    ],
    specifications: {
      size: "2,05,000 sq ft",
      "30/40 Plots": "40",
      "30/50 Plots": "50",
      Gardens: "5",
      "Completion Year": "2025",
    },
    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "Clubhouse",
      "Children's Play Area",
      "Landscaped Gardens",
      "Walking Trails",
      "Outdoor Relaxation Areas",
      "24/7 Security Surveillance",
      "Gated Community Access",
    ],
    gallery: [
      "https://ik.imagekit.io/chavadiestates2025/gallery5.jpg?updatedAt=1742200761023",
      "https://ik.imagekit.io/chavadiestates2025/gallery6.jpg?updatedAt=1742200760777",
      "https://ik.imagekit.io/chavadiestates2025/gallery2.jpg?updatedAt=1742200760646",
      "https://ik.imagekit.io/chavadiestates2025/gallery1.jpg?updatedAt=1742200760830",
      "https://ik.imagekit.io/chavadiestates2025/gallery3.jpg?updatedAt=1742200760554",
      "https://ik.imagekit.io/chavadiestates2025/gallery7.jpg?updatedAt=1742200760826",
      "https://ik.imagekit.io/chavadiestates2025/gallery4.jpg?updatedAt=1742200760454",
    ],
    layoutPlan: [
      {
        image:
          "https://ik.imagekit.io/chavadiestates2025/IMG-20250317-WA0042.jpg?updatedAt=1742200780097",
      },
      {
        image:
          "https://ik.imagekit.io/chavadiestates2025/IMG-20250317-WA0013.jpg?updatedAt=1742200780488",
      },
      {
        image:
          "https://ik.imagekit.io/chavadiestates2025/IMG-20250317-WA0027.jpg?updatedAt=1742200780044",
      },
    ],
  };

  return (
    <>
      <div className="bg-secondary/5 py-16">
        <div className="container-custom">
          <button
            onClick={() => router.push("/projects")}
            className="flex items-center text-estate-600 hover:text-estate-800 mb-4  mt-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </button>
          {resolvedParams.id === "Chavadi-Lotus-Pond" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  {project.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center text-estate-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-estate-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Completion: 2025</span>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded text-white
${project.status === "Ongoing" ? "bg-blue-500" : "bg-orange-500"}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h2 className="text-xl font-serif font-medium mb-4">
                    Description
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {projectDetails.description}
                  </p>

                  <h3 className="font-medium mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {projectDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-gold-600 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-medium mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {Object.entries(projectDetails.specifications).map(
                      ([key, value]) => (
                        <div key={key}>
                          <p className="text-sm text-muted-foreground">{key}</p>
                          <p className="font-medium">{value}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Tabs
                    defaultValue="gallery"
                    onValueChange={(value) =>
                      setActiveTab(value as "gallery" | "layout-plan")
                    }
                  >
                    <TabsList className="w-full justify-start mb-6">
                      <TabsTrigger value="gallery">Gallery</TabsTrigger>
                      <TabsTrigger value="layout-plan">Layout Plan</TabsTrigger>
                      <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    </TabsList>

                    <TabsContent value="gallery">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projectDetails.gallery.map((image, index) => (
                          <div
                            key={index}
                            className="aspect-square overflow-hidden rounded-md cursor-pointer"
                            onClick={() => openImageViewer(index)}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              width={500}
                              height={500}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="layout-plan">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projectDetails.layoutPlan.map((plan, index) => (
                          <div
                            key={index}
                            className="border rounded-md overflow-hidden cursor-pointer"
                            onClick={() => openImageViewer(index)}
                          >
                            <Image
                              src={plan.image}
                              alt={"layout plan"}
                              width={500}
                              height={300}
                              className="w-full h-48 object-cover"
                            />
                            {/* <div className="p-4">
                              <h4 className="font-medium">{plan.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {plan.size}
                              </p>
                            </div> */}
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="amenities">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {projectDetails.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-4 w-4 text-gold-600 mr-2" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                  <h2 className="text-xl font-serif font-medium mb-6">
                    Interested in this property?
                  </h2>
                  <ProjectInquiryForm projectName={project.title} />

                  <div className="mt-8 pt-6 border-t">
                    <h3 className="font-medium mb-3">Need more information?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Contact our sales team for more details about this
                      property.
                    </p>
                    <a
                      href="tel:+919986689669"
                      className="flex items-center justify-center w-full border border-estate-600 text-estate-600 py-2 rounded-md hover:bg-estate-600 hover:text-white transition-colors"
                    >
                      Call Us: +91 99866 89669
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="container-custom py-16 min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">
                  Project Coming Soon...
                </h2>
                <p className="text-muted-foreground mb-8 text-center px-12">
                  This project is part of our upcoming portfolio. We are in the
                  planning phase and will be revealing more details in the near
                  future. Stay tuned as we prepare to introduce this exceptional
                  new development, designed with our unwavering commitment to
                  quality, innovation, and customer satisfaction.
                </p>
                <button
                  onClick={() => router.push("/projects")}
                  className="btn-gold"
                >
                  View All Projects
                </button>
              </div>

              <div className="mt-5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
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

                  <div className="w-full md:w-auto">
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="px-4 py-3 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors whitespace-nowrap">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-white/70 text-sm mt-2">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {isViewerOpen && (
        <FullScreenImageViewer
          images={
            activeTab === "gallery"
              ? projectDetails.gallery
              : projectDetails.layoutPlan.map((plan) => plan.image)
          }
          initialIndex={currentImageIndex}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default ProjectDetail;
