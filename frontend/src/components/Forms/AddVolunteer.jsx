import { useState } from "react";
import {
  
  RotateCcw,
  Upload,
  UserPlus,
} from "lucide-react";

export default function AddVolunteer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",

    state: "",
    district: "",
    unit: "",

    volunteerType: "",
    skills: "",
    experience: "",
    availability: "",

    emergencyName: "",
    emergencyMobile: "",

    status: "Pending",
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

    alert("Volunteer Registered Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add Volunteer
        </h1>

        <p className="text-gray-500 mt-2">
          Register a new volunteer for NGO activities.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Personal Information */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />

            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={[
                "Male",
                "Female",
                "Other",
              ]}
            />

            <Input
              label="Date of Birth"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* NGO Assignment */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            NGO Assignment
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <Input
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />

            <Input
              label="District"
              name="district"
              value={formData.district}
              onChange={handleChange}
            />

            <Input
              label="Unit"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
            />

            <Select
              label="Volunteer Type"
              name="volunteerType"
              value={formData.volunteerType}
              onChange={handleChange}
              options={[
                "General Volunteer",
                "Event Volunteer",
                "Trainer",
                "Medical Volunteer",
                "Disaster Response",
                "Social Worker",
              ]}
            />
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Skills & Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Skills
              </label>

              <textarea
                rows="4"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="First Aid, Leadership, Communication..."
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Previous Experience
              </label>

              <textarea
                rows="4"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Describe volunteer experience..."
                className="w-full border rounded-xl p-4"
              />
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Availability
          </h2>

          <Select
            label="Available Time"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            options={[
              "Weekdays",
              "Weekends",
              "Full Time",
              "Part Time",
              "On Demand",
            ]}
          />
        </div>

        {/* Emergency Contact */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Emergency Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Contact Person"
              name="emergencyName"
              value={formData.emergencyName}
              onChange={handleChange}
            />

            <Input
              label="Emergency Mobile"
              name="emergencyMobile"
              value={formData.emergencyMobile}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Upload Documents
          </h2>

          <label
            className="
            border-2 border-dashed
            rounded-2xl
            p-10
            flex flex-col items-center
            cursor-pointer
          "
          >
            <Upload size={40} />

            <p className="mt-3">
              Upload ID Proof / Photo
            </p>

            <input
              type="file"
              className="hidden"
            />
          </label>
        </div>

        {/* Status */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-4">
            Volunteer Status
          </h2>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
              border
              rounded-xl
              px-4
              py-3
              w-64
            "
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="
            flex items-center gap-2
            bg-green-600
            hover:bg-green-700
            text-white
            px-6 py-3
            rounded-xl
          "
          >
            <UserPlus size={18} />
            Register Volunteer
          </button>

          <button
            type="reset"
            className="
            flex items-center gap-2
            border
            px-6 py-3
            rounded-xl
          "
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        {...props}
        className="
          w-full
          border
          rounded-xl
          px-4 py-3
        "
      />
    </div>
  );
}

function Select({
  label,
  options,
  ...props
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <select
        {...props}
        className="
          w-full
          border
          rounded-xl
          px-4 py-3
        "
      >
        <option value="">
          Select {label}
        </option>

        {options.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}