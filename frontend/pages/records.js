import Recordscategory from "@/components/Recordscategory";
import Recordsmain from "@/components/Recordsmain";

export default function Records() {
  return (
    <main className="h-screen px-[120px] pt-8 bg-[#F3F4F6] flex gap-[37px]">
      <Recordscategory />
      <Recordsmain />
    </main>
  );
}
