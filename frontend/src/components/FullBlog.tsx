import { Blog } from "../hooks/useBlog"
import { Appbar } from "./Appbar"
import { Avatar } from "./Avatar"

export const FullBlog = ({blog}: {blog: Blog}) => {
    return (
        <div>
            <Appbar authName={blog.author.name} />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 gap-4 px-10 pt-20 w-full max-w-screen-2xl">
                    <div className="col-span-8">
                        <div className="text-4xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-xl font-light">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4 text-lg font-medium">
                        <div className="flex flex-col items-start">
                            <div className="flex justify-center items-center">
                                <div className="pr-3">
                                    <Avatar size="small" names={blog.author.name.split(" ")}/>
                                </div>
                                <div>
                                    {blog.author.name}
                                </div>
                            </div>
                            <div className="text-slate-500 mt-2 pl-2 text-sm">
                                Random catcphrase about the author's ability to catch reader's attention
                                using lovely words and phrases, maybe some words so tough to pronounce that you are 
                                reminded of tharoor saab
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}