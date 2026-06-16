import Hero from "../components/Hero";
import Aboutus from "../components/About";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import Events from "../components/Events";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Aboutus />
      <Programs />
      <Events />
    </>
  );
}