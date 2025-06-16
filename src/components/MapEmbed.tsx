// MapEmbed.tsx
import React from 'react';

const MapEmbed: React.FC = () => {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9342487216863!2d76.29458897407798!3d10.022284772652835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0e606f664b%3A0x9f74e910925c2312!2sIBS%20Consultants!5e0!3m2!1sen!2sin!4v1747828486817!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="IBS Consultants Location"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
