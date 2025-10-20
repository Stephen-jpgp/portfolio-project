"use client"

import { Button } from "./ui/button";
import Webpage from "./webpage";
import { useState } from "react";
import Hello from "./content/hello";
import AboutMe from "./content/aboutMe";
import Hobbies from "./content/hobbies";
import Projects from "./content/projects";
import Image from "next/image";

export default function Page() {

    const [isOpenHello, setIsOpenHello] = useState<boolean>(true)
    const [aboutMe, setAboutMe] = useState<boolean>(false)
    const [hobbies, setHobbies] = useState<boolean>(false)
    const [projects, setProjects] = useState<boolean>(false)

    const handleHelloClosed = () => {
        setIsOpenHello(false)
    }

    const handleAboutMe = () => {
        setAboutMe(false)
    }

    const handleHobbies = () => {
        setHobbies(false)
    }

    const handleProjects = () => {
        setProjects(false)
    }

    return (
        <>
        {isOpenHello && <Webpage url="hello.exe" color="bg-pink-200" isClosed={handleHelloClosed} content={Hello} />}
        {aboutMe && <Webpage url="About Me" color="bg-fuchsia-200" isClosed={handleAboutMe} content={AboutMe}/>}
        {hobbies && <Webpage url="Hobbies.exe" color="bg-purple-200" isClosed={handleHobbies} content={Hobbies}/>}
        {projects && < Webpage url="Projects.md" color="bg-red-200" isClosed={handleProjects} content={Projects}/>}
        <div className="flex flex-col flex-wrap h-[calc(100vh-44px)] gap-y-4 min-h-[calc(100vh-44px)] min-w-screen p-2">
            
            <Button className="text-black w-20 h-20 flex flex-col hover:[&_p]:bg-white"
                onClick={()=>setIsOpenHello(true)}>
                <Image src="/diary.png" alt="hello.exe" width={40} height={40} />
                <p>hello.exe</p>
            </Button>

            <Button className="text-black w-20 h-20 flex flex-col hover:[&_p]:bg-white"
                onClick={()=>setAboutMe(true)}>
                <Image src="/crown.png" alt="aboutme.exe" width={40} height={40} />
                <p>About Me</p>
            </Button>

            <Button className="text-black w-20 h-20 flex flex-col hover:[&_p]:bg-white"
                onClick={()=>setHobbies(true)}>
                <Image src="/disco-ball.png" alt="hobbies.exe" width={40} height={40} />
                <p>Hobbies.exe</p>
            </Button>

            <Button className="text-black w-20 h-20 flex flex-col hover:[&_p]:bg-white"
                onClick={()=>setProjects(true)}>
                <Image src="/laptop.png" alt="hobbies.exe" width={40} height={40} />
                <p>Projects.md</p>
            </Button>
        </div>
        </>
    )
}