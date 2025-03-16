"use client";
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../../../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="bg-secondary/5 py-16 md:pt-24 mt-8">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to answer any questions you might have. Feel free to
              reach out using the form below or contact information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-medium mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-2xl font-serif font-medium mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-estate-50 text-estate-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-1">Our Office</h3>
                      <p className="text-muted-foreground">
                        #63/1, Hoodi Main Road, <br />
                        Surya Layout, Ayyappa Nagar, <br />
                        Beside Adyar Ananda Bhavan - A2B,
                        <br />K R Pura, Bengaluru, Karnataka-560036
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-estate-50 text-estate-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <a
                        href="tel:+919986689669"
                        className="text-muted-foreground"
                      >
                        +91{" "}
                        <span style={{ wordSpacing: "-2px" }}>99866 89669</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-estate-50 text-estate-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-1">Email</h3>

                      <a
                        className="text-muted-foreground"
                        href="mailto:chavadiestates1@gmail.com"
                      >
                        chavadiestates1@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-estate-50 text-estate-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-1">
                        Working Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Sunday: 9AM - 9PM
                      </p>
                      {/* <p className="text-muted-foreground">
                        Saturday: 10AM - 4PM
                      </p>
                      <p className="text-muted-foreground">Sunday: Closed</p> */}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-estate-50 flex items-center justify-center text-estate-600 hover:bg-estate-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-estate-50 flex items-center justify-center text-estate-600 hover:bg-estate-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-estate-50 flex items-center justify-center text-estate-600 hover:bg-estate-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-estate-50 flex items-center justify-center text-estate-600 hover:bg-estate-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-medium">
          <MapPin
            style={{ display: "inline" }}
            className="h-12 w-12 text-estate-400 mx-auto mb-4"
          />
          Visit Our Office
        </p>
      </div>
      <div className="px-12 w-full h-96 rounded-lg shadow-md overflow-hidden pb-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5271683739375!2d77.71032197507697!3d13.00206608731611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b7942ec747%3A0xb9824e65f0ed370f!2sChavadi%20Estates%20Private%20Limited%20Bangalore!5e0!3m2!1sen!2sin!4v1742065692276!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map showing Chavadi Estates office location"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
