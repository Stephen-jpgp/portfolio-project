import Image from 'next/image'

export default function Hello(){
    const copy = (link: string, medium:string) => {
        navigator.clipboard.writeText(link).
        then(((() => {
            alert(medium + " copied")
        })))
    }

    return (
        <div className="p-8 flex flex-col gap-8">
            <div className="flex justify-center">
                <h1 className="text-4xl">
                    Hey there!
                </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <Image src={"/profile.webp"} alt='my image' width={1000} height={1000} className="w-100 h-100 rounded-full" quality={100} />
                <h1 className="p-16 text-lg">
                    So a little about me, I&apos;m Stephen James and am I glad to meet ya!
                    <br/><br/>
                    This is a space I made (and will improve) to share my journey as a Software Engineer, artist, singer and much much more. I hope you also have fun as you see my world and yeah, lemme know your thoughts and if you&apos;d like to connect ✨
                    <br/><br/><br/>
                    <div className="flex flex-wrap gap-20">
                        <a href="https://www.instagram.com/stephen_._james/?igsh=MTh3MGI5azE4Y3l5Yg%3D%3D" target="_blank">
                            <Image width={120} height={120} src={"/insta.png"} alt='insta' className="w-12"/>
                        </a>
                        <div className="flex flex-col items-center group">
                            <Image width={120} height={120}  className="cursor-pointer w-12" alt='mail' src={"/gmail.png"} onClick={()=>copy("stephenjamesmathew2000@gmail.com","Mail Id")} />
                            <div className="absolute opacity-0 translate-y-11 text-sm pl-2 pr-2 group-hover:opacity-100 transition-opacity bg-black/25 rounded-sm duration-300">
                                Click to copy
                            </div>
                        </div>
                        <div className="flex flex-col items-center group">
                            <Image width={120} height={120}  className="cursor-pointer w-12" alt='phone' src={"/whatsapp.png"} onClick={()=>copy("+91 9108530079", "Phone number")} />
                            <div className="absolute opacity-0 translate-y-11 text-sm pl-2 pr-2 group-hover:opacity-100 transition-opacity bg-black/25 rounded-sm duration-300">
                                Click to copy
                            </div>
                        </div>
                    </div>
                </h1>
            </div>
        </div>
    )
}