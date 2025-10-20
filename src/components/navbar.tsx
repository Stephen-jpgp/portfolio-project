"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { useState } from "react";
import Webpage from "./webpage";
import AboutThis from "./content/aboutThis";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleAboutClosed = () => {
        setIsOpen(!isOpen)
        return (<Webpage/>)
    }

    return (
        <div className="flex justify-between bg-white/40 w-full">
            <div className="flex flex-row p-1">
                <Button onClick={()=>setIsOpen(true)}><div className="text-lg pl-2.5 pr-2 py-1 rounded-lg">About this</div></Button>
                <Button>
                    <Link href={"https://www.linkedin.com/in/stephen-james-software/"} target="_blank">LinkedIn</Link>
                </Button>
                <Button>
                    <Link href={"https://github.com/Stephen-jpgp/"} target="_blank">Github</Link>
                </Button>
                <Button>
                    <Link href={"https://vercel.com/steffys-projects-9d4c98da"} target="_blank">Vercel</Link>
                </Button>
                <Button>
                    <Link href={"https://www.instagram.com/stephen_._james/?igsh=MTh3MGI5azE4Y3l5Yg%3D%3D"} target="_blank">Instagram</Link>
                </Button>
                
            </div>
            <div className="flex flex-row">
                <Button className="">
                    <Avatar>
                    <AvatarImage src="/profile.webp" />
                    <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                </Button>
            </div>
            {isOpen && <Webpage url="More About this project" color="bg-pink-200" isClosed={handleAboutClosed} content={AboutThis}/>}
        </div>
        
    )
}