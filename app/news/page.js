
import React from "react";

const newsItems = [
  {
    id: 1,
    title: "It has been reported that there is an issue that provides item definition and specification for E-PP Pipe System in the Construction, Utilities and Product Catalog.",
    date: "Feb 22, 2023",
    category: "News",
    imageUrl: "../assets/images/news1.png",
    description: "Honorable Ato Woldeab Demse, Director General of the Government Procurement and Property Authority, stated that the preparation of product catalogs, defining items and preparation of specifications is being done so that we can easily transact the procurement of construction, goods and services through the e-GP system."
  },
  {
    id: 2,
    title: "A consultation forum was held to help improve the government procurement and asset management system",
    date: "Feb 12, 2023",
    category: "News",
    imageUrl: "../assets/images/news2.png"
  },
  {
    id: 3,
    title: "Awareness raising training was given on government procurement and property management",
    date: "Feb 22, 2023",
    category: "News",
    imageUrl: "../assets/images/news3.png"
  },
  {
    id: 4,
    title: "The authority discussed with the regional procurement and property control bodies",
    date: "Feb 7, 2023",
    category: "News"
  },
  {
    id: 5,
    title: "It was announced that government electronic procurement (e-GP) will be implemented in nine (9) federal institutions selected for trial implementation from July 1/2013",
    date: "Feb 6, 2023",
    category: "News"
  },
  {
    id: 6,
    title: "The Federal Government Procurement and Property Management Agency held the first property handover ceremony",
    date: "Feb 5, 2023",
    category: "News"
  },
  {
    id: 7,
    title: "The movement of registration and disposal of government properties is going to take place",
    date: "Feb 4, 2023",
    category: "News"
  },
  {
    id: 8,
    title: "A consultation forum was held with the Ethiopian Chamber of Commerce and Sectoral Associations, the federal and regional governments.",
    date: "Feb 3, 2023",
    category: "News"
  },
  // Add more news items as needed
];

const News = () => {
  const mainNews = newsItems[0];
  const secondColumnNews = newsItems.slice(1, 3);
  const thirdColumnNews = newsItems.slice(3, 8);

  return (
    <div className="container mx-auto mt-8 px-4 md:px-16 lg:px-24">
   <hr className="mb-6 border-t-1 border-[#0D0D0D]" />

      <h1 className="text-3xl font-bold mt-4 mb-4 text-[#272727]">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
        <div className="flex flex-col">
          <div className="flex-grow">
            <img src={mainNews.imageUrl} alt={mainNews.title} className="w-full h-auto mb-4" />
            <div className="flex items-center mb-2">
              <span className="bg-[#D2AC47] text-white px-2 rounded">{mainNews.category}</span>
              <span className="ml-2 text-[#727272]">{mainNews.date}</span>
            </div>
            <h2 className="text-xl text-[#003366] font-bold mb-4">{mainNews.title}</h2>
            <p className="text-[#727272]">{mainNews.description}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-grow">
            {secondColumnNews.map(news => (
              <div key={news.id} className="flex flex-col mb-4">
                <img src={news.imageUrl} alt={news.title} className="w-full h-32 object-cover  mb-2" />
                <div className="flex items-center mb-2">
                  <span className="bg-[#D2AC47] text-white px-2 rounded">{news.category}</span>
                  <span className="ml-2 text-[#727272]">{news.date}</span>
                </div>
                <div className="w-[250px]">
                  <p className="text-[#003366] ">{news.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-grow">
            {thirdColumnNews.map(news => (
              <div key={news.id} className="flex flex-col mb-4">
                <div className="flex items-center mb-2">
                  <span className="bg-[#D2AC47] text-white px-2 rounded">{news.category}</span>
                  <span className="ml-2 text-[#727272]">{news.date}</span>
                </div>
                <div className="w-[350px]">
                  <p className="text-[#003366] mb-2">{news.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto">
            <button className="bg-[#FFC107] text-[#212529] px-4 py-2 rounded self-start">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
