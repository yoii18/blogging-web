import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks/useBlog"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";

export const Blog = () => {
    const { id } = useParams()
    const { loading, blog } = useBlog({id: id || ""});

    if (loading){
        return <div>
            <Appbar authName="Deepesh Salhotra" />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
        </div>
    }

    else if (!blog){
        return <div>
            blog doesn't exist
        </div>
    }

    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    )
}