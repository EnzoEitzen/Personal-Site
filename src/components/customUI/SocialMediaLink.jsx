"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {Separator} from "@/components/ui/separator"
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import React from "react";


export function SocialMediaLink() {
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="link">@Socials</Button>
                </PopoverTrigger>
                <PopoverContent className="w-60">
                    <div>
                        <div className={"flex gap-3.5"}>
                            {/*<Avatar>*/}
                            {/*    <AvatarImage src="carousel/lain.jpg" alt="Lain Profile Picture"/>*/}
                            {/*    <AvatarFallback></AvatarFallback>*/}
                            {/*</Avatar>*/}
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium leading-none">Hey!!</h4>
                                <p className="text-sm text-muted-foreground">
                                    Follow me on my socials, maybe we can become friends.
                                </p>
                            </div>
                        </div>
                        <Separator className="my-4"/>
                        <div className="flex justify-around h-5 items-center space-x-4 text-sm">
                            {/*<Button asChild>*/}
                            {/*    <Link href="https://x.com/EitzenEnzo">Twitter</Link>*/}
                            {/*</Button>*/}
                            {/*<Separator orientation="vertical"/>*/}
                            <Button asChild>
                                <Link href="https://github.com/EnzoEitzen">Github</Link>
                            </Button>
                            <Separator orientation="vertical"/>
                            <Button asChild>
                                <Link href="https://www.instagram.com/ale7cx/">Insta</Link>
                            </Button>


                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>

    )
}