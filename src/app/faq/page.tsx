"use client"; // Mark this as a Client Component

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Leaf } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of properties does Chavadi Estates develop?",
      answer:
        "Chavadi Estates specializes in luxury residential properties, premium apartments, commercial spaces, and integrated townships. Our portfolio includes villas, apartments, and commercial buildings designed with the highest standards of quality and elegance.",
    },
    {
      question: "How do I schedule a property viewing?",
      answer:
        "You can schedule a property viewing by contacting our sales team through our website's contact form, calling our office at +1 (800) 123-4567, or visiting our office in person. We offer both in-person and virtual tours of our properties.",
    },
    {
      question: "What amenities are typically included in your properties?",
      answer:
        "Our properties feature premium amenities such as swimming pools, fitness centers, landscaped gardens, 24/7 security, clubhouses, and smart home technology. Specific amenities vary by project, so please check individual project pages for details.",
    },
    {
      question: "Do you offer customization options for your properties?",
      answer:
        "Yes, depending on the project and construction stage, we offer various customization options. For properties in pre-construction or early construction phases, buyers can often choose layouts, finishes, and fixtures. Please inquire with our sales team about customization options for specific projects.",
    },
    {
      question:
        "What is the typical payment structure for purchasing a property?",
      answer:
        "Our payment structures typically include a booking amount, followed by installments linked to construction milestones. We also offer flexible payment plans and can help connect you with financial institutions for home loans. Our sales team can provide detailed payment plans for each project.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Project completion timelines vary based on size and complexity. Residential projects generally take 24-36 months from groundbreaking to handover, while commercial projects may take 36-48 months. Each project page provides specific timelines for that development.",
    },
    {
      question: "Do you provide after-sales service?",
      answer:
        "Yes, we provide comprehensive after-sales service through our dedicated customer service team. This includes handling property maintenance, addressing concerns, and managing repairs during the warranty period. We remain committed to our customers long after the property handover.",
    },
    {
      question: "Are your properties eco-friendly?",
      answer:
        "Sustainability is a core value at Chavadi Estates. Our projects incorporate eco-friendly features such as solar panels, rainwater harvesting, energy-efficient appliances, waste management systems, and green building materials. Many of our developments are certified by green building rating systems.",
    },
    {
      question:
        "What legal documentation will I receive when purchasing a property?",
      answer:
        "You will receive a comprehensive set of legal documents, including the sale agreement, title deed, completion certificate, occupancy certificate, and property tax receipts. Our legal team ensures all documentation is transparent and compliant with local regulations.",
    },
    {
      question: "Do you offer rental management services for investors?",
      answer:
        "Yes, we offer rental management services for investors through our property management division. This includes tenant sourcing, lease management, rent collection, property maintenance, and financial reporting. Contact our investment advisory team for more information.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white mt-5">
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Leaf className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our properties, processes,
            and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-emerald-100 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-emerald-50 hover:no-underline">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4 bg-emerald-50/30">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6">Still have questions?</p>
          <Link
            href="/contact"
            className="btn-primary bg-emerald-600 hover:bg-emerald-700"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
