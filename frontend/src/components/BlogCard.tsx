import { Link } from "react-router-dom";

interface BlogCardProps {
    id : string,
    authorName : string;
    title : string,
    content : string,
    publishedDate : string;
}

export const BlogCard = ({
    id, authorName, title, content, publishedDate 
} : BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
            <div className="flex">
                <Avatar name = {authorName} />
                <div className="font-extralight pl-2 flex justify-center flex-col text-sm">
                    {authorName}
                </div> 
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-400 flex justify-center flex-col text-sm">
                    {publishedDate}
                </div>
                
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-xl font-thin">
                {(content.length > 100) ? content.slice(0, 100) + "..." : content}
            </div>
            <div className="text-slate-400 text-sm">
                {Math.ceil(content.length / 100)} minutes
            </div>
    </div>
    </Link>
}


function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({name, size = "small"}: {name : string, size ?: "small" | "big"}) {
    return <div className={`relative inline-flex items-center justify-center ${size == "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 w-${size} h-${size} rounded-full dark:bg-gray-600`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>{name[0].toUpperCase()}</span>
    </div>
}