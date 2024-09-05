import {BreadcrumbLink, BreadcrumbPage} from "@/components/ui/breadcrumb";
import {NavigationBar} from "@/components/customUI/NavigationBar";
import React from "react";
import albums from "@/data/albums.json";
import {MusicAlbums} from "@/components/customUI/MusicAlbums";


export default function Music() {
    return (<main className="flex min-h-screen flex-col place-items-center p-24">
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
            <MusicAlbums albums={albums} />

        </div>

    </main>);
}
