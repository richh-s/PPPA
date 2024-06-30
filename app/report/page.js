"use client"
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
  { id: 7, title: "New Directive on Financial Management", date: "Oct 28, 2021" },
  { id: 8, title: "Government Owned Fixed Asset Management System", date: "Oct 28, 2021" }
];

const ReportAndUpdates = () => {
  const firstColumnUpdates = updateItems.slice(0, 5); 
  const secondColumnUpdates = updateItems.slice(5, 8); 

  return (
    <div className="container mx-auto mt-24 px-4 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="col-span-1">
          <h1 className="text-3xl font-bold mb-4">Report</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reportItems.map(report => (
              <div key={report.id} className="relative flex flex-col">
                <div className="relative w-full h-[160px] mb-2">
                  <img src={report.imageUrl} alt={report.title} className="w-full h-full object-cover" />
                  {report.id === 1 && (
                    <div className="absolute top-6 left-0 w-full h-[20%] p-2 flex items-center">
                      <div className="text-[#DBDBDB] transform -rotate-90 absolute left-0 top-2 font-bold text-2xl">2014</div>
                      <p className="ml-10 text-[#0A72B4] text-left font-bold">{report.title}</p> 
                    </div>
                  )}
                  {report.id === 2 && (
                    <div className="absolute top-0 left-0 w-full h-[30%] p-2 flex flex-col items-center justify-center bg-[#FFC107] font-bold">
                      <p className="text-center text-[#013146]">Complaints Summary</p>
                      <p className="text-center text-[#013146] font-black">2004 to 2010</p>
                    </div>
                  )}
                </div>
                <div className="flex items-start mt-2">
                  <span className="text-[#727272]">{report.date}</span>
                </div>
                <p className="text-[#727272]">{report.description}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#FFC107] text-[#212529] px-4 py-2 mt-4 rounded self-start">LOAD MORE</button>
        </div>
        <div className="col-span-1">
          <h1 className="text-3xl font-bold mb-4">Updates</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> 
            <div>
              {firstColumnUpdates.map((update, index) => (
                <div key={update.id} className="flex flex-col mb-2"> 
                  <span className="text-[#727272]">{update.date}</span>
                  <p className="text-black font-xs mt-1">{update.title}</p>
                  {index < firstColumnUpdates.length - 1 && <hr className="border-t border-[#BBBBBB] my-2" />}
                </div>
              ))}
            </div>
            <div>
              {secondColumnUpdates.map((update, index) => (
                <div key={update.id} className="flex flex-col mb-2"> 
                  <span className="text-[#727272]">{update.date}</span>
                  <p className="text-black font-xs mt-1">{update.title}</p> 
                  {index < secondColumnUpdates.length - 1 && <hr className="border-t border-[#BBBBBB] my-2" />}
                </div>
              ))}
            </div>
          </div>
          <button className="bg-[#FFC107] text-[#212529] px-4 py-2 mt-4 rounded self-start">LOAD MORE</button>
        </div>
      </div>
    </div>
  );
};

export default ReportAndUpdates;


