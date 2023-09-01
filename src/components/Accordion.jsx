import React from "react";


const Accordion = () => {
  return (
   <div className=" w-full md:w-fit h-full px-6 md:px-[8.2rem] pb-36 md:pb-56 relative z-20 mx-auto">
      <div className="md:w-[45rem]  py-2">
       
<div className=" border border-white  rounded-t-lg bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
    <input type="checkbox"  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10
    cursor-pointer" />
    <div className="h-12 w-full pl-5  text-white flex items-center">
        <h1 className="md:text-xl font-bold  text-lg ">
            Day 1
        </h1>
    </div>
    <div className="absolute top-4 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </div>
    <div className=" bg-transparent transition-all duration-500 max-h-40 peer-checked:max-h-0">
        <div className="p-5 border-t">
            <p className="md:text-lg text-sm text-white font-base ">
                - Pengenalan UI/UX (General, dan perbedaan)
                <br/>
                - Pengenalan Profesi di UI/UX dan Prospek
                 <br/>
                - Pengenalan Tools Apa saja yang digunakan dalam UI/UX
                <br/>
                - Penjelasan Penugasan
                </p>
</div>
    </div>
</div>

<div className=" border-l border-r border-b border-white  bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
    <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
    <div className="h-12 w-full pl-5 text-white flex items-center">
        <h1 className="md:text-xl font-bold  text-lg ">
            Day 2
        </h1>
    </div>
    <div className="absolute top-4 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </div>
    <div className="overflow-hidden bg-transparent transition-all duration-500 max-h-0 peer-checked:max-h-40">
        <div className="p-5 border-t">
             <p className="md:text-lg text-sm text-white font-base mb-3 ">
                - Design Process
                <br/>
                - Design Thinking
                <br/>
                - Contoh Studi Kasus
                <br/>
                - Wireframing dan UI Design (Color, Font Systems, Layout and Grids, Typography, Iconography)
            </p>
</div>
    </div>
</div>

<div className=" border-l border-r border-b border-white   bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
    <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
    <div className="h-12 w-full pl-5 text-white flex items-center">
         <h1 className="md:text-xl font-bold  text-lg ">
            Day 3
        </h1>
    </div>
    <div className="absolute top-4 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </div>
    <div className="overflow-hidden bg-transparent transition-all duration-500 max-h-0 peer-checked:max-h-40">
        <div className="p-5 border-t">
             <p className="md:text-lg text-sm text-white font-base ">
                - Praktikum Bersama Design UI
                 <br/>
                - Prototyping
            </p>
</div>
    </div>
</div>

<div className=" border-l border-r border-b border-white  rounded-b-lg bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
    <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
    <div className="h-12 w-full pl-5 text-white flex items-center">
        <h1 className="md:text-xl font-bold  text-lg ">
            Day 4
        </h1>
    </div>
    <div className="absolute top-4 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </div>
    <div className="overflow-hidden bg-transparent transition-all duration-500 max-h-0 peer-checked:max-h-40">
        <div className="p-5 border-t">
             <p className="md:text-lg text-sm text-white font-base ">
                - Penjelasan portofolio bagi UI/UX Designer
                 <br/>
                - Presentasi Project Penugasan

            </p>
</div>
    </div>
</div>

      </div>
    </div>

//     <div className="relative overflow-hidden w-full md:w-fit h-full px-6 md:px-[10.2rem] pb-36 md:pb-56 relative z-20 mx-auto border border-b-0 border-gray-200">
//     <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
//     <div className=" flex items-center lex items-center justify-between w-full p-5 font-medium text-left text-gray-500  " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
//       <span>What is Flowbite?</span>
//       <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
//       </svg>
//     </div>
//     <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//     </div>
//     <div className="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-40">
//         <div className="p-5 border-t">Answer 1</div>
//     </div>
// </div>
  );
};

export default Accordion;
