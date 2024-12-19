import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ArtificialIntelligence from "../../../public/AI.jpg"
import Web3andMetaverse from "../../../public/metaverse.jpg"
import CloudNativeComputing from "../../../public/cloudComputing.jpg"
import AmbientComputingandIoT from "../../../public/iot.jpg"
import GenomicsandBioinformatics from "../../../public/genomics.jpg"
import NetworkProgrammabilityandAutomation from "../../../public/automation.jpg"

const Advance = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">Advanced Courses</h1>
      <div className="grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
        
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={ArtificialIntelligence }
                alt="Artificial Intelligence "
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Artificial Intelligence 
                </text>
            </div>
        </div>
        </Link>
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={Web3andMetaverse}
                alt="Web 3 and Metaverse"
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Web 3 and Metaverse
                </text>
            </div>
        </div>
        </Link>
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={CloudNativeComputing}
                alt="Cloud-Native Computing"
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Cloud-Native Computing
                </text>
            </div>
        </div>
        </Link>
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={AmbientComputingandIoT}
                alt="Ambient Computing and IoT"
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Ambient Computing and IoT
                </text>
            </div>
        </div>
        </Link>
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={GenomicsandBioinformatics}
                alt="Genomics and Bioinformatics"
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Genomics and Bioinformatics
                </text>
            </div>
        </div>
        </Link>
        <Link href={"#"} className="hover:scale-105 duration-200 transition-all">
        <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
                <Image
                src={NetworkProgrammabilityandAutomation}
                alt="Network Programmability and Automation"
                className="object-cover w-full"
                height={"300"}
                />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
                <text>
                Network Programmability and Automation
                </text>
            </div>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Advance
