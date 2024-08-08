import React from "react";
import courseData from "../data/music_course.json";
import Button from "./Button";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Card from "./Card";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featureCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center ">
        <h2 className="uppercase text-teal-600  font-semibold text-base tracking-wide">
          Featured Courses
        </h2>
        <p className=" mt-2 text-3xl leading-8  text-white font-extrabold tracking-tight sm:text-4xl">
          Learn With the Best{" "}
        </p>
      </div>
      <div>
        <Card featureCourses={featureCourses} />
      </div>
      <div className="mt-5 text-center">
        <Link href={"/courses"}>
          <Button data={"View All courses "} />
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
