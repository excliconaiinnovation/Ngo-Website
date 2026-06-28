import Hero from "../components/Hero";
import Aboutus from "../components/About";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import Events from "../components/Events";
import Calendar from "../components/Calendar";
import LatestNews from "../components/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Aboutus />
      <Programs />

      {/* Upcoming Events Calendar */}
      <Calendar />

      {/* Latest News & Updates */}
      <LatestNews />

      <Events />
    </>
  );
}