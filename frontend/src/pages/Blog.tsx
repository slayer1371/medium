import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { useBlog } from "../hooks";
import { Blogpage } from "../components/Blogpage";

//atomFamilies/ selectorFamily

export default function Blog(){
    const {id} = useParams<{ id?: string }>();
  const {loading, blog, error} = useBlog({
    id : id || ""
  });

  if(loading) {
    return <div>
                <Appbar />
                <div className="flex justify-center items-center h-screen">
                    <div className="text-xl font-semibold">Loading blog...</div>
                </div>
            </div>
  }

    // Display error state
    if (error) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center items-center h-screen">
                    <div className="text-red-500 text-xl font-semibold">Error: {error}</div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center items-center h-screen">
                    <div className="text-xl font-semibold">Blog not found.</div>
                </div>
            </div>
        );
    }

return (
        <div>
            <Appbar />
            <Blogpage blog = {blog}/>
        </div>
)
}