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
    <div className="w-16 flex-shrink-0 relative bg-[#0A1835]">
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