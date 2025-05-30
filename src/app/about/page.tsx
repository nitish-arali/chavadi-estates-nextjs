"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Clock, Coffee } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Mr. Rudraiah Chavadi",
      role: "Founder & Managing Director",
      image:
        "https://ik.imagekit.io/chavadiestates2025/photo.jpg?updatedAt=1742194102811",
      bio: "With over 10 years of experience in real estate development, Rudraiah founded Chavadi Estates with a vision to create exceptional living spaces that inspire.",
    },
    {
      name: "Mr. Jatram Govindraj",
      role: "Director",
      image:
        "https://ik.imagekit.io/chavadiestates2025/Mr.JatramGovindraj.jpg",
      bio: "Jatram ensures seamless execution across all projects. His attention to detail and operational excellence are key to our timely project delivery.",
    },
    {
      name: "Mr. Ranjith Singh",
      role: "Director of Operations – Maharashtra",
      image:
        "https://ik.imagekit.io/chavadiestates2025/photo2.jpg?updatedAt=1742354359642",
      bio: "With over 10 years of experience in operations and real estate management, Ranjith oversees and drives Chavadi Estates’ operations in Maharashtra, ensuring seamless execution and excellence in every project.",
    },
  ];

  return (
    <>
      {/* Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1487958449943-2429e8be8625)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            About Chavadi Estates
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Building excellence and creating exceptional living spaces since
            2017
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 uppercase tracking-wider text-sm font-medium">
                Our Story
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 title-with-line">
                A Legacy of Excellence
              </h2>
              <p className="text-estate-600 mb-6 leading-relaxed">
                Chavadi Estates was founded in 2017 by Mr. Rudraiah Chavadi, a
                visionary entrepreneur with a passion for creating exceptional
                living spaces. What began as a small firm with big dreams has
                evolved into one of the most respected names in luxury real
                estate development.
              </p>
              <p className="text-estate-600 mb-6 leading-relaxed">
                Our journey has been defined by an unwavering commitment to
                quality, innovation, and customer satisfaction. Over the years,
                we have successfully delivered a diverse range of projects
                across residential, commercial, and mixed-use segments, each
                bearing the hallmark of Chavadi excellence.
              </p>
              <p className="text-estate-600 leading-relaxed">
                Today, Chavadi Estates stands as a testament to what can be
                achieved when passion meets expertise. Our portfolio includes
                some of the most iconic properties in prime locations, each
                designed to elevate the art of living.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                    alt="Chavadi Estates Early Days"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                    alt="Chavadi Team at Work"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
                    alt="Chavadi Project"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                    alt="Chavadi Modern Office"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-estate-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              // { icon: Award, number: "50+", label: "Projects Completed" },
              { icon: Users, number: "1,200+", label: "Happy Families" },
              { icon: Clock, number: "8", label: "Years of Excellence" },
              { icon: Coffee, number: "10+", label: "Industry Awards" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-600 text-estate-900 mb-4">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-4xl font-serif font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-gold-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <span className="text-gold-600 uppercase tracking-wider text-sm font-medium">
                Our Mission
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-serif font-bold mb-4 title-with-line">
                What Drives Us
              </h3>
              <p className="text-estate-600 leading-relaxed">
                Our mission is to create exceptional living spaces that inspire
                and enrich lives. We strive to deliver properties that exceed
                expectations in design, quality, and functionality, while
                maintaining the highest standards of integrity and customer
                service.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="font-serif font-medium text-lg mb-3">
                  Our Commitments:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-gold mr-2" />
                    <span>Uncompromising quality in every project</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-gold mr-2" />
                    <span>Innovative design that enhances living</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-gold mr-2" />
                    <span>Transparent and ethical business practices</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-gold mr-2" />
                    <span>Customer satisfaction as our priority</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <span className="text-gold-600 uppercase tracking-wider text-sm font-medium">
                Our Vision
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-serif font-bold mb-4 title-with-line">
                Where We're Headed
              </h3>
              <p className="text-estate-600 leading-relaxed">
                We envision a future where Chavadi Estates is recognized
                globally as a leader in premium real estate development. Our
                vision is to continuously innovate and set new benchmarks in
                design, sustainability, and customer experience, while expanding
                our presence across key markets.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="font-serif font-medium text-lg mb-3">
                  Our Aspirations:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-gold mr-2" />
                    <span>Pioneer sustainable building practices</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-gold mr-2" />
                    <span>Create communities, not just buildings</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-gold mr-2" />
                    <span>Redefine luxury through thoughtful design</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-gold mr-2" />
                    <span>Leave a lasting legacy for future generations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold-600 uppercase tracking-wider text-sm font-medium">
              Our Leadership
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold title-with-line-center">
              Meet The Team
            </h2>
            <p className="mt-4 text-estate-600 max-w-3xl mx-auto">
              Our success is built on the expertise and dedication of our
              exceptional team. Meet the visionaries who are shaping the future
              of Chavadi Estates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group sm-mx-12 bg-white rounded-lg overflow-hidden shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 mb-4">{member.role}</p>
                  <p className="text-estate-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-estate-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-wider text-sm font-medium">
              Our Philosophy
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold title-with-line-center">
              Core Values
            </h2>
            <p className="mt-4 text-estate-200 max-w-3xl mx-auto">
              Our values shape everything we do. They guide our decisions,
              influence our culture, and define our approach to business and
              relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We pursue excellence in every aspect of our work, from design and construction to customer service and after-sales support.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with complete transparency and ethical standards, building trust through honesty and accountability in all our dealings.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly seek new ideas and approaches, embracing change and technology to improve our offerings and processes.",
              },
              {
                title: "Sustainability",
                description:
                  "We are committed to environmentally responsible practices, creating properties that minimize ecological impact and promote sustainable living.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork, fostering partnerships with stakeholders, suppliers, and communities to achieve shared goals.",
              },
              {
                title: "Customer Focus",
                description:
                  "We place our customers at the center of everything we do, listening to their needs and striving to exceed their expectations at every touchpoint.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-estate-800 border border-estate-700 p-8 rounded-lg hover:bg-estate-800/80 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gold text-estate-900 rounded-full flex items-center justify-center mr-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-serif font-bold">
                    {value.title}
                  </h3>
                </div>
                <p className="text-estate-200">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="bg-white p-12 rounded-lg shadow-sm text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Experience the Chavadi Difference?
            </h2>
            <p className="text-estate-600 max-w-2xl mx-auto mb-8">
              Explore our current projects or get in touch with our team to
              discuss your requirements. We're here to help you find your
              perfect property.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects" className="btn-primary">
                Explore Our Projects
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
