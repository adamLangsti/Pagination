import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/index.css';
import Post from './components/Post';
import Pagination from './components/Pagination';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const fetchPosts = async () => {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const responseJson = await response.data;
        setPosts(responseJson);
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber, event) => {
      event.preventDefault();
      setCurrentPage(pageNumber);
    };

    return (
        <div className='container'>
            <h1>
                <Post posts={currentPosts} loading={loading} />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </h1>
        </div>
    );
};

export default App;
