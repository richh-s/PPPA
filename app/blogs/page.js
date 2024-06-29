// components/Blogs.js
import React from 'react';

const blogItems = [
  {
    id: 1,
    title: "Adwa is the indelible symbol for Ethiopians",
    date: "Oct 28, 2021",
    category: "Blog",
    imageUrl: "../assets/images/blog1.png",
  },
  {
    id: 2,
    title: "A new promising cooperation for the new year",
    date: "Oct 28, 2021",
    category: "Blog",
    imageUrl: "../assets/images/blog2.png",
  },
  {
    id: 3,
    title: "Domestic changes in Ethiopia amid economic reforms",
    date: "Oct 28, 2021",
    category: "Blog",
    imageUrl: "../assets/images/blog3.png",
  },
  {
    id: 4,
    title: "The authority has urged all institutions to use electronic government procurement systems",
    date: "Oct 28, 2021",
    category: "Blog",
    imageUrl: "../assets/images/blog4.png",
  },
  {
    id: 5,
    title: "The Government Procurement and Assets Authority is providing training to suppliers engaged in various fields of work",
    date: "Oct 28, 2021",
    category: "Blog",
    imageUrl: "../assets/images/blog5.png",
  },
  // Add more blog items as needed
];

const Blogs = () => {
  return (
    <div className="container mx-auto mt-24 px-4 md:px-16 lg:px-24">
      <hr className="mb-6 border-t-1 border-[#0D0D0D]" />
      <h1 className="text-3xl font-bold mb-4 text-[#272727]">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {blogItems.map(blog => (
          <div key={blog.id} className="flex flex-col">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center mt-2">
              <span className="bg-[#D2AC47] text-white px-2 rounded">{blog.category}</span>
              <span className="ml-2 text-[#727272]">{blog.date}</span>
            </div>
            <p className="text-[#0D0D0D] text-sm mt-2">{blog.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

