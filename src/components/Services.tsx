import React from "react";
import { services } from "../data/services";
import * as LucideIcons from "lucide-react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electro-mechanical (MEP) solutions tailored to your
            project’s vision, function, and performance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
}) => {
  // Dynamically render the icon from lucide-react
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

  return (
    <div id="Services" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group ">
      <div className="h-48 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
        {/* <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div> */}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {IconComponent && (
            <IconComponent className="h-6 w-6 text-blue-600 mr-2" />
          )}
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-700">
          {description.length > 150
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      </div>
    </div>
  );
};

export default Services;
