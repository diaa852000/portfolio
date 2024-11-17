import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <Navbar/>
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
