"use client";

import React from 'react';
import Image from 'next/image';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";


export function LainCarousel(imagePaths) {
    return (
        <div className="mb-5 flex flex-col place-items-center text-center lg:max-w-5xl lg:w-full lg:mb-5 lg:text-left">
            <Carousel className="size-2/3 sm:size-2/3 md:size-1/3 lg:size-1/5" opts={{ loop: true }}>
                <CarouselContent>

                    {imagePaths.imagePaths.map((path, index) => (
                        <CarouselItem key={index}>
                            <Image src={path} alt={"Lain"} width={300} height={300} />
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
