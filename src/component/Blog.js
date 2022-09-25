import React from "react";
import "../App.css";
function Blog() {
  const blog = {
    title: "My struggles",
    description: "This is blog description",
  };

  const blogArr = [
    {
      id: 1,
      title: "My struggles",
      description: "This is blog description",
    },
    {
      id: 2,
      title: "My struggles 1",
      description: "This is blog description 1",
    },
    {
      id: 3,
      title: "My struggles 2",
      description: "This is blog description 2",
    },
  ];

  const blogCards = blogArr.map((item, pos) => {
    console.log(item);
    return (
      <div className="BlogCard" key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    );
  });
  return <div>{blogCards}</div>;
}

export default Blog;
