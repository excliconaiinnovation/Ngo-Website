import { useState } from "react";
import { UserPlus, Upload } from "lucide-react";

export default function AddUser() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    role: "",
    state: "",
    district: "",
    unit: "",
    membershipType: "",
    username: "",
    password: "",
    status: "Active",
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

    alert("User Added Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add New User
        </h1>

        <p className="text-gray-500 mt-2">
          Create a new member, volunteer, district
          admin or unit admin account.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
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
              label="Email"
              name="email"
              type="email"
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

        {/* Organization Details */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Organization Details
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Select
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              options={[
                "Member",
                "Volunteer",
                "Trainer",
                "Unit Admin",
                "District Admin",
                "State Admin",
              ]}
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

            <Select
              label="Membership Type"
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              options={[
                "General Member",
                "Volunteer",
                "Scout",
                "Guide",
                "Leader",
              ]}
            />

            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                "Active",
                "Inactive",
                "Pending",
              ]}
            />
          </div>
        </div>

        {/* Login Details */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Login Credentials
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Upload */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Profile Photo
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
            justify-center
            cursor-pointer
          "
          >
            <Upload size={40} />

            <p className="mt-3">
              Upload Profile Photo
            </p>

            <input
              type="file"
              className="hidden"
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="
            bg-green-600
            hover:bg-green-700
            text-white
            px-8
            py-3
            rounded-xl
            flex
            items-center
            gap-2
          "
          >
            <UserPlus size={18} />
            Create User
          </button>

          <button
            type="reset"
            className="
            border
            px-8
            py-3
            rounded-xl
          "
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

function Input({
  label,
  ...props
}) {
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
        outline-none
        focus:ring-2
        focus:ring-green-500
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