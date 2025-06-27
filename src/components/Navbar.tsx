import React, { useState, useEffect } from 'react';
import { Menu, X, Building } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    if (to.includes('#')) {
      const sectionId = to.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(to);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="images/logo.jpg" className='h-12 w-12' alt="" />
            <div>
              <span className={`ml-2 text-lg font-bold ${isScrolled ? 'text-black' : ''} text-white `}>IBS Consultants</span> <br />
            <span className={`ml-2 text-xs font-semibold ${isScrolled ? 'text-black' : ''} text-white `}>Intelligent Building System</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" isScrolled={isScrolled} onClick={handleNavClick} />
            <NavLink to="/#about" label="About" isScrolled={isScrolled} onClick={handleNavClick} />
            <NavLink to="/#services" label="Services" isScrolled={isScrolled} onClick={handleNavClick} />
            <NavLink to="/projects" label="Projects" isScrolled={isScrolled} onClick={handleNavClick} />
            <NavLink to="/#clients" label="Our clients" isScrolled={isScrolled} onClick={handleNavClick} />
            <NavLink to="/#contact" label="Contact" isScrolled={isScrolled} onClick={handleNavClick} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-400 rounded-lg p-2 mt-4 pb-4">
            <div className="flex flex-col space-y-4"> 
              <MobileNavLink to="/" label="Home" onClick={handleNavClick} />
              <MobileNavLink to="/#about" label="About" onClick={handleNavClick} />
              <MobileNavLink to="/#services" label="Services" onClick={handleNavClick} />
              <MobileNavLink to="/projects" label="Projects" onClick={handleNavClick} />
              <MobileNavLink to="/#clients" label="Clients" onClick={handleNavClick} />
              <MobileNavLink to="/#contact" label="Contact" onClick={handleNavClick} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to.includes('#') && location.hash === to.substring(to.indexOf('#')));

  return (
    <a
      href={to}
      onClick={(e) => onClick(e, to)}
      className={`font-medium transition-colors duration-300 ${
        isActive
          ? 'text-blue-600'
          : isScrolled
          ? 'text-gray-800 hover:text-blue-600'
          : 'text-gray-800 hover:text-blue-600'
      }`}
    >
      {label}
    </a>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to.includes('#') && location.hash === to.substring(to.indexOf('#')));

  return (
    <a
      href={to}
      onClick={(e) => onClick(e, to)}
      className={`block py-2 px-4 font-medium ${
        isActive
          ? 'text-blue-600 bg-blue-50 rounded-md'
          : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50 hover:rounded-md'
      }`}
    >
      {label}
    </a>
  );
};

export default Navbar;