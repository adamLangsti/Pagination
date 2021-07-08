import React from 'react';

const Post = ({ posts, loading }) => {
    return (
        <ul>
            {loading ? (
                <p>Loading...</p>
            ) : (
                posts.map((post, index) => {
                    return <li key={index}>{post.title}</li>;
                })
            )}
        </ul>
    );
};

export default Post;
