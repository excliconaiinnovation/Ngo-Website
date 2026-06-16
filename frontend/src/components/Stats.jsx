const stats = [
{
value: "15,000+",
title: "Registered Members",
},
{
value: "500+",
title: "Training Camps",
},
{
value: "100+",
title: "Affiliated Schools",
},
{
value: "25+",
title: "State Units",
},
];

export default function Stats() {
return ( <section className="bg-green-600 py-20 text-white"> <div className="max-w-7xl mx-auto px-6">


    <div className="text-center mb-14">
      <span className="uppercase tracking-wider font-semibold">
        Our Impact
      </span>

      <h2 className="text-5xl font-bold mt-4">
        Building Leaders Across India
      </h2>

      <p className="mt-4 max-w-3xl mx-auto text-green-100">
        Through scouting, guiding, leadership development and
        community service, we continue to inspire thousands of
        young people to become responsible citizens and future
        leaders.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="text-4xl font-bold">
            {item.value}
          </h3>

          <p className="mt-3 text-green-100">
            {item.title}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


);
}
