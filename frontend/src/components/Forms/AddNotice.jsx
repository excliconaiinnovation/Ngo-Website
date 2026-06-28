import { useState } from "react";
import {
  Bell,
  Upload,
  Save,
  RotateCcw,
} from "lucide-react";

export default function AddNotice() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",

    priority: "Normal",

    publishDate: "",
    expiryDate: "",

    audience: "",

    state: "",
    district: "",
    unit: "",

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

    alert("Notice Published Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Create Notice
        </h1>

        <p className="text-gray-500 mt-2">
          Publish announcements, circulars,
          updates and important notices.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Notice Information */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Notice Information
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Input
              label="Notice Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />

            <Select
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={[
                "General",
                "Training",
                "Events",
                "Membership",
                "Administration",
                "Emergency",
              ]}
            />

            <Select
              label="Priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              options={[
                "Low",
                "Normal",
                "High",
                "Urgent",
              ]}
            />

            <Input
              type="date"
              label="Publish Date"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
            />

            <Input
              type="date"
              label="Expiry Date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5">
            <label className="block mb-2 font-medium">
              Notice Description
            </label>

            <textarea
              rows="6"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write notice details..."
              className="
                w-full
                border
                rounded-xl
                p-4
              "
            />
          </div>
        </div>

        {/* Audience */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Target Audience
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <Select
              label="Audience"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              options={[
                "All Members",
                "Volunteers",
                "State Admins",
                "District Admins",
                "Unit Leaders",
                "Scouts",
                "Guides",
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
          </div>
        </div>

        {/* Attachment */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Notice Attachment
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
              Upload PDF / DOC / Image
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
            Notice Settings
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
                "Archived",
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
                Show as Featured Notice
              </label>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={30} />

            <h2 className="text-2xl font-bold">
              Notice Preview
            </h2>
          </div>

          <h3 className="text-xl font-semibold">
            {formData.title || "Notice Title"}
          </h3>

          <p className="mt-2 opacity-90">
            {formData.description ||
              "Notice description preview..."}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {formData.priority}
            </span>

            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {formData.audience || "Audience"}
            </span>
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
            Publish Notice
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