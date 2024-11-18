import Approach from "@/components/Approach";
import Experience from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="w-full max-w-7xl">
        <Navbar/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
