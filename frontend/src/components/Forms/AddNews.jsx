import { useState } from "react";
import {
  Newspaper,
  Upload,
  Save,
  RotateCcw,
  Eye,
} from "lucide-react";

export default function AddNews() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    shortDescription: "",
    content: "",
    author: "",
    publishDate: "",
    tags: "",
    metaTitle: "",
    metaDescription: "",
    status: "Draft",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("News Published Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add News Article
        </h1>

        <p className="text-gray-500 mt-2">
          Create and publish news articles for your website.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* News Info */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            News Information
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Input
              label="News Title"
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
                "Events",
                "Education",
                "Environment",
                "Health",
                "Training",
                "Volunteer",
                "Awards",
              ]}
            />

            <Input
              label="Author Name"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />

            <Input
              type="date"
              label="Publish Date"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
            />

            <Input
              label="Tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="ngo, scouts, training"
            />
          </div>

          <div className="mt-5">
            <label className="block mb-2 font-medium">
              Short Description
            </label>

            <textarea
              rows="3"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div className="mt-5">
            <label className="block mb-2 font-medium">
              Full News Content
            </label>

            <textarea
              rows="8"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />
          </div>
        </div>

        {/* Images */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            News Images
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <UploadBox title="Featured Image" />

            <UploadBox title="Gallery Images" multiple />
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            SEO Settings
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Meta Title"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
            />

            <Input
              label="Meta Description"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Publishing */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-xl font-semibold mb-6">
            Publishing Settings
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

              <label>Featured News</label>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper size={30} />
            <h2 className="text-2xl font-bold">
              News Preview
            </h2>
          </div>

          <h3 className="text-xl font-semibold">
            {formData.title || "News Title"}
          </h3>

          <p className="mt-3 opacity-90">
            {formData.shortDescription ||
              "Short description preview..."}
          </p>

          <div className="mt-4 flex gap-3 flex-wrap">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {formData.category || "Category"}
            </span>

            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {formData.author || "Author"}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            <Save size={18} />
            Publish News
          </button>

          <button
            type="button"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            <Eye size={18} />
            Preview
          </button>

          <button
            type="reset"
            className="flex items-center gap-2 border px-6 py-3 rounded-xl"
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

/* Components */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        {...props}
        className="w-full border rounded-xl px-4 py-3"
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
        className="w-full border rounded-xl px-4 py-3"
      >
        <option value="">
          Select {label}
        </option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function UploadBox({ title, multiple }) {
  return (
    <label
      className="
        border-2
        border-dashed
        rounded-2xl
        p-8
        flex
        flex-col
        items-center
        cursor-pointer
      "
    >
      <Upload size={40} />

      <p className="mt-3">{title}</p>

      <input
        type="file"
        multiple={multiple}
        className="hidden"
      />
    </label>
  );
}