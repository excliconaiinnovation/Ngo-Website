import { useState } from "react";
import {
  Shield,
  Save,
  RotateCcw,
  CheckSquare,
} from "lucide-react";

export default function AddRole() {
  const permissionsList = [
    "Manage Members",
    "Manage Units",
    "Manage Events",
    "Manage Trainings",
    "Manage Certificates",
    "Manage News",
    "Manage Gallery",
    "Manage Donations",
    "Manage Reports",
    "Manage Settings",
  ];

  const [formData, setFormData] = useState({
    roleName: "",
    roleDescription: "",
    roleLevel: "",
    status: "Active",
    permissions: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePermissionChange = (
    permission
  ) => {
    const exists =
      formData.permissions.includes(permission);

    setFormData({
      ...formData,
      permissions: exists
        ? formData.permissions.filter(
            (p) => p !== permission
          )
        : [...formData.permissions, permission],
    });
  };

  const handleSelectAll = () => {
    setFormData({
      ...formData,
      permissions: permissionsList,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Role Created Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add New Role
        </h1>

        <p className="text-gray-500 mt-2">
          Create role and assign permissions
          for system users.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Role Details */}
        <div className="bg-white border rounded-3xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Role Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Role Name
              </label>

              <input
                type="text"
                name="roleName"
                value={formData.roleName}
                onChange={handleChange}
                placeholder="State Admin"
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
              "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Role Level
              </label>

              <select
                name="roleLevel"
                value={formData.roleLevel}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
              "
              >
                <option value="">
                  Select Level
                </option>

                <option>
                  National
                </option>

                <option>
                  State
                </option>

                <option>
                  District
                </option>

                <option>
                  Unit
                </option>

                <option>
                  Member
                </option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Role Description
              </label>

              <textarea
                rows="4"
                name="roleDescription"
                value={formData.roleDescription}
                onChange={handleChange}
                placeholder="Role description..."
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
              "
              />
            </div>
          </div>
        </div>

        {/* Permissions */}
        <div className="bg-white border rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Permissions
            </h2>

            <button
              type="button"
              onClick={handleSelectAll}
              className="
              flex items-center gap-2
              bg-blue-600
              text-white
              px-4
              py-2
              rounded-xl
            "
            >
              <CheckSquare size={18} />
              Select All
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {permissionsList.map(
              (permission) => (
                <label
                  key={permission}
                  className="
                  flex
                  items-center
                  gap-3
                  border
                  rounded-xl
                  p-4
                  cursor-pointer
                  hover:bg-gray-50
                "
                >
                  <input
                    type="checkbox"
                    checked={formData.permissions.includes(
                      permission
                    )}
                    onChange={() =>
                      handlePermissionChange(
                        permission
                      )
                    }
                  />

                  {permission}
                </label>
              )
            )}
          </div>
        </div>

        {/* Status */}
        <div className="bg-white border rounded-3xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Status
          </h2>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
            w-full
            md:w-64
            border
            rounded-xl
            px-4
            py-3
          "
          >
            <option>
              Active
            </option>

            <option>
              Inactive
            </option>
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
            Save Role
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