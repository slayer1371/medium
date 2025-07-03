import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const {loading, blogs} = useBlogs();

  if(loading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          {blogs.map(blog => <BlogCard 
          id = {blog.id}
          authorName={blog.author.name || "Anonymous"}
          title={blog.title}
          content={blog.content}
          publishedDate={"18th June 2025"}
          />
        )}
        </div>
      </div>
    </div>
  );
};
