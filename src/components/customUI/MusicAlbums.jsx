"use client";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export function MusicAlbums({albums}) {
    return (
        <Accordion type="single" collapsible className="pt-10 sm:w-full md:w-1/2 lg:w-2/5">
                {albums.map((album, index) => (
                    <AccordionItem value={++index} key={index}>
                        <AccordionTrigger>{album.title}</AccordionTrigger>
                        <AccordionContent>
                            <Card className="border-0 w-full">
                                <CardHeader className="flex sm:flex-col md:flex-row lg:flex-row gap-2 place-items-center">
                                    <Image
                                        src={album.source}
                                        width={80}
                                        height={80}
                                        alt="picture of album"
                                        className="rounded-2xl"
                                        sizes="(max-width: 80px) 100vw, (max-width: 80px) 50vw, 25vw"
                                    />
                                    <div className={"flex flex-col"}>
                                        <CardTitle>{album.title}</CardTitle>
                                        <CardDescription>{album.artist}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        {album.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
    )
}
