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

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <span className="bg-green-600 px-4 py-2 rounded-full">
          NGO • Youth Development
        </span>

        <h1 className="text-6xl font-bold mt-6 leading-tight">
          Together We Build
          <br />
          A Better Tomorrow
        </h1>

        <p className="mt-6 text-xl max-w-2xl">
          Empowering communities through education,
          healthcare, environment and youth leadership.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg">
            Join Us Today
          </button>

          <button className="border border-white px-8 py-4 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}