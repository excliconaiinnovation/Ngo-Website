export default function About() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
          alt="ngo"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <span className="text-green-600 font-semibold">
            ABOUT US
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Creating Sustainable
            Change For Communities
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We are dedicated to improving lives through
            education, healthcare, environmental protection
            and youth development programs.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-5 rounded-xl shadow">
              <h4 className="font-bold">Our Mission</h4>
              <p className="text-gray-500 mt-2">
                Build stronger communities.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h4 className="font-bold">Our Vision</h4>
              <p className="text-gray-500 mt-2">
                A better future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}