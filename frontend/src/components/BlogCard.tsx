import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogProps {
    authName: string,
    date: string,
    title: string,
    content: string,
    id: string
}

export const BlogCard = ({id, authName, date, title, content}: BlogProps) => {
    function splitName(authName: string){
        const names = authName.split(' ');
        return names;
    }
    const names = splitName(authName);
    const formattedName = `${names[1]} ${names[0][0]}. `

    return (
        <Link to={`/blog/${id}`}>
            <div className="p-3 text-justify border-b border-slate-200 pb-2">
                <div className="flex justify-start items-center">
                    
                    <Avatar names={names} size="small"/>
                    <div className="ml-3 font-medium text-black">
                        { formattedName }
                    </div>
                    <div className="ml-3 font-light text-slate-600">
                        {date}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold mt-3">
                        {title}
                    </div>
                    <div className="text-l font-light mt-2">
                        {content.length > 500 ? content.slice(0, 300) + "..." : content}
                    </div>
                </div>
            </div>
        </Link>
    )
}