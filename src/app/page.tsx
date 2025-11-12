// import LeftSidebar from "@/components/LeftSidebar";
// import RightSidebar from "@/components/RightSidebar";
// import CenterRule from "@/components/CenterRule";

// export default function HomePage() {
//   return (
//     <main className="flex flex-col lg:flex-row min-h-screen bg-[#030712]">
//       {/* === MOBILE LAYOUT === */}
//       <div className="lg:hidden flex flex-col w-full">
//         {/* Left en haut */}
//         <div className="bg-[#051534] p-6">
//           <LeftSidebar />
//         </div>

//         {/* Center au milieu */}
//         <div className="flex justify-center my-6">
//           <CenterRule />
//         </div>

//         {/* Right en bas */}
//         <div className="bg-[#030712] p-6">
//           <RightSidebar />
//         </div>
//       </div>

//       {/* === DESKTOP LAYOUT === */}
//       <div className="hidden lg:flex w-full min-h-screen">
//         {/* LeftSidebar (fixe) */}
//         <div className="w-1/2 bg-[#051534] fixed top-0 left-0 h-full overflow-hidden">
//           <LeftSidebar />
//         </div>

//         {/* CenterRule (fixe) */}
//         <div className="w-[1px] bg-[#104282] fixed top-0 left-1/2 h-full flex items-center justify-center">
//           <CenterRule />
//         </div>

//         {/* RightSidebar (scrollable) */}
//         <div className="flex-1 lg:ml-[50%] lg:pl-[1px] overflow-y-auto p-6">
//           <RightSidebar />
//         </div>
//       </div>
//     </main>
//   );
// }


import { DateProvider } from "@/components/DateContext";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import CenterRule from "@/components/CenterRule";

export default function HomePage() {
  return (
    <DateProvider>
     <main className="flex min-h-screen bg-[#020817]">
  {/* LEFT SIDEBAR - Augmentez le pourcentage ici */}
  <div className="w-[40%] h-screen fixed left-0 top-0 bg-[#020817] overflow-hidden">
    <LeftSidebar />
  </div>

  {/* CENTER + RIGHT - Ajustez la marge gauche pour correspondre */}
  <div className="ml-[40%] flex-1 flex">
    {/* CENTER RULE - Réduisez la largeur ici */}
    <div className="w-16 flex-shrink-0 relative bg-[#020817]">
      <CenterRule />
    </div>

    {/* RIGHT SIDEBAR */}
    <div className="flex-1 bg-[#020817] overflow-y-auto">
      <RightSidebar />
    </div>
  </div>
</main>
    </DateProvider>
  );
}