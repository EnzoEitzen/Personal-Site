import {SocialMediaLink} from "@/components/customUI/SocialMediaLink";
import {
    BreadcrumbLink,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {NavigationBar} from "@/components/customUI/NavigationBar";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";


const interests = [
    "Photography",
    "Walking / Hiking",
    "Music",
    "Exploring",
    "Philosophy",
    "Programming",
    "Swimming",
]

export default function Home() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        <NavigationBar>
            <BreadcrumbLink href={"/"}>Home</BreadcrumbLink>
            <BreadcrumbLink href={"/music"}>Music</BreadcrumbLink>
            <BreadcrumbPage>About</BreadcrumbPage>
        </NavigationBar>

        <div className="flex flex-col place-items-center mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-5 lg:text-center">
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">About My Interests</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                        I believe in the power of diverse interests to enrich life and foster personal growth. <br/>
                        Here are the activities that bring joy to my free time:
                    </p>
                    <ul className="space-y-2">
                        {interests.map((interest, index) => (
                            <li key={index} className="text-lg">{interest}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>

        <div className={"flex flex-col"}>
            <div
                className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-zinc-100 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:via-zinc-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-zinc-700 before:dark:opacity-10 after:dark:from-zinc-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <p className="font-extrabold italic text-black">Enzo </p>
                <p className="font-extrabold italic text-black"><br/>Eitzen</p>
            </div>
            <SocialMediaLink/>
        </div>
    </main>);
}
