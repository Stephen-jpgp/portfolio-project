import Image from "next/image"

export default function Projects(){
    return (
        <div className="p-28 flex flex-col gap-8">
            <div className="flex justify-center">
                <h1 className="text-4xl">
                    Lemme show and explain what I&apos;ve been working with
                </h1>
            </div>
            <div className="flex flex-row gap-8">
                <h1 className="pl-14 pr-14 text-xl">
                    At HPE, I worked in creating an IDP that processes the deployment info from various teams (our clients) and used this to record analytics and display this information (as graphs, charts) in a manner the teams could process. 
                    <br/><br/>
                    Along with this, I had built deployment suites using GitHub Actions and Workflows so while teams pulled PRs or pushed their changes, these actions were used as triggers to deploy documentation, store multiple forms of data, using PostgresQL, in a universal format in our database.
                    <br/><br/>
                    I also conducted spikes and investigations on integrating APIs, upgrading the workflows we had working, introducing RBAC to our system and future upgrades to the application.
                    <br/><br/>
                    Unfortunately, as this project was under an NDA, I can&apos;t really show pictures on what I did 😖
                    <br/><br/>
                    <hr className="border-black"/>


                    <br/>
                    In my second team, I worked with creating and upgrading the functionalities of key APIs, one notable one that dealt with secure downloads. I created 2 APIs, one that confirmed the download was initiated from a HPE account and the seccond that initiates the download. The reason for this split was to log what stage was an error thrown at if the download didn&apos;t initiate.
                    <br/><br/>
                    I also created test cases for the project, raising the total code coverage from 59% to 80%. Along with this I reformed the logging system used in the project, reducing the logs from 13M to 2M, improving readability and organizing the logs.
                    <br/><br/>
                    I also implemented strategies to improve caching and also in authenticating a user based on their location (if they are using the product from embargoed ccountries or not) and worked on generating a pipeline for this.
                    <br/><br/>
                    <Image width={1000} height={1000} alt="pic" src="/proj/softdown2.png"/>
                    
                    <br/><br/>
                    <hr className="border-black"/>


                    <br/>
                    For my personal project, I tried making a map app that takes a description of a location you wish to travle to and returns the position of the place you wish to travel to:
                    <br/>
                    (btw that&apos;s not a picture below, you can interact with my project here 🥰)
                    <br/><br/>
                    <iframe src="https://take-me-around.vercel.app/" className="w-full h-100" />
                </h1>
            </div>
        </div>
    )
}