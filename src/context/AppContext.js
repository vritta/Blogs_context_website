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

    async function fetchBlogPost(page){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
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
        fetchBlogPost(page);
    }
    const value={
        loading, setLoading,
        posts, setPosts,
        page, setPage,
        totalPages, setTotalPages,
        fetchBlogPost,
        handlePageChange
    };
    
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
