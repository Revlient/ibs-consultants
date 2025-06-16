import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-32 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/projects" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % project.galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + project.galleryImages.length) % project.galleryImages.length);
  };

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${project.imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-6">{project.shortDescription}</p>
            <span className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-6">{project.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-semibold text-gray-900">{project.location}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="text-lg font-semibold text-gray-900">{project.year}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="text-lg font-semibold text-gray-900">{project.client}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="text-lg font-semibold text-gray-900">{project.area}</p>
                </div>
              </div>
            </div>
            
            {/* Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
              <div className="space-y-4">
                {project.specifications.map((spec, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                    <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                    <p className="text-gray-900 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in a similar project?</h3>
              <p className="text-gray-700 mb-6">
                Contact our team to discuss your project requirements or schedule a consultation.
              </p>
              <Link
                to="/#contact"
                className="block text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pb-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:bg-gray-800 rounded-full"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-gray-800 rounded-full"
            onClick={prevImage}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] px-4">
            <img 
              src={project.galleryImages[activeImageIndex]} 
              alt={`${project.title} - Image ${activeImageIndex + 1}`} 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-gray-800 rounded-full"
            onClick={nextImage}
          >
            <ArrowRight className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
            {activeImageIndex + 1} / {project.galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;