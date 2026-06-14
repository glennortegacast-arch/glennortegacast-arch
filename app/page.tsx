import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Work />
      <Contact />
    </>
  );
}
