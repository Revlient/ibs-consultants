import React from "react";
import { Link } from "react-router-dom";
import {
  Building,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/public/images/logo2.jpg" alt="" />
              {/* <span className="ml-2 text-xl font-bold text-white">IBS Consultants</span> */}
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering spaces that perform and endure through innovative
              electro-mechanical (MEP) systems and sustainable engineering
              solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/#about" label="About Us" />
              <FooterLink to="/#services" label="Services" />
              <FooterLink to="/projects" label="Projects" />
              <FooterLink to="/#testimonials" label="Testimonials" />
              <FooterLink to="/#contact" label="Contact" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/#services" label="Electrical Systems" />
              <FooterLink to="/#services" label="Fire Protection Systems" />
              <FooterLink to="/#services" label="HVAC Systems" />
              <FooterLink to="/#services" label="ELV Systems" />
              <FooterLink to="/#services" label="Plumbing Systems" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  M/S Intelligent Building Systems Door no: 35/1181 A1, CCRA-19,{" "}
                  <br />
                  Changampuzha road, Edapally P.O., Kochi-682024
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91-484-2338962</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  ibsconsultants@yahoo.co.uk
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} IBS Consultants. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default Footer;
