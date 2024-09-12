import {BreadcrumbLink, BreadcrumbPage} from "@/components/ui/breadcrumb";
import {NavigationBar} from "@/components/customUI/NavigationBar";
import React from "react";
import albums from "@/data/albums.json";
import {MusicAlbums} from "@/components/customUI/MusicAlbums";
import {SocialMediaLink} from "@/components/customUI/SocialMediaLink";


export default function Music() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        <NavigationBar>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            <BreadcrumbPage>Music</BreadcrumbPage>
        </NavigationBar>


        <div className="flex flex-col place-items-center text-center lg:max-w-5xl lg:w-full lg:mb-5 lg:text-left">
            <h1 className="m-5 font-black text-3xl">
                I love music</h1>
            <p className="font-medium text-1xl">Here are some of my favs.</p>
        </div>

        <div className="grid place-items-center sm:w-1/3 md:w-5/6 lg:w-5/6">
            <MusicAlbums albums={albums}/>
        </div>

        <div className={"flex flex-col mt-36"}>
            <div
                className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-zinc-100 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:via-zinc-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-zinc-700 before:dark:opacity-10 after:dark:from-zinc-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <p className="font-extrabold italic text-black">Enzo </p>
                <p className="font-extrabold italic text-black"><br/>Eitzen</p>
            </div>
            <SocialMediaLink/>
        </div>

    </main>);
}
