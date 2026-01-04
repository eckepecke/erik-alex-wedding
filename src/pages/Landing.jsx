// import React, { useState, useEffect } from 'react';
// import { Heart, Calendar, MapPin, Mail } from 'lucide-react';

// const Landing = () => {
//   const [showContent, setShowContent] = useState(false);
//   const [fadeAnimation, setFadeAnimation] = useState(false);

//   useEffect(() => {
//     // Entrance animation sequence
//     const timer1 = setTimeout(() => setFadeAnimation(true), 500);
//     const timer2 = setTimeout(() => setShowContent(true), 3500);
//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, []);

//   // Calculate countdown
//   const weddingDate = new Date('2025-08-15T16:00:00');
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = weddingDate - now;

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   if (!showContent) {
//     return (
//       <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-white to-rose-100 flex items-center justify-center overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
//         </div>

//         {/* Entrance animation */}
//         <div className={`relative z-10 text-center transition-all duration-2000 ${fadeAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//           <div className="mb-8">
//             <Heart className="w-16 h-16 mx-auto text-rose-400 animate-pulse" />
//           </div>
//           <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-4 tracking-tight">
//             Sarah & James
//           </h1>
//           <p className="text-2xl md:text-3xl text-gray-600 font-light italic">
//             are getting married
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
//         {/* Animated background patterns */}
//         <div className="absolute inset-0 overflow-hidden opacity-20">
//           <div className="absolute top-0 left-0 w-full h-full">
//             {[...Array(20)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute rounded-full bg-rose-300"
//                 style={{
//                   width: Math.random() * 100 + 50 + 'px',
//                   height: Math.random() * 100 + 50 + 'px',
//                   top: Math.random() * 100 + '%',
//                   left: Math.random() * 100 + '%',
//                   animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
//                   animationDelay: Math.random() * 5 + 's',
//                   opacity: Math.random() * 0.3 + 0.1
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Main content */}
//         <div className="relative z-10 text-center max-w-5xl mx-auto animate-fadeIn">
//           {/* Decorative top flourish */}
//           <div className="mb-8 flex justify-center">
//             <div className="flex items-center gap-3">
//               <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300"></div>
//               <Heart className="w-8 h-8 text-rose-400" fill="currentColor" />
//               <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300"></div>
//             </div>
//           </div>

//           {/* Names */}
//           <div className="mb-6">
//             <h1 className="text-7xl md:text-9xl font-serif text-gray-800 mb-2 tracking-tight leading-none">
//               Sarah & James
//             </h1>
//             <div className="flex items-center justify-center gap-3 mt-4">
//               <div className="h-px w-16 bg-rose-300"></div>
//               <p className="text-xl md:text-2xl text-gray-600 font-light italic">
//                 invite you to celebrate their wedding
//               </p>
//               <div className="h-px w-16 bg-rose-300"></div>
//             </div>
//           </div>

//           {/* Date and Location */}
//           <div className="mb-12 space-y-4">
//             <div className="flex items-center justify-center gap-3 text-gray-700">
//               <Calendar className="w-6 h-6 text-rose-400" />
//               <p className="text-2xl md:text-3xl font-light">
//                 August 15, 2025
//               </p>
//             </div>
//             <div className="flex items-center justify-center gap-3 text-gray-700">
//               <MapPin className="w-6 h-6 text-rose-400" />
//               <p className="text-xl md:text-2xl font-light">
//                 Garden Estate, Santorini
//               </p>
//             </div>
//           </div>

//           {/* Countdown Timer */}
//           <div className="mb-12">
//             <p className="text-lg text-gray-600 mb-6 font-light">Counting down to our special day</p>
//             <div className="flex justify-center gap-4 md:gap-8">
//               {[
//                 { value: timeLeft.days, label: 'Days' },
//                 { value: timeLeft.hours, label: 'Hours' },
//                 { value: timeLeft.minutes, label: 'Minutes' },
//                 { value: timeLeft.seconds, label: 'Seconds' }
//               ].map(({ value, label }) => (
//                 <div key={label} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg min-w-20 md:min-w-24">
//                   <div className="text-3xl md:text-5xl font-serif text-rose-500 mb-1">
//                     {value}
//                   </div>
//                   <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
//                     {label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <button className="group relative px-8 py-4 bg-rose-500 text-white rounded-full text-lg font-medium overflow-hidden transition-all hover:shadow-2xl hover:scale-105">
//               <span className="relative z-10">RSVP Now</span>
//               <div className="absolute inset-0 bg-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//             </button>
//             <button className="px-8 py-4 bg-white text-rose-500 border-2 border-rose-500 rounded-full text-lg font-medium hover:bg-rose-50 transition-all hover:shadow-lg hover:scale-105">
//               View Details
//             </button>
//           </div>

//           {/* Decorative bottom flourish */}
//           <div className="flex justify-center">
//             <div className="flex items-center gap-3">
//               <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300"></div>
//               <Heart className="w-6 h-6 text-rose-400" fill="currentColor" />
//               <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300"></div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex items-start justify-center p-2">
//             <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Links Section */}
//       <section className="py-24 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-4">
//             Everything You Need to Know
//           </h2>
//           <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
//             From directions to dress code, we've got all the details covered
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Calendar className="w-8 h-8" />,
//                 title: 'Event Details',
//                 description: 'Timeline, venue information, and what to expect'
//               },
//               {
//                 icon: <MapPin className="w-8 h-8" />,
//                 title: 'Travel & Stay',
//                 description: 'Accommodations, directions, and local attractions'
//               },
//               {
//                 icon: <Mail className="w-8 h-8" />,
//                 title: 'Get in Touch',
//                 description: 'Questions? We\'re here to help'
//               }
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border border-rose-100"
//               >
//                 <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all group-hover:scale-110">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-2xl font-serif text-gray-800 mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//           }
//           25% {
//             transform: translateY(-20px) translateX(10px);
//           }
//           50% {
//             transform: translateY(-40px) translateX(-10px);
//           }
//           75% {
//             transform: translateY(-20px) translateX(5px);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Landing;