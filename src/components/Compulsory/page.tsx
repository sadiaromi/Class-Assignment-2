import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import programmingFundamentals from "../../../public/programming_fundamentals.jpg"
import nextjsCourse from "../../../public/nextjs.jpg"
import EarnasYouLearn from "../../../public/earn_as_you_learn.jpg"

const Compulsory = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">Core Courses Sequence</h1>
      <div className="grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={programmingFundamentals}
                alt="Programming Fundamentals"
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Programming Fundamentals
                </text>
            </div>
        </div>
        </Link>
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={nextjsCourse}
                alt="Web2 Using NextJS"
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Web2 Using NextJS
                </text>
            </div>
        </div>
        </Link>
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={EarnasYouLearn}
                alt="Earn as You Learn"
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Earn as You Learn
                </text>
            </div>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Compulsory
