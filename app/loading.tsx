import React from 'react'
// import './globals.css'
 function Loading () {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
// const Loading = () => {
//     return (
//       <div
//         role='status'
//         className='max-w-6xl animate-pulse space-y-4  divide-y divide-gray-200 rounded p-4 shadow dark:divide-gray-700 dark:border-gray-700 md:p-6'
//       >
//         {[...Array(10)].map((_, i) => (
//           <div key={i} className='flex items-center justify-between '>
//             <div>
//               <div className='mb-2.5  w-24 h-24 rounded-3xl bg-gray-300 dark:bg-gray-600'></div>
//               <div className='h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700'></div>
//             </div>
//             <div className='h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700'></div>
//           </div>
//         ))}
  
//         <span className='sr-only'>Loading...</span>
//       </div>
//     );
//   };
  
  export default Loading;