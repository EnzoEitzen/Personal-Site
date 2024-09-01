"use client";

import React from 'react';
import Image from 'next/image';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

export function LainCarousel() {
    return (
        <div className="mb-5 flex flex-col place-items-center text-center lg:max-w-5xl lg:w-full lg:mb-5 lg:text-left">
            <Carousel className={"size-1/2 sm:size-1/2 md:size-1/3 lg:size-1/5"} opts={{ loop: true }}>
                <CarouselContent>
                    <CarouselItem>
                        <Image src={"/images/676c1cf8-2657-43a6-bed0-83d3a84ec435.jpg"} alt={"Lain"} width={300} height={300} priority />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={"/images/06b1965e-fdd1-42d7-be28-98b6e58b9ad3.jpg"} alt={"Lain"} width={300} height={300} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={"/images/ac219f17-786c-4a38-aebc-b1d0269fdb77.jpg"} alt={"Lain"} width={300} height={300} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={"/images/anime icon.jpg"} alt={"Lain"} width={300} height={300} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={"/images/e798e0d3-b3b6-4bae-b782-8f69d87ff188.jpg"} alt={"Lain"} width={300} height={300} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={"/images/lain.jpg"} alt={"Lain"} width={300} height={300} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={"/images/lain (1).jpg"} alt={"Lain"} width={300} height={300} />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}