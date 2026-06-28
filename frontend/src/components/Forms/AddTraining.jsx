import { useState } from "react";
import {
  Save,
  RotateCcw,
  Upload,
} from "lucide-react";

export default function AddTraining() {
  const [formData, setFormData] = useState({
    trainingName: "",
    category: "",
    description: "",

    trainerName: "",
    trainerEmail: "",

    startDate: "",
    endDate: "",
    duration: "",

    mode: "",
    capacity: "",

    state: "",
    district: "",
    unit: "",

    venue: "",

    certificateEnabled: true,
    status: "Upcoming",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Training Created Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Create Training Program
        </h1>

        <p className="text-gray-500 mt-2">
          Manage training sessions, trainers,
          participants and certifications.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Training Details */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Training Information
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Input
              label="Training Name"
              name="trainingName"
              value={formData.trainingName}
              onChange={handleChange}
            />

            <Select
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={[
                "Leadership",
                "First Aid",
                "Disaster Management",
                "Scout Training",
                "Guide Training",
                "Volunteer Orientation",
                "Skill Development",
              ]}
            />

            <Input
              label="Duration (Hours)"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />

            <Input
              type="date"
              label="Start Date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />

            <Input
              type="date"
              label="End Date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />

            <Input
              label="Capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5">
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              placeholder="Training overview..."
            />
          </div>
        </div>

        {/* Trainer Details */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Trainer Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Trainer Name"
              name="trainerName"
              value={formData.trainerName}
              onChange={handleChange}
            />

            <Input
              label="Trainer Email"
              type="email"
              name="trainerEmail"
              value={formData.trainerEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Location & Assignment
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
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

            <Input
              label="Venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
            />

            <Select
              label="Training Mode"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              options={[
                "Offline",
                "Online",
                "Hybrid",
              ]}
            />
          </div>
        </div>

        {/* Upload Materials */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Training Materials
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
              Upload PDF / PPT / Documents
            </p>

            <input
              type="file"
              multiple
              className="hidden"
            />
          </label>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Training Settings
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                "Upcoming",
                "Ongoing",
                "Completed",
                "Cancelled",
              ]}
            />

            <div className="flex items-center gap-3 mt-8">
              <input
                type="checkbox"
                name="certificateEnabled"
                checked={
                  formData.certificateEnabled
                }
                onChange={handleChange}
              />

              <label>
                Generate Certificate after Completion
              </label>
            </div>
          </div>
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
            Create Training
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