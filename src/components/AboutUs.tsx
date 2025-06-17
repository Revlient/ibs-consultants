import React from "react";
import { Award, Users, Clock, Building } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
            <p className="text-gray-700">
              At IBS Consultants, we specialize in delivering innovative and
              high-quality Electro-Mechanical (MEP) systems consultancy that
              enhance the performance, safety, and sustainability of buildings
              and infrastructure. Our mission is clear—to design and implement
              MEP systems that are not only efficient and reliable but also
              aligned with the evolving needs of modern environments.
            </p>
            <p className="text-gray-700">
              We operate with a dedicated team of experts in mechanical,
              electrical, plumbing, fire protection, and building automation
              systems. This integrated approach ensures every project benefits
              from precision engineering, smart design, and seamless
              coordination across disciplines.
            </p>
            <p className="text-gray-700">
              What truly defines us is our commitment to technical excellence,
              sustainability, and client satisfaction. We believe that every
              system we design should serve as a benchmark for innovation,
              energy efficiency, and long-term performance.
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
