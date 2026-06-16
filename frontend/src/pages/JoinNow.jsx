import { useState } from "react";

export default function JoinNow() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    state: "",
    city: "",
    school: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Registration Submitted Successfully!");
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Join Us
          </span>

          <h1 className="text-5xl font-bold mt-4">
            Join Hindustan Scouts & Guides
          </h1>

          <p className="mt-4 text-gray-600">
            Become a part of our youth development movement and help
            create a better future through leadership, service and
            character building.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
              required
            />

            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
              required
            />

            <select
              name="gender"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
            />

            <input
              type="text"
              name="school"
              placeholder="School / College Name"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
            />

            <select
              name="category"
              onChange={handleChange}
              className="border rounded-xl p-4 w-full"
              required
            >
              <option value="">Select Category</option>
              <option>Cub Scout</option>
              <option>Bulbul</option>
              <option>Scout</option>
              <option>Guide</option>
              <option>Rover</option>
              <option>Ranger</option>
              <option>Volunteer</option>
            </select>
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Why do you want to join?"
            onChange={handleChange}
            className="border rounded-xl p-4 w-full mt-6"
          />

          <button
            type="submit"
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  );
}