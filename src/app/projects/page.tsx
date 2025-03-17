"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Filter } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { projects } from "../../../data/projects";

interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  location: string;
}

const Projects = () => {
  const [statusFilter, setStatusFilter] = useState<string>("All");

  // Get unique categories and statuses from the static projects data
  const categories: string[] = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const statuses: string[] = [
    "All",
    ...new Set(projects.map((project) => project.status)),
  ];

  // Filter projects based on category and status
  const filterProjectsByStatus = (
    projects: Project[],
    category: string,
    status: string
  ): Project[] => {
    let filtered: Project[] = projects;

    if (category !== "all" && category !== "All") {
      filtered = filtered.filter(
        (project) => project.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (status !== "All") {
      filtered = filtered.filter((project) => project.status === status);
    }

    return filtered;
  };

  return (
    <div className="bg-secondary/10 pt-20">
      <div className="container-custom py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our collection of premium properties designed with luxury,
            comfort, and elegance in mind.
          </p>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 px-4 sm:px-0">
              <div className="overflow-x-auto pb-2 sm:pb-0">
                <TabsList className="bg-background border h-auto inline-flex">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category.toLowerCase()}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  className="border rounded-md px-3 py-1 bg-background text-sm"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {categories.map((category) => (
              <TabsContent
                key={category.toLowerCase()}
                value={category.toLowerCase()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
                  {filterProjectsByStatus(projects, category, statusFilter).map(
                    (project) => (
                      <div
                        key={project.id}
                        className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                          <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            width={500}
                            height={300}
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
                          <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-medium mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {project.location}
                          </p>
                          <Link
                            href={`/projects/${project.id}`}
                            className="btn-gold inline-block text-sm sm:text-base"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {filterProjectsByStatus(projects, category, statusFilter)
                  .length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      No projects found with the selected filters.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;
