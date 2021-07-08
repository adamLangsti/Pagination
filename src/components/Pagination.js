import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination-list">
                {pageNumbers.map((number, index) => {
                    return (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href={index}>{number}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
