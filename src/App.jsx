import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import Table from './Table';
import Pagination from './Pagination';
function App() {
  const [posts, setPosts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  useEffect(() => {
    async function fetchPosts() {
      const fetched_posts = await axios.get('https://fakestoreapi.com/products');
      setPosts(fetched_posts.data);
    }
    fetchPosts();
  }, []);
  const endIdx = currPage * 5;
  const startIdx = endIdx - 5;
  const trimmed_posts = posts.slice(startIdx, endIdx);
  return (
    <div className='h-full  p-6' >
      <p className='text-center font-semibold text-xl m-3 '>A simple Pagination</p>
      <div className='mx-auto'>
        <Table trimmed_posts={trimmed_posts} startIdx={startIdx} />
        <div className='flex justify-center m-4' >
          <Pagination 
          setCurrPage={setCurrPage} 
          totalPosts={posts.length} 
          postsPerPage={5} 
          currPage={currPage} />
        </div>
      </div>
    </div>
  )
}

export default App