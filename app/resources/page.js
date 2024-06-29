// components/Resources.js
import React from 'react';

const resourceItems = [
  { id: 1, title: "Stock Management Training Module", downloadLink: "#" },
  { id: 2, title: "FDRE Property Directives", downloadLink: "#" },
  { id: 3, title: "Macro-Fiscal Performance in Ethiopia and Recent Fiscal Policy Developments", downloadLink: "#" },
  { id: 4, title: "SBD Textbooks NCB November Updated", downloadLink: "#" },
  { id: 5, title: "Government Owned Fixed Asset Management Training Manual", downloadLink: "#" },
  { id: 6, title: "Stock Management Training Module", downloadLink: "#" },
  { id: 7, title: "VAT Proclamation Latest Draft - Amharic - 2023", downloadLink: "#" },
  { id: 8, title: "SBD Textbooks NCB November Updated", downloadLink: "#" }
];

const Resources = () => {
  return (
    <div className="container mx-auto  px-4 md:px-16 lg:px-32 mt-12 mb-8">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resourceItems.map(resource => (
          <div key={resource.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-[#003366]">{resource.title}</p>
            <a href={resource.downloadLink} className="bg-[#FFC107] text-[#212529] px-4 py-2 rounded">DOWNLOAD</a>
          </div>
        ))}
      </div>
      <button className="bg-[#FFC107] text-[#212529] px-4 py-2 mt-4 rounded">LOAD MORE</button>
    </div>
  );
};

export default Resources;
