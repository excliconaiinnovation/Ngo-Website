import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white"> <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold"> Hindustan Scouts & Guides Association </span> <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight"> Empowering Youth Through <br /> Scouting, Leadership & <br /> Community Service </h1> <p className="mt-6 text-xl max-w-3xl text-gray-200"> Join a nationwide movement dedicated to developing character, leadership, discipline and service among young people. Through scouting and guiding activities, we prepare future leaders who contribute positively to society and nation building. </p> 
      <div className="mt-10 flex flex-wrap gap-4"> <Link to="/join_now">
  <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition">
    Join Us Today
  </button>
</Link> 
      <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition"> Explore Programs </button> </div> </div> </section>
  );
}