import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {

    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string
    }
    
}

export const useBlog = ({ id }: {id: string}) => {

    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState <Blog | null> (null)

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setBlog(res.data.blog)
            setLoading(false);
        })
    }, [id])

    return {
        loading,
        blog
    }
    
}