import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurClients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Sample client logos - in a real application, these would be actual client logos
  const clients = [
    { name: "ABBAM", logo: "images/clients/LOGOS/ABBAM.avif" },
    { name: "ADLUX", logo: "images/clients/LOGOS/ADLUX.jpg" },
    { name: "ASIANET", logo: "images/clients/LOGOS/ASIANET.jpg" },
    {
      name: "AUTOBAHN TRUCKING",
      logo: "images/clients/LOGOS/AUTOBAHN TRUCKING.png",
    },
    { name: "BANK OF BARODA", logo: "images/clients/LOGOS/BANK OF BARODA.jpg" },
    {
      name: "BHIMA JEWELLERS",
      logo: "images/clients/LOGOS/BHIMA JEWELLERS.png",
    },
    { name: "BLESSHOMES", logo: "images/clients/LOGOS/BLESSHOMES.png" },
    { name: "BRIDGEWAY", logo: "images/clients/LOGOS/BRIDGEWAY.png" },
    { name: "CHAKOLAS", logo: "images/clients/LOGOS/CHAKOLAS.jpg" },
    { name: "CSB", logo: "images/clients/LOGOS/CSB.jpg" },
    { name: "DR SHENOYS CARE", logo: "images/clients/LOGOS/DR SHENOYS CARE.jpg" },
    { name: "FEDERAL BANK", logo: "images/clients/LOGOS/FEDERAL BANK.jpg" },
    { name: "GMA KOCHI", logo: "images/clients/LOGOS/GMA KOCHI.jpg" },
    { name: "HOLIDAY GROUP", logo: "images/clients/LOGOS/HOLIDAY GROUP.jpg" },
    {
      name: "HOTEL PRASANTHI",
      logo: "images/clients/LOGOS/HOTEL PRASANTHI.jpg",
    },
    { name: "IBS SOFTWARE", logo: "images/clients/LOGOS/IBSSOFTWARE.png" },
    { name: "INCHEON KIA", logo: "images/clients/LOGOS/INCHEON KIA.png" },
    { name: "INNOPOLIS", logo: "images/clients/LOGOS/INNOPOLIS.jpeg" },
    {
      name: "KENT CONSTRUCTIONS",
      logo: "images/clients/LOGOS/KENT CONSTRUCTIONS.jpg",
    },
    { name: "LUXON TATA", logo: "images/clients/LOGOS/LUXON TATA.jpg" },
    {
      name: "MANNAM MEMORIAL",
      logo: "images/clients/LOGOS/MANNAM MEMORIAL CONVENTION CENTER.png",
    },
    { name: "MARIAPPS", logo: "images/clients/LOGOS/MARIAPPS.png" },
    { name: "MOTORSPOT", logo: "images/clients/LOGOS/MOTORSPOT.jpg" },
    { name: "NCPL", logo: "images/clients/LOGOS/NCPL.png" },
    { name: "NIPPON TOYOTA", logo: "images/clients/LOGOS/NIPPON TOYOTA.jpg" },
    { name: "OCEANUS", logo: "images/clients/LOGOS/OCEANUS.jpg" },
    { name: "PARAYIL FOODS", logo: "images/clients/LOGOS/PARAYIL FOODS.jpg" },
    { name: "RAMADA RESORT", logo: "images/clients/LOGOS/RAMADA RESORT.jpg" },
    { name: "RDS", logo: "images/clients/LOGOS/RDS OLD.jpg" },
    {
      name: "SREEPAVANAPURI",
      logo: "images/clients/LOGOS/SREEPAVANAPURI APARTMENTS.jpg",
    },
    {
      name: "SUNDAR VENTURES",
      logo: "images/clients/LOGOS/SUNDAR VENTURES.png",
    },
    { name: "SUNPAUL", logo: "images/clients/LOGOS/SUNPAUL.jpg" },
    {
      name: "SYNTHITE REALTY",
      logo: "images/clients/LOGOS/SYNTHITE REALITY.jpg",
    },
    { name: "TMM", logo: "images/clients/LOGOS/TMM.jpg" },
    {
      name: "TRANSASIA CYBERPARK",
      logo: "images/clients/LOGOS/TRANSASIA CYBERPARK.png",
    },
    { name: "TRANSASIA", logo: "images/clients/LOGOS/TRANSASIA.jpg" },
    { name: "ULTIMA", logo: "images/clients/LOGOS/ULTIMA.jpg" },

    { name: "ABBAAM", logo: "images/clients/LOGOS/ABBAAM.png" },
  { name: "AHALYA EYE HOSPITAL FOUNDATION", logo: "images/clients/LOGOS/AHALYA EYE HOSPITAL FOUNDATION.jpg" },
  { name: "AIRTEL", logo: "images/clients/LOGOS/AIRTEL.jpg" },
  { name: "AKSA", logo: "images/clients/LOGOS/AKSA.png" },
  { name: "AMALA INSTITUTE OF MEDICAL SCIENCES", logo: "images/clients/LOGOS/AMALA INSTITUTE OF MEDICAL SCIENCES.jpg" },
  { name: "CAMELOT CONVENTION CENTER", logo: "images/clients/LOGOS/CAMELOT CONVENTION CENTER.jpg" },
  { name: "CARGOMAR", logo: "images/clients/LOGOS/CARGOMAR.png" },
  { name: "CMS", logo: "images/clients/LOGOS/CMS.jpg" },
  { name: "DREAMFLOWER", logo: "images/clients/LOGOS/DREAMFLOWER.jpeg" },
  { name: "EVM", logo: "images/clients/LOGOS/EVM.png" },
  { name: "FRANCIS ALUKKAS", logo: "images/clients/LOGOS/FRANCIS ALUKKAS.png" },
  { name: "GIRIDEEPAM CONVENTION CENTER", logo: "images/clients/LOGOS/GIRIDEEPAM CONVENTION CENTER.png" },
  { name: "ICDKOLLAM", logo: "images/clients/LOGOS/ICDKOLLAM.png" },
  { name: "INSIGHT MEDIA CITY", logo: "images/clients/LOGOS/INSIGHT MEDIA CITY.png" },
  { name: "JAYALAKSHMI", logo: "images/clients/LOGOS/JAYALAKSHMI.jpg" },
  { name: "JGT LIVING SPACES LOGO", logo: "images/clients/LOGOS/JGT LIVING SPACES LOGO.jpg" },
  { name: "JOY ALLUKAS", logo: "images/clients/LOGOS/JOY ALLUKAS.jpg" },
  { name: "KAMCO", logo: "images/clients/LOGOS/KAMCO.png" },
  { name: "LEXUS KOCHI", logo: "images/clients/LOGOS/LEXUS KOCHI.png" },
  { name: "MACFAST", logo: "images/clients/LOGOS/MACFAST.jpg" },
  { name: "NM ROYAL COUNTY", logo: "images/clients/LOGOS/NM ROYAL COUNTY.jpg" },
  { name: "REGANT LAKE HOTEL", logo: "images/clients/LOGOS/REGANT LAKE HOTEL.png" },
  { name: "SKYLINE", logo: "images/clients/LOGOS/SKYLINE.png" },
  { name: "SMART ENGINEERING DESIGN SOLUTIONS", logo: "images/clients/LOGOS/SMART ENGINEERING DESIGN SOLUTIONS.png" },
  { name: "TIERRA FOODS", logo: "images/clients/LOGOS/TIERRA FOODS.jpg" }
  ];

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(clients.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    let interval: number | undefined;

    if (autoplay) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, autoplay]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  const getCurrentSlideClients = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return clients.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="Clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Clients
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with industry-leading companies and
            organizations who trust us with their most important projects.
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Client Logos Slider */}
          <div className="overflow-hidden bg-white shadow-lg rounded-2xl py-16 px-12">
            <div className="flex items-center justify-between">
              {getCurrentSlideClients().map((client, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="flex-1 flex justify-center group cursor-pointer"
                >
                  {/* Logo Container with perfect consistent sizing */}
                  <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-blue-300 group-hover:scale-105 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain  transition-all duration-300"
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100%',
                          maxHeight: '100%',
                        }}
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                              <span class="text-gray-600 font-semibold text-xs md:text-sm text-center px-2 leading-tight">${client.name}</span>
                            </div>`;
                          }
                        }}
                      />
                    </div>
                    
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Client names row - shown below logos */}
            <div className="flex items-center justify-between mt-6">
              {getCurrentSlideClients().map((client, index) => (
                <div
                  key={`name-${currentIndex}-${index}`}
                  className="flex-1 flex justify-center"
                >
                  <div className="text-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs md:text-sm font-medium text-gray-600 leading-tight px-2">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 bg-white hover:bg-blue-600 text-gray-700 hover:text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-200"
            aria-label="Previous clients"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 bg-white hover:bg-blue-600 text-gray-700 hover:text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-200"
            aria-label="Next clients"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-10"
                    : "bg-gray-300 hover:bg-blue-400 w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;