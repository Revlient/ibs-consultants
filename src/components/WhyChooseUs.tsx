import React from 'react';
import { Shield, Target, Users, Clock, Award, Lightbulb } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence in architecture and construction with a team that delivers exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-blue-600" />}
            title="Quality Assurance"
            description="We maintain the highest standards of quality in every project, ensuring durability and excellence in execution."
          />
          <FeatureCard
            icon={<Target className="h-12 w-12 text-blue-600" />}
            title="On-Time Delivery"
            description="Our proven track record shows consistent on-time project completion without compromising quality."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-blue-600" />}
            title="Expert Team"
            description="Our team of skilled professionals brings decades of combined experience in architecture and construction."
          />
          <FeatureCard
            icon={<Clock className="h-12 w-12 text-blue-600" />}
            title="24/7 Support"
            description="We provide round-the-clock support to address any concerns and ensure smooth project execution."
          />
          <FeatureCard
            icon={<Award className="h-12 w-12 text-blue-600" />}
            title="Industry Recognition"
            description="Multiple award-winning projects showcase our commitment to excellence and innovation."
          />
          <FeatureCard
            icon={<Lightbulb className="h-12 w-12 text-blue-600" />}
            title="Innovative Solutions"
            description="We leverage cutting-edge technology and creative approaches to solve complex architectural challenges."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default WhyChooseUs;