import { CardContent, Card } from "@/components/ui/card"
import { ArrowRightIcon } from "@/components/ui/icons/arrow-icons"
import Link from "next/link"

interface Props {
    name: string,
    description: string,
    thumbnail: string,
    url: string,
    index: number
}


export function ProjectCard({ name, description, thumbnail, url, index }: Props) {
    return (
        <div
            className="relative group lg:max-h-[500px] lg:max-w-[700px] sm:w-full animate-slideIn opacity-0"
            style={{ "--delay": `${0.3 * index}s` } as React.CSSProperties}
        >
            <Link className="absolute inset-0 flex items-center justify-center align-center p-4 z-10" href={url}>
                <ArrowRightIcon className="w-6 h-6 translate-x-2 group-hover:translate-x-4 transition-transform duration-200 ease-in-out text-gray-50 peer-group-hover:text-gray-50 lg:block md:block hidden" />
            </Link>
            <img
                alt="Project thumbnail"
                className="rounded-lg object-cover object-center w-full aspect-video overflow-hidden group-hover:brightness-75 transition-transform duration-200 ease-in-out"
                src={thumbnail != "" ? thumbnail : "/placeholder.svg"}
            />
            <Card className="w-full absolute bottom-0 translate-y-1 peer-group:translate-y-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out">
                <CardContent className="p-4">
                    <h3 className="font-bold truncate">{name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{description}</p>
                </CardContent>
            </Card>
        </div>
    )
}