import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, autoplay]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    setAutoplay(false);
    if (direction === 'prev') {
      prevTestimonial();
    } else {
      nextTestimonial();
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -left-8 -top-8">
            <Quote className="h-16 w-16 text-blue-200" />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                  <img 
                    src={testimonials[currentIndex].imageUrl} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600 text-center">{testimonials[currentIndex].position}</p>
                <p className="text-blue-600 font-medium text-center">{testimonials[currentIndex].company}</p>
              </div>
              
              <div className="md:col-span-2">
                <p className="text-lg text-gray-700 italic">"{testimonials[currentIndex].content}"</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={() => handleArrowClick('prev')}
              className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => handleArrowClick('next')}
              className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;