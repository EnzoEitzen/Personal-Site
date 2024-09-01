import LainCarousel from "@/components/ui/lainCarousel";


export default function Home() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LainCarousel/>

        <div className="mb-32 flex flex-col place-items-center text-center lg:max-w-5xl lg:w-full lg:mb-5 lg:text-left">
            <h1 className="m-5 font-black text-3xl flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-zinc-100 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:via-zinc-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-zinc-700 before:dark:opacity-10 after:dark:from-zinc-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">Hello,
                I'm Enzo Ale</h1>

            <p className="text-lg italic hover:not-italic">I am high school student, planning to study computer science. <br/> I mainly like
                back end dev and IOT dev.</p>

        </div>

        <div
            className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-zinc-100 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:via-zinc-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-zinc-700 before:dark:opacity-10 after:dark:from-zinc-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <p className={"font-extrabold italic text-black"}>Enzo </p>
            <br/>
            <p className={"font-extrabold italic text-black"}><br/>Eitzen</p>
        </div>

    </main>);
}
