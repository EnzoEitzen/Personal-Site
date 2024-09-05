import React from "react";
import Image from 'next/image'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";


export default function Music() {
    return (<main className="flex min-h-screen flex-col place-items-center p-24">
        <Breadcrumb className="mb-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbPage>Music</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>


        <div className="flex flex-col place-items-center text-center lg:max-w-5xl lg:w-full lg:mb-5 lg:text-left">
            <h1 className="m-5 font-black text-3xl">
                I love music</h1>
            <p className="font-medium text-1xl">Here are some of my favs.</p>
        </div>

        <div className="grid place-items-center sm:w-1/3 md:w-5/6 lg:w-5/6">
            <Accordion type="single" collapsible className="sm:w-full md:w-1/2 lg:w-1/2">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Artista 1</AccordionTrigger>
                    <AccordionContent>
                        <Card className="border-0 w-full">
                            <CardHeader className="flex flex-row gap-2 place-items-center">
                                <Image
                                    src="/images/676c1cf8-2657-43a6-bed0-83d3a84ec435.jpg"
                                    width={80}
                                    height={80}
                                    alt="picture of album"
                                    className="rounded-2xl"
                                    sizes="(max-width: 80px) 100vw, (max-width: 80px) 50vw, 25vw"
                                />
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Artista 2</AccordionTrigger>
                    <AccordionContent>
                        <Card className="border-0">
                            <CardHeader className="flex flex-row gap-2 place-items-center">
                                <Image
                                    src="/images/676c1cf8-2657-43a6-bed0-83d3a84ec435.jpg"
                                    width={80}
                                    height={80}
                                    alt="picture of album"
                                    className="rounded-2xl"
                                    sizes="(max-width: 80px) 100vw, (max-width: 80px) 50vw, 25vw"
                                />
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Artista 3</AccordionTrigger>
                    <AccordionContent>
                        <Card className="border-0">
                            <CardHeader className="flex flex-row gap-2 place-items-center">
                                <Image
                                    src="/images/676c1cf8-2657-43a6-bed0-83d3a84ec435.jpg"
                                    width={80}
                                    height={80}
                                    alt="picture of album"
                                    className="rounded-2xl"
                                    sizes="(max-width: 80px) 100vw, (max-width: 80px) 50vw, 25vw"
                                />
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

    </main>);
}
