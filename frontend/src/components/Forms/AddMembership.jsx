import { useState } from "react";
import {
  UserPlus,
  Upload,
  Save,
  RotateCcw,
} from "lucide-react";

export default function AddMembership() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    bloodGroup: "",

    state: "",
    district: "",
    unit: "",

    address: "",

    emergencyName: "",
    emergencyMobile: "",

    membershipType: "",
    joiningDate: "",

    fee: "",
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

    alert("Membership Application Submitted");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add Membership
        </h1>

        <p className="text-gray-500 mt-2">
          Register a new member in the organization.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Personal Details */}
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
              label="Father / Guardian Name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />

            <Input
              label="Email"
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

            <Input
              label="Blood Group"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Organization Details */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Membership Details
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Select
              label="Membership Type"
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              options={[
                "Scout",
                "Guide",
                "Volunteer",
                "Trainer",
                "Leader",
              ]}
            />

            <Input
              label="Joining Date"
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
            />

            <Input
              label="Membership Fee"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
            />

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
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Address Information
          </h2>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            placeholder="Enter complete address"
            className="
              w-full
              border
              rounded-xl
              p-4
            "
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
              label="Contact Number"
              name="emergencyMobile"
              value={formData.emergencyMobile}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Upload Documents */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Upload Documents
          </h2>

          <label
            className="
              border-2
              border-dashed
              rounded-2xl
              p-10
              flex
              flex-col
              items-center
              cursor-pointer
            "
          >
            <Upload size={40} />

            <p className="mt-3">
              Upload Photo / ID Proof
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
            Application Status
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

        {/* Buttons */}
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
            <Save size={18} />
            Save Membership
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
          px-4
          py-3
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
          px-4
          py-3
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