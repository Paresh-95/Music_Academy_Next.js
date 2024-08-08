"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";




import blue from "@/Images/blues.jpg"
import electric from "@/Images/electric.jpg"
import songWriting from "@/Images/song-writing.jpg"
import musicProd from "@/Images/music-prod.jpg"
import jazz from "@/Images/jazz.jpg"
import drums from "@/Images/drums.jpg"
import guitar from "@/Images/guitar.jpg"
import vocalist from "@/Images/vocalist.jpg"
import piano from "@/Images/piano.jpg"



const courses = [
      {
        "id": 1,
        "title": "Guitar Fundamentals",
        "slug": "guitar-fundamentals",
        "description": "Learn the basics of playing guitar with our comprehensive beginner's course.",
        "price": 99.99,
        "instructor": "John Doe",
        "isFeatured": true,
        "image":  guitar
      },
      {
        "id": 2,
        "title": "Piano for Beginners",
        "slug": "piano-for-beginners",
        "description": "Start your musical journey with foundational piano skills taught by expert instructors.",
        "price": 109.99,
        "instructor": "Jane Smith",
        "isFeatured": false,
        "image": piano
      },
      {
        "id": 3,
        "title": "Advanced Vocal Techniques",
        "slug": "advanced-vocal-techniques",
        "description": "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
        "price": 119.99,
        "instructor": "Emily Johnson",
        "isFeatured": true,
        "image": vocalist
      },
      {
        "id": 4,
        "title": "Drumming Mastery",
        "slug": "drumming-mastery",
        "description": "Master the drums with our comprehensive course covering all skill levels.",
        "price": 129.99,
        "instructor": "Mike Brown",
        "isFeatured": false,
        "image": drums
      },
      {
        "id": 5,
        "title": "Jazz Improvisation",
        "slug": "jazz-improvisation",
        "description": "Learn the art of jazz improvisation with this course designed for all levels.",
        "price": 139.99,
        "instructor": "Chris Davis",
        "isFeatured": false,
        "image": jazz
      },
      {
        "id": 6,
        "title": "Music Production Fundamentals",
        "slug": "music-production-fundamentals",
        "description": "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
        "price": 149.99,
        "instructor": "Alex Wilson",
        "isFeatured": true,
        "image": musicProd
      },
      {
        "id": 7,
        "title": "Songwriting Essentials",
        "slug": "songwriting-essentials",
        "description": "Learn the essentials of songwriting to express your musical creativity.",
        "price": 159.99,
        "instructor": "Samantha Miller",
        "isFeatured": false,
        "image": songWriting
      },
      {
        "id": 8,
        "title": "Electronic Music Production",
        "slug": "electronic-music-production",
        "description": "Create compelling electronic music with our course designed for beginners to advanced users.",
        "price": 169.99,
        "instructor": "Luke Harris",
        "isFeatured": true,
        "image":electric
      },
      {
        "id": 9,
        "title": "Classical Music History",
        "slug": "classical-music-history",
        "description": "Explore the rich history of classical music from its origins to the present day.",
        "price": 179.99,
        "instructor": "Grace Lee",
        "isFeatured": false,
        "image": jazz
      },
      {
        "id": 10,
        "title": "Blues Guitar Techniques",
        "slug": "blues-guitar-techniques",
        "description": "Discover the techniques of blues guitar to add soul and depth to your playing.",
        "price": 189.99,
        "instructor": "Ethan Moore",
        "isFeatured": true,
        "image":  blue
      }
    ]




function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
        All Courses ({courses.length})
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {courses.map((item) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                  {item.instructor}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  {item.price}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;
