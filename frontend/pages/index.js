import Cards from "@/components/Cards";
import Charts from "@/components/Charts";
import Records from "@/components/Records";

export default function Home() {
  return (
    <main className="h-full px-[120px] pt-8 bg-[#F3F4F6] ">
      <Cards />
      <Charts />
      <Records />
    </main>
  );
}
