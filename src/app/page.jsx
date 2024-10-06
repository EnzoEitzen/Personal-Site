import "./style.css";
import Image from 'next/image'
import React from 'react';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public/marquee');
const imageFiles = fs.readdirSync(imagesDir);

export default function Home() {
    return (<>
        <main className="container">

            <header>
                <span>Chronicles of Ale.</span>
            </header>

            <div className="small flex flex-col place-items-center">
                <nav className="w-full">
                    <div>navigation</div>
                    <a href="/">Home</a>
                    <a href="/music">Music</a>
                    <a href="/thoughts">Thoughts</a>
                    <a href="/images">Images</a>
                    <a href="/quotes">Quotes</a>
                    <a><s>Blog</s> <sup>Work in progress</sup></a>
                </nav>
                <Image className="size-fit" src="/img/download (3).gif" width={500} height={281}
                       alt="Hellsing smoking"/>
                <div className="grid grid-cols-4 grid-rows-2">
                    <div className="col-span-3 row-start-1">
                        <Image className="" src="/img/chaogarden.png" width={99} height={56}
                               alt="Post card lain"/>
                    </div>

                    <div className="col-span-1 row-start-1">
                    </div>

                    <div className="col-span-1 row-start-2">
                    </div>

                    <div className="col-span-3 row-start-2">
                        <Image className="col-span-3 row-start-2" src="/img/chaogarden2.png" width={99} height={56}
                               alt="Post card lain"/>
                    </div>
                </div>
                {/*<Image className="size-fit" src="/img/36ed494f-e83b-4793-9014-ffc458687da9.gif" width={540} height={405}*/}
                {/*       alt="Evangelion fighting"/>*/}
            </div>

            <section className="half">
                <h1>welcome to my homepage! <Image src="/img/bouncey.gif" width={19} height={24}
                                                   alt="emoji jumping"/></h1>
                <h2>I am Ale</h2>
                <h3>About</h3>

                <p>
                    Hii! This is Ale&apos;s homepage. I&apos;m a music <sub>addict</sub>,
                    I love philosophy, maths and coding. <Image src="/img/074.gif" width={19} height={19}
                                                                alt="lightning cloud"/>
                </p>
                <p>
                    I&apos;m currently on a journey to
                    completely abandon the use of social media <sup>IG and Twitter</sup>, and I plan on using this
                    site as a way to share my thoughts and projects with the world as
                    an alternative. <sup>to Twitter 2.0</sup>
                </p>
                <p>
                    I may post some of my favorite albums, quotes, images, and other things
                    in here, or not, who knows. <Image src="/img/look.gif" width={15} height={15}
                                                       alt="emoji looking for something"/>
                </p>
                <div className="flex flex-row">
                    <Image className="rounded" src="/img/c8c930b5d76d4d68733333f2cb4bd48c.gif"
                           alt="Nekomonogatari in rain gif"
                           width={500} height={212}/>
                </div>

            </section>

            <section className="small">
                <h2>another section</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis orci at sodales convallis.
                    Proin
                    luctus
                    vehicula dolor, id ultrices diam eleifend eu. Donec tincidunt tellus tellus, in maximus lorem
                    fermentum ac.
                    Phasellus sagittis nisi in ante pretium, eget molestie est pellentesque. Ut tincidunt ultricies
                    porta.</p>
            </section>

            <section className="full">
                <marquee behavior="alternate" scrollamount="5" loop="infinite">
                    {imageFiles.map((file, index) => (
                        <Image key={index} src={`/marquee/${file}`} className="mr-2 ml-2" width={88} height={31} alt={`Marquee ${file}`}/>
                    ))}
                </marquee>
            </section>

            <section className="half">
                <h2>half width section</h2>
            </section>

            <section className="half">
                <h2>half width section</h2>
            </section>

        </main>

        <footer>
            <span>cyanobacteria.css by <a href="https://ribo.zone">ribo.zone</a></span>
        </footer>
    </>);
}
