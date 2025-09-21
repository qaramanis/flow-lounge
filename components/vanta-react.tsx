// "use client";

// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import WAVES from "vanta/dist/vanta.waves.min.js";

// export default function VantaBackground({ children }) {
//   const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         WAVES({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color: 0x23a6d5,
//           shininess: 50,
//           waveHeight: 20,
//           waveSpeed: 1.0,
//         }),
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return (
//     <div ref={vantaRef} className="w-full h-screen relative">
//       <div className="absolute inset-0 flex items-center justify-center z-10">
//         {children}
//       </div>
//     </div>
//   );
// }
