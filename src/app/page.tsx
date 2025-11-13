import { DateProvider } from "@/components/DateContext";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import CenterRule from "@/components/CenterRule";

export default function HomePage() {
  return (
    <DateProvider>
      <main className="min-h-screen bg-[#020817] flex flex-col md:flex-row">
        {/* LEFT SIDEBAR - visible sur mobile ET fixe sur desktop */}
        <div className="w-full md:w-[40%] bg-[#020817] md:fixed md:left-0 md:top-0 md:h-screen overflow-hidden">
          <LeftSidebar />
        </div>

        {/* CONTENU DROIT */}
        <div className="flex-1 flex flex-col md:flex-row md:ml-[40%]">
          {/* LIGNE CENTRALE (visible uniquement sur desktop) */}
          <div className="hidden md:block w-0 flex-shrink-0 relative bg-[#030919]">
            <CenterRule />
          </div>

          {/* CONTENU PRINCIPAL */}
          <div className="flex-1 bg-[#020817] overflow-y-auto">
            <RightSidebar />
          </div>
        </div>
      </main>
    </DateProvider>
  );
}
