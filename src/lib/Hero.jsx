// import { useEffect, useRef } from 'react';
// import TubesCursor from 'threejs-components/build/cursors/tubes1.min.js';
// import { Typewriter } from 'react-simple-typewriter';

// const Hero = () => {
//   const canvasRef = useRef(null);
//   const appRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     appRef.current = TubesCursor(canvas, {
//       tubes: {
//         colors: ['#f967fb', '#53bc28', '#6958d5'],
//         lights: {
//           intensity: 200,
//           colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
//         },
//       },
//     });

//     const handleClick = () => {
//       if (!appRef.current) return;
//       appRef.current.tubes.setColors(randomColors(3));
//       appRef.current.tubes.setLightsColors(randomColors(4));
//     };

//     document.addEventListener('click', handleClick);

//     return () => {
//       document.removeEventListener('click', handleClick);
//       window.removeEventListener('resize', resizeCanvas);
//       if (appRef.current?.dispose) appRef.current.dispose();
//     };
//   }, []);

//   const randomColors = (count) =>
//     Array.from({ length: count }, () =>
//       `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, '0')}`
//     );

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* Three.js Canvas */}
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

//       {/* Overlay */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none">

//         {/* Center Content */}
//         <div className="flex-1 flex flex-col items-center justify-center mt-32">

//           {/* Animated Typewriter Subtitle */}
//           <p className="mt-4 text-white text-4xl md:text-5xl text-center max-w-2xl tracking-wide font-semibold">
//             <Typewriter
//               words={[
//                 'AI Optimization',
//                 'Smart Workflow',
//                 'Cloud Sync',
//                 'Real-Time Analytics',
//                 'Futuristic Productivity',
//               ]}
//               loop={0}
//               cursor
//               cursorStyle="|"
//               typeSpeed={80}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </p>

//           {/* AI-Style Glowing Button */}
//           <button className="
//             mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
//             text-white font-bold rounded-3xl shadow-[0_0_20px_rgba(0,255,255,0.7)]
//             relative
//             overflow-hidden
//             transition-all
//             duration-300
//             hover:scale-105
//             hover:shadow-[0_0_40px_rgba(0,255,255,0.9)]
//             before:absolute
//             before:-inset-1
//             before:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
//             before:blur-2xl
//             before:opacity-60
//             before:rounded-3xl
//             before:content-['']
//           ">
//             Launch AI
//           </button>

//           <div
//             onClick={() => { alert("ok") }}
//             className='mx-auto w-7 h-12 border-2 mt-10 rounded-full flex justify-center items-center '>
//             <div className='w-[3px] h-5 rounded-full animate-bounce bg-white' />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useEffect, useRef } from 'react';
import TubesCursor from 'threejs-components/build/cursors/tubes1.min.js';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    appRef.current = TubesCursor(canvas, {
      tubes: {
        colors: ['#f967fb', '#53bc28', '#6958d5'],
        lights: {
          intensity: 200,
          colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
        },
      },
    });

    const handleClick = () => {
      if (!appRef.current) return;
      appRef.current.tubes.setColors(randomColors(3));
      appRef.current.tubes.setLightsColors(randomColors(4));
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
      if (appRef.current?.dispose) appRef.current.dispose();
    };
  }, []);

  const randomColors = (count) =>
    Array.from({ length: count }, () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`
    );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center mt-32">
          {/* Animated Typewriter Subtitle */}
          <p className="mt-4 text-white text-4xl md:text-5xl text-center max-w-2xl tracking-wide font-semibold">
            <Typewriter
              words={[
                'AI Optimization',
                'Smart Workflow',
                'Cloud Sync',
                'Real-Time Analytics',
                'Futuristic Productivity',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* AI-Style Glowing Button */}
          <button className="
            mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
            text-white font-bold rounded-3xl shadow-[0_0_20px_rgba(0,255,255,0.7)]
            relative
            overflow-hidden
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(0,255,255,0.9)]
            before:absolute
            before:-inset-1
            before:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
            before:blur-2xl
            before:opacity-60
            before:rounded-3xl
            before:content-empty
          ">
            Launch AI
          </button>

          {/* Scroll Indicator */}
          <a
            href='#service'
            className='mx-auto w-7 h-12 border-2 mt-10 rounded-full flex justify-center items-center cursor-pointer'>
            <div className='w-[3px] h-5 rounded-full animate-bounce bg-white' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
