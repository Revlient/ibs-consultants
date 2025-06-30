import React from "react";
import { Award, Users, Clock, Building } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="About" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading Electro-Mechanical (MEP) systems consultancy dedicated to
            engineering innovative, sustainable, and high-performance building
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-700 text-justify">
              IBS CONSULTANTS are an established consortium of multidisciplined
              professional engineers working together with the aim and objective
              of providing total consultancy for building services from a single
              window. Thus we are in a position to make significant
              contributions to our projects:
            </p>
            <p className="text-gray-700 text-justify">
              Our strength lies in the apex body of competent engineers
              qualified and well experienced in India and abroad. The curriculum
              vitae of key personnel of consultants team stands testimony to the
              above facts. Our expert team of engineers designing and supporting
              the interdependent building services as a single unit solutions
              expert agency confers many benefits to vital project. From
              superior and more effective co-ordination it is often possible to
              achieve better optimization and design logistics commencing from
              project conceptualization to services integration and
              implementation.
            </p>
            <p className="text-gray-700 font-medium">
              "RELATIONSHIP AND TRUST ARE OUR FOUNDATIONS OF GROWTH"
            </p>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working together"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden md:block">
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg">
                <p className="text-xl font-semibold">25+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <StatCard
            icon={<Building className="h-12 w-12 text-blue-600" />}
            number="1000+"
            label="Projects Completed"
          />
          <StatCard
            icon={<Users className="h-12 w-12 text-blue-600" />}
            number="10+"
            label="Engineers"
          />
          <StatCard
            icon={<Clock className="h-12 w-12 text-blue-600" />}
            number="25+"
            label="Years of Experience"
          />
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-3xl font-bold text-gray-900 mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default AboutUs;
