import React from "react";
import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


const testimonials = [
  {
    quote: "Music School has transformed my understanding of music. The teachers are incredibly knowledgeable and supportive.",
    name: "John Doe",
    title: "Professional Guitarist"
  },
  {
    quote: "The community here is amazing! I've learned so much and made lifelong friends along the way.",
    name: "Jane Smith",
    title: "Aspiring Vocalist"
  },
  {
    quote: "This institution is the perfect place for anyone serious about pursuing a career in music. The curriculum is top-notch.",
    name: "Alex Johnson",
    title: "Music Producer"
  },
  {
    quote: "I never thought I'd be able to play the piano at this level. The instruction here is simply unparalleled.",
    name: "Emily Davis",
    title: "Pianist"
  },
  {
    quote: "Thanks to Music School, I now have the confidence and skills to perform in front of a live audience.",
    name: "Michael Brown",
    title: "Singer-Songwriter"
  },
  {
    quote: "The instructors are passionate and patient, making it easy to grasp even the most complex musical concepts.",
    name: "Sophia Williams",
    title: "Violinist"
  },
  {
    quote: "Enrolling here was the best decision I made for my music career. The hands-on experience is invaluable.",
    name: "James Wilson",
    title: "DJ & Music Engineer"
  }
];


function TestimonialCards() {
  return (
    <div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default TestimonialCards;
