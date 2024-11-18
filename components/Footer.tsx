/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50"
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Read to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center lg:text-lg">
                    Reach out to me today and let&apos;s discuss how I can help you achive your goals.
                </p>
                <a href="mailto:diaaeltaiby@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow/>}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright &copy; 2024 Diaa Eltaiby
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map(profile => (
                        <Link 
                            href={profile.link}
                            key={profile.id} 
                            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            target="_blank"
                        >
                            <Image
                                src={profile.img}
                                alt={`${profile.id}`}
                                width={20}
                                height={20}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
