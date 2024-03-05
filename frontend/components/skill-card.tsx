interface Props {
    skill: string,
    thumbnail: string,
    years: number
    index: number
}
export function SkillCard({ skill, thumbnail, years, index }: Props) {
    return (
        <div
            className="flex flex-col items-center animate-slideIn opacity-0"
            style={{ "--delay": `${0.1 * index}s` } as React.CSSProperties}
        >
            <img
                alt="Skill thumbnail"
                className="rounded-full object-contain object-center w-24 h-24 mb-4 hover:scale-150 transition-transform duration-200 ease-in-out"
                src={thumbnail != "" ? thumbnail : "/placeholder.svg"}
            />
            <h3 className="font-bold">{skill}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{years} years</p>
        </div>
    )
}