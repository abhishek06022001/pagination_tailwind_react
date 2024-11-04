import React from 'react'

function Table({ trimmed_posts, startIdx }) {
  return (
    <div>
          {
              trimmed_posts.map((post,index) => {
                  return <div className='mx-auto bg-slate-100 w-[700px] flex border border-solid ' >
                      <div className=' p-1 flex-1 border border-solid' >{startIdx+1+index}</div>
                      <div className=' p-1 flex-1 border border-solid' >{post.category}</div>
                      <div className=' p-1 flex-1 border border-solid'>{post.title}</div>
                  </div>
              })
          }
    </div>
  )
}

export default Table