import React, { createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';
//step 1
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    // const data = await axios.get(baseUrl);
    // console.log(data);

    async function fetchBlogPosts(page, tag=null, category=null){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if (tag){
            url+= `&tag=${tag}`
        }
        if (category){
            url+= `&category=${category}`
        }
        // console.log("priting the data "+ url);
        try{
            const result = await fetch(url);
            const data = await result.json();
            // console.log("ko"+data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(err){
            console.log("Error in fetching the data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
    const value={
        loading, setLoading,
        posts, setPosts,
        page, setPage,
        totalPages, setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };
    
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
