import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Experience } from "./Components/Experience";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Technologies } from "./Components/Technologies";

export default function Home() {
  return (
    <div className="absolute min-h-screen top-0 z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 min-h-screen w-full"></div>

        <div className="container mx-auto px-8">
          <Navbar></Navbar>
          <Hero></Hero>
          <About></About>
          <Technologies></Technologies>
          <Experience></Experience>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}
