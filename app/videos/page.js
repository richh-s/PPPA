// components/MediaSection.js
import React from 'react';

const MediaSection = () => {
  return (
    <div className="container mx-auto mt-8 px-4 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Videos</h1>
          <div className="relative bg-gray-100 rounded-lg shadow-sm overflow-hidden">
            <img src="../assets/images/video.png" alt="Video Thumbnail" className="w-full h-auto" />
            <a href="#" className="absolute inset-0 flex items-center justify-center text-white text-5xl">
              <span className="bg-red-600 p-4 rounded-full">&#9658;</span>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Tweet</h1>
          <div className="relative bg-gray-100 rounded-lg shadow-sm overflow-hidden">
            <a className="twitter-timeline" href="https://twitter.com/MoF_Ethiopia" data-height="400">Tweets by @MoF_Ethiopia</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
