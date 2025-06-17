import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowRight } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  // Get sample projects from different categories
  const featuredProjects = projects.filter((_, index) => index < visibleCount);

  const showMore = () => {
    setVisibleCount(Math.min(visibleCount + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional MEP consultancy projects that
            showcase our technical expertise, innovation, and commitment to
            building performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              description={project.shortDescription}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {visibleCount < 7 ? (
            <button
              onClick={showMore}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Load More
            </button>
          ) : (
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  description,
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
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex items-center text-blue-600 font-medium">
            View Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsSection;
