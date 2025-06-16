// import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock10, Clock12 } from "lucide-react";
import WhatsAppButton from "./WhatsappButton";
import MapEmbed from "./MapEmbed";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have any questions or want to learn more about our services? Feel
              free to reach out — just click the button below to start a
              conversation with us directly on WhatsApp. We're here to help!
            </p>
            <WhatsAppButton
              phoneNumber="919388604525"
              message="Hi! I'm interested in your services. Can you tell me more?"
              label="Start Chat on WhatsApp"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="mb-8">
              <div className="flex mb-6">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-700">
                    M/S Intelligent Building Systems Door no: 35/1181 A1,<br />
                    CCRA-19, Changampuzha road, Edapally P.O., Kochi-682024
                  </p>
                </div>
              </div>

              <div className="flex mb-6">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-700">+91-9388604525</p>
                  <p className="text-gray-700">+91-484-2338962</p>
                  <p className="text-gray-700">+91-484-7968073</p>
                </div>
              </div>

              

              <div className="flex mb-6">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Email
                  </h4>
                  <p className="text-gray-700">ibsconsultants@yahoo.co.uk</p>
                  <p className="text-gray-700">ibsconsultantscochin@gmail.com</p>
                </div>
              </div>

              <div className="flex mb-6">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-4">
                  <Clock12 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-700">9am-5pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden h-80">
          <MapEmbed />
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-700">Map integration would be here</p>
              <p className="text-sm text-gray-500">
                123 Architecture Avenue, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
