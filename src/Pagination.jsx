import { button } from '@material-tailwind/react';
import React from 'react'

function Pagination({ totalPosts, postsPerPage, setCurrPage, currPage }) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    console.log(currPage);

    return (
        <div>
            <button className={` text-white m-2 bg-gray-700  px-2 py-1
                   `

            }
                disabled={currPage == 1}
                onClick={() => setCurrPage(currPage - 1)}
            >Back</button>
            {
                pages.map((page, index) => {
                    return <button className={` text-white m-2 hover:bg-gray-700  px-2 py-1
                        ${page === currPage ? " bg-pink-500" : "bg-black"}  `
                    }
                        onClick={() => setCurrPage(page)}
                        key={index} >{page}</button>
                })
            }
            <button className={` text-white m-2 bg-gray-700  px-2 py-1
                        `
            }
                disabled={currPage == pages[pages.length - 1]}
                onClick={() => setCurrPage(currPage + 1)}
            >Next</button>
        </div >
    )
}

export default Pagination