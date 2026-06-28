import { useState } from "react";

export default function JoinNow() {
  const [formData, setFormData] = useState({
    registrationType: "",

    name: "",
    fatherName: "",
    email: "",
    mobile: "",
    age: "",
    dob: "",
    gender: "",
    aadhaar: "",

    state: "",
    district: "",
    city: "",
    pincode: "",
    address: "",

    school: "",
    category: "",

    occupation: "",
    qualification: "",
    experience: "",

    emergencyName: "",
    emergencyMobile: "",

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
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Join Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Hindustan Scouts & Guides Association
          </h1>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Become a member of our national youth movement and develop
            leadership, discipline, service spirit and character through
            scouting and guiding activities.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
        >

          {/* Registration Type */}
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            Registration Type
          </h2>

          <select
            name="registrationType"
            value={formData.registrationType}
            onChange={handleChange}
            className="border rounded-xl p-4 w-full mb-10"
            required
          >
            <option value="">
              Select Registration Type
            </option>

            <option value="Membership Registration">
              Membership Registration
            </option>

            <option value="Volunteer Registration">
              Volunteer Registration
            </option>

            <option value="Scout & Guide Enrollment">
              Scout & Guide Enrollment
            </option>
          </select>

          {/* Personal Information */}
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="border rounded-xl p-4"
              required
            />

            <input
              type="text"
              name="fatherName"
              placeholder="Father / Guardian Name"
              onChange={handleChange}
              className="border rounded-xl p-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="border rounded-xl p-4"
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <select
              name="gender"
              onChange={handleChange}
              className="border rounded-xl p-4"
            >
              <option value="">
                Select Gender
              </option>

              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="aadhaar"
              placeholder="Aadhaar Number"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

          </div>

          {/* Address */}
          <h2 className="text-2xl font-bold mt-12 mb-6 text-green-700">
            Address Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              name="district"
              placeholder="District"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

          </div>

          <textarea
            name="address"
            rows="4"
            placeholder="Full Address"
            onChange={handleChange}
            className="border rounded-xl p-4 w-full mt-6"
          />

          {/* Membership Details */}
          <h2 className="text-2xl font-bold mt-12 mb-6 text-green-700">
            Membership Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="school"
              placeholder="School / College / Organization"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <select
              name="category"
              onChange={handleChange}
              className="border rounded-xl p-4"
            >
              <option value="">
                Select Category
              </option>

              <option>Cub Scout</option>
              <option>Bulbul</option>
              <option>Scout</option>
              <option>Guide</option>
              <option>Rover</option>
              <option>Ranger</option>
              <option>Volunteer</option>
              <option>Adult Leader</option>
            </select>

          </div>

          {/* Volunteer Fields */}
          {formData.registrationType ===
            "Volunteer Registration" && (
            <>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-green-700">
                Volunteer Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                />

                <input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                />

              </div>

              <textarea
                name="experience"
                rows="4"
                placeholder="Volunteer Experience / Skills"
                onChange={handleChange}
                className="border rounded-xl p-4 w-full mt-6"
              />
            </>
          )}

          {/* Scout Fields */}
          {formData.registrationType ===
            "Scout & Guide Enrollment" && (
            <>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-green-700">
                Scout & Guide Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Class"
                  className="border rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="School Roll Number"
                  className="border rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="Unit Name"
                  className="border rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="Scout Master / Guide Captain"
                  className="border rounded-xl p-4"
                />

              </div>
            </>
          )}

          {/* Emergency Contact */}
          <h2 className="text-2xl font-bold mt-12 mb-6 text-green-700">
            Emergency Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="emergencyName"
              placeholder="Emergency Contact Name"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="tel"
              name="emergencyMobile"
              placeholder="Emergency Contact Number"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

          </div>

          {/* Upload */}
          <h2 className="text-2xl font-bold mt-12 mb-6 text-green-700">
            Upload Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="file"
              accept="image/*"
              className="border rounded-xl p-4"
            />

            <input
              type="file"
              className="border rounded-xl p-4"
            />

          </div>

          {/* Additional Info */}
          <textarea
            name="message"
            rows="5"
            placeholder="Why do you want to join?"
            onChange={handleChange}
            className="border rounded-xl p-4 w-full mt-10"
          />

          {/* Declaration */}
          <div className="mt-8 flex gap-3">
            <input type="checkbox" required />

            <p className="text-gray-600">
              I hereby declare that all information
              provided is true and correct.
            </p>
          </div>

          <button
            type="submit"
            className="
              mt-10
              w-full
              bg-gradient-to-r
              from-green-600
              to-emerald-500
              hover:from-green-700
              hover:to-emerald-600
              text-white
              py-4
              rounded-xl
              font-bold
              text-lg
              transition
            "
          >
            Submit Registration
          </button>

        </form>
      </div>
    </section>
  );
}