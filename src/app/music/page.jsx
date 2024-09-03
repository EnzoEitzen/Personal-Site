import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";


export default function Music() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
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


        <div className=" flex flex-col place-items-center text-center lg:max-w-5xl lg:w-full lg:mb-5 lg:text-left">
            <h1 className="m-5 font-black text-3xl">
                I love music</h1>
            <p className="font-medium text-1xl">Here are some of my favs.</p>
        </div>

        <div className="grid place-items-center sm:w-1/3 md:w-5/6 lg:w-5/6">

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Open popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <Card className="border-0">
                        <CardHeader className="flex flex-row gap-2">
                            <Avatar>
                                <AvatarImage src="images/lain.jpg" alt="Lain Profile Picture"/>
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </PopoverContent>
            </Popover>

        </div>

    </main>);
}
