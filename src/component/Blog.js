import React from 'react';
import '../App.css';
function Blog() {
    const blog =  {
        title:"My struggles",
        description :"This is blog description"
    }

  return (
      <div className='BlogCard'>
          
          <h3>{blog.title}</h3><p>{blog.description}</p></div>
  )
}

export default Blog