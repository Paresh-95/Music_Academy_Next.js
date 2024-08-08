"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image"; 

const musicSchoolContent = [
  {
    title: "Personalized Music Lessons",
    description: "Receive one-on-one instruction tailored to your skill level and musical interests, ensuring a personalized and effective learning experience."
  },
  {
    title: "State-of-the-Art Facilities",
    description: "Practice and learn in our modern studios equipped with the latest instruments and technology, providing an optimal environment for music education."
  },
  {
    title: "Expert Instructors",
    description: "Our faculty comprises experienced musicians and educators dedicated to helping you achieve your musical goals through high-quality instruction."
  },
  {
    title: "Performance Opportunities",
    description: "Showcase your talents in our regular recitals, concerts, and competitions, giving you the chance to perform in front of an audience and gain valuable experience."
  },
  {
    title: "Comprehensive Curriculum",
    description: "Our well-rounded curriculum covers various genres and techniques, ensuring a broad and in-depth understanding of music."
  },
  {
    title: "Collaborative Environment",
    description: "Join a community of passionate musicians where you can collaborate, learn, and grow together, fostering creativity and camaraderie."
  },
  {
    title: "Flexible Scheduling",
    description: "We offer flexible lesson times to accommodate your busy schedule, making it easy to fit music education into your life."
  },
  {
    title: "Music Theory Workshops",
    description: "Enhance your understanding of music theory through interactive workshops designed to deepen your knowledge and application of musical concepts."
  },
 
];





export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
