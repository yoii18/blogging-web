import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/useBlogs"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    
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
    return (
        <div>
            <Appbar authName="Deepesh Salhotra" />
            <div className="max-w-4xl p-5 m-[3%] cursor-pointer">
                {blogs.map(blog => <BlogCard
                id={blog.id}
                authName={blog.author.name} 
                date="" 
                title={blog.title} 
                content={blog.content}  />)}
                
            </div>
        </div>
    )
}


{/* <BlogCard authName="Deepesh Salhotra" 
                date="Dec 18, 2024" 
                title="The Joy of Reading: Exploring Worlds, Expanding Minds, and Embracing the Transformative Power of Literature" 
                content="Reading opens up new worlds and ideas, allowing us to explore different cultures and perspectives. It stimulates our imagination and creativity, enhancing our understanding of our own lives. In today's fast-paced society, taking time to immerse ourselves in a book can be a valuable escape. Whether we are delving into fiction or learning something new through non-fiction, reading enriches our minds and souls. Embrace the joy of reading and discover the treasures it offers! Consider joining a book club to share thoughts and discover hidden gems in literature. Exploring various genres like fantasy, mystery, or historical fiction can transport you to another world, leading to amazing new discoveries."/> */}
