import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

type ProjectCategory =
  | "All"
  | "Hospitals"
  | "Apartments"
  | "Commercial"
  | "Auditorium"
  | "Educational"
  | "Office"
  | "Showroom"
  | "Hotels and Resorts"
  | "Factories";

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Explore our portfolio of exceptional MEP consultancy projects across
            diverse sectors, including high-rise buildings, commercial spaces,
            and infrastructure.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <CategoryButton
            category="All"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("All")}
          />
          <CategoryButton
            category="Hospitals"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Hospitals")}
          />
          <CategoryButton
            category="Apartments"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Apartments")}
          />
          <CategoryButton
            category="Commercial"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Commercial")}
          />
          <CategoryButton
            category="Auditorium"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Auditorium")}
          />
          <CategoryButton
            category="Educational"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Educational")}
          />
          <CategoryButton
            category="Office"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Office")}
          />
          <CategoryButton
            category="Showroom"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Showroom")}
          />
          <CategoryButton
            category="Hotels and Resorts"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Hotels and Resorts")}
          />
          <CategoryButton
            category="Factories"
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory("Factories")}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              description={project.shortDescription}
              location={project.location}
              year={project.year}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

interface CategoryButtonProps {
  category: ProjectCategory;
  selectedCategory: string;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  selectedCategory,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        selectedCategory === category
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {category}
    </button>
  );
};

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: number;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  description,
  location,
  year,
  imageUrl,
}) => {
  return (
    <Link to={`/projects/${id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
        <div className="h-64 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
            <span>{location}</span>
            {/* <span>{year}</span> */}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          {/* <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex items-center text-blue-600 font-medium">
            View Project Details
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectsPage;
