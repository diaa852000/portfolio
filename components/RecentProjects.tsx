"use client";

/* eslint-disable @next/next/no-img-element */
import { projects } from "@/constants";
import { IProjectProps } from "@/types";
import dynamic from "next/dynamic";
import { IoIosLink } from "react-icons/io";


const PinContainer = dynamic(() => import("./ui/3d-pin").then((mod) => mod.PinContainer), { ssr: false });


export default function RecentProjects() {
    return (
        <section className="py-20" id="projects">
            <h1 className="heading">
                A small selection of{' '}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map((proejct) => (
                    <Project
                        key={proejct.id}
                        project={proejct}
                    />
                ))}
            </div>
        </section>
    )
}

function Project({ project }: { project: IProjectProps }) {
    return (
        <div
            id={`project-${project.id}`}
            className="lg:min-h-[32.5rem] h-[28rem] flex items-center justify-center xl:w-[350px] sm:w-96 w-[80vw]"
        >
            <PinContainer title={project.link.slice(0,15)} href={project.link}>
                <div className="relative flex items-center justify-center xl:w-[350px] sm:w-96 w-[80vw] overflow-hidden h-[20rem] lg:h-[30dvh] mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                        <img
                            src="/bg.png"
                            alt="bg-img"
                        />
                    </div>
                    <img
                        src={project.img}
                        alt={project.title}
                        className="z-10 absolute bottom-0 h-full w-full object-cover rounded-xl"
                    />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {project.title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                    {project.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                        {project.iconLists.map((icon, index) => (
                            <div key={icon} className="border border-white/[0.2] rounded-full bg-black flex items-center justify-center"
                                style={{
                                    transform: `translateX(-${5 * index * 2}px)`
                                }}>
                                <img
                                    src={icon}
                                    alt={icon}
                                    className="p-2 w-8 h-8"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">Demo</p>
                        <IoIosLink className="ms-3" color="#CBACF9"/>
                    </div>
                </div>

            </PinContainer>
        </div>
    )
}
