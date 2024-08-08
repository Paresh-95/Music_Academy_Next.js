import React from 'react'
import Webinars from "../components/Webinars"
import Link from 'next/link'
import Button from './Button'

function UpcomingWebinars() {
  return (
    <div>
      <div className="py-12 bg-gray-900">
      <div className="text-center ">
        <h2 className="uppercase text-teal-600  font-semibold text-base tracking-wide">
          Featured Webinars
        </h2>
        <p className=" mt-2 text-3xl leading-8  text-white font-extrabold tracking-tight sm:text-4xl">
            Enhance Your Musical Journey
        </p>
      </div>
      <div>
        <Webinars />
      </div>
      <div className="mt-5 text-center">
        <Link href={"/courses"}>
          <Button data={"View All Webinars "} />
        </Link>
      </div>
    </div>
    </div>
  )
}

export default UpcomingWebinars