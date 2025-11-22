import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black text-white">
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}


