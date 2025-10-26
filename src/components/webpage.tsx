import {  useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Webpage(props: any) {
    const [isclosed,setIsClosed] = useState<boolean>(false)
    const [dimen, setDimen] = useState<boolean>(false)
    const [icon, setIcon] = useState<boolean>(false)
    const handleClosed = (isclosed: boolean) => {
        props.isClosed(isclosed)
    }
    return (
        !isclosed && <div className={`fixed ${props.color} ${dimen?"w-full h-screen":"md:w-6/7 md:h-6/7 md:left-1/10 md:top-1/10"} ${props.className} overflow-scroll border-black border-1`}>
            <div className={`fixed flex justify-between ${dimen?"w-full":"md:w-6/7 w-fit"} min-h-10 p-1 bg-black/25`}>
                <div className={`content-center justify-center pl-7 pr-7 ${props.color} rounded-xl`}>{props.url}</div>
                <div className="flex flex-row-reverse">
                    <Button onClick={()=>{
                        setIsClosed(true)
                        handleClosed(true)
                    }}><Image width={1000} height={1000} src="/close.png" alt="close" className="w-4 h-4" /></Button>
                    <Button onClick={() => {
                        setDimen(!dimen)
                        setIcon(!icon)
                    }}><Image width={1000} height={1000} src={icon?"/restore-down.png":"/stop.png"} alt="minimize" className="w-4 h-4" /></Button>
                    <Button><Image width={1000} height={1000} src="/window-minimize.png" alt="reduce-close" className="w-4 h-4" /></Button>
                </div>
            </div>
            <div className="p-4 min-w-full ">
                <props.content />
            </div>
        </div>
    )
}