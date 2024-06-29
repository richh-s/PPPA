// components/ReportAndUpdates.js
import React from 'react';

const reportItems = [
  {
    id: 1,
    title: "Procurement Annual Budget Internal Audit Findings",
    date: "Oct 28, 2021",
    category: "Report",
    imageUrl: "../assets/images/report1.png",
    description: "Procurement Annual Budget Audit Findings Summary Report On Public Bodies"
  },
  {
    id: 2,
    title: "Complaints Summary 2004 to 2010",
    date: "Oct 28, 2021",
    category: "Report",
    imageUrl: "../assets/images/report2.png",
    description: "Complaints Summary 2004 to 2010"
  }
];

const updateItems = [
  { id: 1, title: "Stock Management Training Module", date: "Oct 28, 2021" },
  { id: 2, title: "FDRE Property Directives", date: "Oct 28, 2021" },
  { id: 3, title: "Government Owned Fixed Asset Management Training Manual", date: "Oct 28, 2021" },
  { id: 4, title: "SBD Textbooks NCB November Updated", date: "Oct 28, 2021" },
  { id: 5, title: "Find S.B.D for Property Disposal", date: "Oct 28, 2021" },
  { id: 6, title: "Macro-Fiscal Performance in Ethiopia and Recent Fiscal Policy Developments", date: "Oct 28, 2021" },
];

const ReportAndUpdates = () => {
  return (
    <div className="container mx-auto mt-12 px-4 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Report</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reportItems.map(report => (
              <div key={report.id} className="flex flex-col">
                <img src={report.imageUrl} alt={report.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                <div className="flex items-center mb-2">
                  <span className="bg-[#D2AC47] text-white px-2 rounded">{report.category}</span>
                  <span className="ml-2 text-[#727272]">{report.date}</span>
                </div>
                <p className="text-[#003366] font-bold mb-2">{report.title}</p>
                <p className="text-[#727272]">{report.description}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#FFC107] text-[#212529] px-4 py-2 mt-4 rounded self-start">LOAD MORE</button>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Updates</h1>
          <div className="space-y-4">
            {updateItems.map(update => (
              <div key={update.id} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-[#727272]">{update.date}</span>
                  <p className="text-[#003366] font-semibold">{update.title}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-[#FFC107] text-[#212529] px-4 py-2 mt-4 rounded self-start">LOAD MORE</button>
        </div>
      </div>
    </div>
  );
};

export default ReportAndUpdates;
