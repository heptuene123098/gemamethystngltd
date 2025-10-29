// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import SplitType from "split-type";
// import Aos from "aos";

// export default function Pricing() {
//   const containerRef = useRef(null);
//   const servicesRef = useRef(null);
//   const serviceItemsRef = useRef([]);
//   const headerTitleRef = useRef(null);
//   const headerTextRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Split text for header elements
//     const titleSplit = new SplitType(headerTitleRef.current, {
//       types: "chars,words",
//       tagName: "span",
//     });

//     const textSplit = new SplitType(headerTextRef.current, {
//       types: "lines,words",
//       tagName: "span",
//     });

//     // Header animations timeline
//     const headerTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play none none reverse",
//       },
//     });

//     // Animate title characters
//     headerTl
//       .from(titleSplit.chars, {
//         opacity: 0,
//         y: 100,

//         stagger: 0.02,
//         duration: 1,
//         ease: "power4.out",
//       })
//       // Animate paragraph words
//       .from(
//         textSplit.lines,
//         {
//           opacity: 0,
//           y: 50,
//           duration: 1,
//           stagger: 0.03,
//           ease: "power3.out",
//         },
//         "-=0.5"
//       );

//     // Set initial states
//     gsap.set(serviceItemsRef.current.slice(1), {
//       yPercent: 100,
//       opacity: 1,
//     });

//     // Create main timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: servicesRef.current,
//         start: "top 20%",
//         end: "+=300%",
//         pin: true,
//         pinSpacing: true,
//         scrub: 1,
//       },
//     });

//     // Add animations for each service item with different yPercent values
//     serviceItemsRef.current.forEach((item, index) => {
//       if (index === 1) {
//         tl.to(item, {
//           yPercent: 11,
//           opacity: 1,
//           duration: 1,
//           ease: "none",
//         });
//       }
//       if (index === 2) {
//         tl.to(item, {
//           yPercent: 18,
//           opacity: 1,
//           duration: 1,
//           ease: "none",
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative min-h-screen">
//       <section className="relative bg-[#F4F5F9] border-rounded-t-3xl ">
//         {/* Header Section - Static */}
//         <div className="py-16 max-w-[93%] mx-auto">
//           <h1
//             ref={headerTitleRef}
//             className="phoneL:text-3xl tablet:text-4xl wide:text-5xl font-bold overflow-hidden text-black text-center mb-8"
//           >
//             ABOUT US
//           </h1>
//         </div>

//         {/* Services Section - Pinned with stacking animation */}
//         <div ref={servicesRef} className="relative h-screen">
//           <div className="border-t border-[#7A7875] border-opacity-40 ">
//             {/* Service 1 */}
//             <div
//               ref={(el) => (serviceItemsRef.current[0] = el)}
//               className="service-panel h-[70%] bg-[#F4F5F9] border-t border-black absolute inset-0  py-8 px-4  md:px-16 flex flex-col md:flex-row border-b border-opacity-40"
//             >
//               <div className="w-full md:w-1/3 mb-4 md:mb-0">
//                 <h2 className="text-lg md:text-3xl font-bold">(01)</h2>
//               </div>
//               <div className="w-full md:w-2/3">
//                 <div className="flex justify-between items-start mb-6">
//                   <h3 className="text-xl wide:text-2xl text-black font-bold">
//                     Mission:
//                   </h3>
//                 </div>
//                 <p className="text-md wide:text-lg lg:max-w-[50%] text-black mb-8">
//                   To equip engineering students and young professional with the
//                   tools, skills and mindset required to become pathfinders and
//                   trailblazers in their fields—starting from within the walls of
//                   their institutions.
//                 </p>

//                 <div className="space-y-4 text-xl font-bold"></div>
//               </div>
//             </div>

//             {/* Service 2 */}
//             <div
//               ref={(el) => (serviceItemsRef.current[1] = el)}
//               className="service-panel h-[70%] bg-[#F4F5F9] absolute inset-0 py-8 px-4  md:px-16 flex flex-col md:flex-row border-t border-[#7A7875] border-opacity-40"
//             >
//               <div className="w-full md:w-1/3 mb-4 md:mb-0">
//                 <h2 className="text-lg md:text-3xl font-bold">(02)</h2>
//               </div>
//               <div className="w-full md:w-2/3">
//                 <div className="flex justify-between items-start mb-6">
//                   <h3 className="text-xl wide:text-2xl text-black font-bold">
//                     Vision:
//                   </h3>
//                 </div>
//                 <p className="text-md wide:text-lg lg:max-w-[50%] text-black mb-8">
//                   To build a vibrant community and learning ecosystem where
//                   future engineers and innovators thrive by:
//                 </p>

//                 <div className="space-y-4 text-md wide:text-lg font-bold">
//                   <div className="border-t border-[#7A7875] border-opacity-40 py-4">
//                     <div className="flex">
//                       <span className=" text-[#7A7875] text-opacity-90 mr-4">
//                         01
//                       </span>
//                       <span className="font-medium">
//                         Learning in-demand, industry-relevant skills.
//                       </span>
//                     </div>
//                   </div>
//                   <div className="border-t border-[#7A7875] border-opacity-40 py-4">
//                     <div className="flex">
//                       <span className=" text-[#7A7875] text-opacity-90 mr-4">
//                         02
//                       </span>
//                       <span className="font-medium">
//                         Gaining real-world exposure through mentorship,
//                         hands-projects, and internships.
//                       </span>
//                     </div>
//                   </div>
//                   <div className="border-t border-[#7A7875] border-opacity-40 py-4">
//                     <div className="flex">
//                       <span className=" text-[#7A7875] text-opacity-90 mr-4">
//                         03
//                       </span>
//                       <span className="font-medium"></span>Developing the
//                       leadership, creative, and entrepreneurial mindset needed
//                       for impactful careers
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Service 3 */}
//             <div
//               ref={(el) => (serviceItemsRef.current[2] = el)}
//               className="service-panel h-[85%] bg-[#F4F5F9] absolute inset-0 py-8 px-4 md:px-16 flex flex-col md:flex-row border-t  border-[#7A7875] border-opacity-40"
//             >
//               <div className="w-full md:w-1/3 mb-4 md:mb-0">
//                 <h2 className="text-lg md:text-3xl font-bold">(03)</h2>
//               </div>
//               <div className="w-full md:w-2/3">
//                 <div className="flex justify-between items-start mb-6">
//                   <h3 className="text-xl wide:text-2xl text-black font-bold">
//                     Our services:
//                   </h3>
//                 </div>
//                 <div className="space-y-4 text-md font-bold">
//                   <div className="border-t border-[#7A7875] border-opacity-40 py-4">
//                     <div className="flex">
//                       <span className=" text-[#7A7875] text-opacity-90 mr-4">
//                         01
//                       </span>
//                       <span className="font-medium">
//                         Skill Development Tracks
//                       </span>
//                     </div>
//                   </div>
//                   <div className="border-t border-[#7A7875] border-opacity-40 py-4">
//                     <div className="flex">
//                       <span className=" text-[#7A7875] text-opacity-90 mr-4">
//                         02
//                       </span>
//                       <span className="font-medium">
//                         Career Development Tracks
//                       </span>
//                     </div>
//                   </div>
//                   <div className="border-t border-[#7A7875] border-opacity-40 py-4">
//                     <div className="flex">
//                       <span className=" text-[#7A7875] text-opacity-90 mr-4">
//                         03
//                       </span>
//                       <span className="font-medium">
//                         Live Projects & Industry Challenges
//                       </span>
//                     </div>
//                   </div>
//                   <div className="border-t border-[#7A7875] border-opacity-40 py-4">
//                     <div className="flex">
//                       <span className=" text-[#7A7875] text-opacity-90 mr-4">
//                         04
//                       </span>
//                       <span className="font-medium">Events & Hackathons</span>
//                     </div>
//                   </div>
//                   <div className="border-t border-[#7A7875] border-opacity-40 py-4">
//                     <div className="flex">
//                       <span className=" text-[#7A7875] text-opacity-90 mr-4">
//                         05
//                       </span>
//                       <span className="font-medium">
//                         Certification & Recognition
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
