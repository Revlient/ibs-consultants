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
    {
      name: "bhima-jewellers-seeklogo",
      logo: "images/clients/LOGOS/bhima-jewellers-seeklogo.eps",
    },
    { name: "BLESSHOMES", logo: "images/clients/LOGOS/BLESSHOMES.png" },
    { name: "BRIDGEWAY", logo: "images/clients/LOGOS/BRIDGEWAY.png" },
    { name: "CHAKOLAS", logo: "images/clients/LOGOS/CHAKOLAS.jpg" },
    { name: "CSB logo", logo: "images/clients/LOGOS/CSB logo.jpg" },
    { name: "CARE", logo: "images/clients/LOGOS/CARE.jpg" },
    {
      name: "DR SHENOYS DREAMFLOWER",
      logo: "images/clients/LOGOS/DR SHENOYS DREAMFLOWER.jpg",
    },
    { name: "FEDERAL BANK", logo: "images/clients/LOGOS/FEDERAL BANK.jpg" },
    { name: "GMA KOCHI", logo: "images/clients/LOGOS/GMA KOCHI.jpg" },
    { name: "HOLIDAY GROUP", logo: "images/clients/LOGOS/HOLIDAY GROUP.jpg" },
    {
      name: "PRASANTHI HOTEL",
      logo: "images/clients/LOGOS/PRASANTHI HOTEL.jpg",
    },
    { name: "IBS SOFTWARE", logo: "images/clients/LOGOS/IBS SOFTWARE.png" },
    { name: "INCHEON KIA", logo: "images/clients/LOGOS/INCHEON KIA.png" },
    { name: "INNOPOLIS", logo: "images/clients/LOGOS/INNOPOLIS.jpg" },
    {
      name: "KENT CONSTRUCTION Pvt Ltd",
      logo: "images/clients/LOGOS/KENT CONSTRUCTION Pvt Ltd.jpg",
    },
    { name: "KOCHI METRO", logo: "images/clients/LOGOS/KOCHI METRO.jpg" },
    { name: "KOCHI", logo: "images/clients/LOGOS/KOCHI.jpg" },
    { name: "LUXON TATA", logo: "images/clients/LOGOS/LUXON TATA.jpg" },
    {
      name: "MANNAM MEMORIAL CONVENTION CENTER",
      logo: "images/clients/LOGOS/MANNAM MEMORIAL CONVENTION CENTER.png",
    },
    { name: "MARIAPPS", logo: "images/clients/LOGOS/MARIAPPS.png" },
    { name: "MOTORSPOT", logo: "images/clients/LOGOS/MOTORSPOT.jpg" },
    { name: "NCPL", logo: "images/clients/LOGOS/NCPL.png" },
    { name: "NIPPON TOYOTA", logo: "images/clients/LOGOS/NIPPON TOYOTA.jpg" },
    { name: "OCEANUS", logo: "images/clients/LOGOS/OCEANUS.jpg" },
    { name: "PARAYIL FOODS", logo: "images/clients/LOGOS/PARAYIL FOODS.jpg" },
    { name: "RAMADA RESORT", logo: "images/clients/LOGOS/RAMADA RESORT.jpg" },
    { name: "RDS OLD", logo: "images/clients/LOGOS/RDS OLD.jpg" },
    {
      name: "SREEPAVANAPURI APARTMENTS",
      logo: "images/clients/LOGOS/SREEPAVANAPURI APARTMENTS.jpg",
    },
    {
      name: "SUNDAR VENTURES",
      logo: "images/clients/LOGOS/SUNDAR VENTURES.png",
    },
    { name: "SUNPAUL", logo: "images/clients/LOGOS/SUNPAUL.jpg" },
    {
      name: "SYNTHITE REALTY",
      logo: "images/clients/LOGOS/SYNTHITE REALTY.jpg",
    },
    { name: "TMM", logo: "images/clients/LOGOS/TMM.jpg" },
    {
      name: "TRANSASIA CYBERPARK",
      logo: "images/clients/LOGOS/TRANSASIA CYBERPARK.png",
    },
    { name: "TRANSASIA", logo: "images/clients/LOGOS/TRANSASIA.jpg" },
    { name: "ULTIMA", logo: "images/clients/LOGOS/ULTIMA.jpg" },
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
    <section id="clients" className="py-20 bg-gray-50">
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
          <div className="overflow-hidden bg-white shadow-md rounded-2xl   py-12 px-8">
            <div className="flex items-center justify-center space-x-6 md:space-x-8 lg:space-x-12">
              {getCurrentSlideClients().map((client, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  {/* Logo Container with consistent sizing */}
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-blue-200 group-hover:scale-105 flex items-center justify-center p-4">
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="w-full h-full object-contain  transition-all duration-300"
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                              <span class="text-gray-600 font-semibold text-xs md:text-sm text-center px-2">${client.name}</span>
                            </div>`;
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Client Name (hidden by default, shown on hover) */}
                  <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-gray-700">
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white hover:bg-blue-600 text-gray-700 hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-200"
            aria-label="Previous clients"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white hover:bg-blue-600 text-gray-700 hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-200"
            aria-label="Next clients"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-blue-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              40+
            </div>
            <div className="text-gray-600 font-medium">Trusted Clients</div>
          </div>
          <div className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              250+
            </div>
            <div className="text-gray-600 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              18+
            </div>
            <div className="text-gray-600 font-medium">
              Years of Partnership
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
