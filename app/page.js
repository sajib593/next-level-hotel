
import countries from "@/component/countries";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


    <countries></countries>
    
     <h1 className="text-3xl font-bold">This is hotel Home page</h1>
    </div>
  );
}
