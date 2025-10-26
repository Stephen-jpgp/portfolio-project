import Image from 'next/image'

export default function Hobbies(){
    return (
        <div className="p-28 flex flex-col gap-8">
            <div className="flex justify-center">
                <h1 className="text-3xl">
                    Here&apos;s the Lobby to my Hobbies 🥳
                </h1>
            </div>
            <div className="flex flex-col gap-8">
                <h1 className="flex pr-14 pl-14 text-lg">
                    I am an avid digital artist, gamer, singer and keyboard player, I enjoy watching anime and reading manga in my free time and otherwise watching random shows I come across that catch my attention ✨
                </h1>
                <h1 className="flex pr-14 pl-14 text-xl justify-center">
                    Let&apos;s start with some artworks 🥰
                </h1>
                <div className="flex flex-wrap gap-16 pr-32 pl-32">
                    <Image width={10000} height={10000} src={"/artworks/hanaonna.jpg"} alt='art' />
                    <Image width={10000} height={10000} src={"/artworks/giftofinal(1).jpg"} alt='art' />
                    <Image width={10000} height={10000} src={"/artworks/celica.jpg"} alt='art' />
                    <Image width={10000} height={10000} src={"/artworks/2Posterboi.jpg"} alt='art' />
                    <Image width={10000} height={10000} src={"/artworks/nahida.jpg"} alt='art' />
                    <Image width={10000} height={10000} src={"/artworks/Scaramouche.jpg"} alt='art' />
                    <Image width={10000} height={10000} src={"/artworks/Raiden (2).png"} alt='art' />
                    <div className="text-4xl">To be continued ✨</div>
                </div>
            </div>
        </div>
    )
}