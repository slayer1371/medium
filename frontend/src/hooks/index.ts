import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface Blog {
    content : string,
    title : string,
    id : string,
    author : {
        name : string
    }

}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    // Corrected type: blog should be a single Blog object or null/undefined
    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState<string | null>(null); // State to store error messages

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true); // Start loading
            setError(null); // Clear previous errors
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setBlog(response.data.post); // Assuming response.data.post is a single blog object
            } catch (err: any) {
                console.error("Error fetching single blog:", err);
                if (axios.isAxiosError(err)) {
                    // More specific error message for Axios errors
                    setError(`Failed to fetch blog: ${err.response?.statusText || err.message}`);
                } else {
                    setError("An unexpected error occurred while fetching the blog.");
                }
                setBlog(null); // Ensure blog is null on error
            } finally {
                setLoading(false); // End loading regardless of success or failure
            }
        };

        if (id) { // Only fetch if ID is provided
            fetchBlog();
        } else {
            setLoading(false);
            setError("No blog ID provided.");
        }
    }, [id]); // Re-run effect if ID changes

    return {
        loading,
        blog,
        error // Return error state
    };
}

export const useBlogs = () => {
    const [loading, setLoading]  = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=> {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setBlogs(response.data.posts)
                setLoading(false);
            })
    }, [])
    
    return {
        loading,
        blogs
    }
}