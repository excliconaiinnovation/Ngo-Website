import { useState } from "react";
import {
  Upload,
  Save,
  RotateCcw,
} from "lucide-react";

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventCategory: "",
    description: "",
    startDate: "",
    endDate: "",
    registrationDeadline: "",
    capacity: "",

    state: "",
    district: "",
    unit: "",

    venue: "",
    city: "",
    address: "",

    organizerName: "",
    organizerPhone: "",
    organizerEmail: "",

    status: "Draft",
    featured: false,
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

    alert("Event Created Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Create Event
        </h1>

        <p className="text-gray-500 mt-2">
          Create and manage NGO events,
          camps, workshops and activities.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Event Information */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Event Information
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Input
              label="Event Name"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
            />

            <Select
              label="Event Category"
              name="eventCategory"
              value={formData.eventCategory}
              onChange={handleChange}
              options={[
                "Training Camp",
                "Workshop",
                "Seminar",
                "Plantation Drive",
                "Medical Camp",
                "Youth Program",
                "Awareness Campaign",
              ]}
            />

            <Input
              label="Maximum Capacity"
              name="capacity"
              value={formData.capacity}
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
              type="date"
              label="Registration Deadline"
              name="registrationDeadline"
              value={formData.registrationDeadline}
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
              placeholder="Event description..."
            />
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Event Location
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
              label="Venue Name"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
            />

            <Input
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5">
            <label className="block mb-2 font-medium">
              Full Address
            </label>

            <textarea
              rows="3"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />
          </div>
        </div>

        {/* Organizer */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Organizer Information
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <Input
              label="Organizer Name"
              name="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="organizerPhone"
              value={formData.organizerPhone}
              onChange={handleChange}
            />

            <Input
              label="Email Address"
              name="organizerEmail"
              value={formData.organizerEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Event Banner */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Event Banner
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
              Upload Event Banner
            </p>

            <input
              type="file"
              className="hidden"
            />
          </label>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Event Settings
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                "Draft",
                "Published",
                "Upcoming",
                "Completed",
                "Cancelled",
              ]}
            />

            <div className="flex items-center gap-3 mt-8">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />

              <label>
                Show as Featured Event
              </label>
            </div>
          </div>
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
            <Save size={18} />
            Create Event
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