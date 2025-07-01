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

  // Check if we're on a page that should have dark text initially
  const shouldUseDarkText = isScrolled || location.pathname !== '/';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="images/logo.jpg" className='h-16 w-16' alt="" />
            <div className='flex flex-col '>
              <span className={`ml-2 text-xl font-bold leading-none ${shouldUseDarkText ? 'text-black' : 'text-white'}`}>IBS Consultants</span> 
              <span className={`ml-2 text-lg font-semibold leading-none ${shouldUseDarkText ? 'text-black' : 'text-white'}`}>Intelligent Building Systems</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/#" label="Home" shouldUseDarkText={shouldUseDarkText} onClick={handleNavClick} />
            <NavLink to="/#About" label="About" shouldUseDarkText={shouldUseDarkText} onClick={handleNavClick} />
            <NavLink to="/#Services" label="Services" shouldUseDarkText={shouldUseDarkText} onClick={handleNavClick} />
            <NavLink to="/projects" label="Projects" shouldUseDarkText={shouldUseDarkText} onClick={handleNavClick} />
            <NavLink to="/#Clients" label="Our clients" shouldUseDarkText={shouldUseDarkText} onClick={handleNavClick} />
            <NavLink to="/#Contact" label="Contact" shouldUseDarkText={shouldUseDarkText} onClick={handleNavClick} />
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
              <MobileNavLink to="/#" label="Home" onClick={handleNavClick} />
              <MobileNavLink to="/#About" label="About" onClick={handleNavClick} />
              <MobileNavLink to="/#Services" label="Services" onClick={handleNavClick} />
              <MobileNavLink to="/projects" label="Projects" onClick={handleNavClick} />
              <MobileNavLink to="/#Clients" label="Clients" onClick={handleNavClick} />
              <MobileNavLink to="/#Contact" label="Contact" onClick={handleNavClick} />
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
  shouldUseDarkText: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, shouldUseDarkText, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to.includes('#') && location.hash === to.substring(to.indexOf('#')));

  return (
    <a
      href={to}
      onClick={(e) => onClick(e, to)}
      className={`font-bold transition-colors duration-300 ${
        isActive
          ? 'text-blue-600'
          : shouldUseDarkText
          ? 'text-gray-800 hover:text-blue-600'
          : 'text-white hover:text-blue-600'
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