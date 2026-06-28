import { useState } from "react";
import {
  Settings,
  Building2,
  Mail,
  Phone,
  Globe,
  Shield,
  Save,
} from "lucide-react";

export default function SystemSettings() {
  const [settings, setSettings] = useState({
    organizationName: "Hindustan Scouts & Guides Association",
    email: "info@hsga.org",
    phone: "+91 9876543210",
    website: "www.hsga.org",
    address: "New Delhi, India",

    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",

    enableRegistration: true,
    enableDonations: true,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Settings className="text-blue-600" size={32} />
        <div>
          <h1 className="text-3xl font-bold">
            System Settings
          </h1>
          <p className="text-gray-500">
            Manage organization and website settings
          </p>
        </div>
      </div>

      {/* Organization Settings */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <Building2 size={22} />
          <h2 className="text-xl font-semibold">
            Organization Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">
              Organization Name
            </label>

            <input
              type="text"
              name="organizationName"
              value={settings.organizationName}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Address
            </label>

            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>
        </div>
      </div>

      {/* Contact Settings */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <Phone size={22} />
          <h2 className="text-xl font-semibold">
            Contact Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>
        </div>
      </div>

      {/* Website Settings */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <Globe size={22} />
          <h2 className="text-xl font-semibold">
            Website Settings
          </h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Website URL
            </label>

            <input
              type="text"
              name="website"
              value={settings.website}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Facebook
              </label>

              <input
                type="text"
                name="facebook"
                value={settings.facebook}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Instagram
              </label>

              <input
                type="text"
                name="instagram"
                value={settings.instagram}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                YouTube
              </label>

              <input
                type="text"
                name="youtube"
                value={settings.youtube}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                LinkedIn
              </label>

              <input
                type="text"
                name="linkedin"
                value={settings.linkedin}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security & Features */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <Shield size={22} />
          <h2 className="text-xl font-semibold">
            Features & Security
          </h2>
        </div>

        <div className="space-y-5">
          <label className="flex items-center justify-between border rounded-xl p-4">
            <span>Enable Member Registration</span>

            <input
              type="checkbox"
              name="enableRegistration"
              checked={settings.enableRegistration}
              onChange={handleChange}
            />
          </label>

          <label className="flex items-center justify-between border rounded-xl p-4">
            <span>Enable Donations</span>

            <input
              type="checkbox"
              name="enableDonations"
              checked={settings.enableDonations}
              onChange={handleChange}
            />
          </label>

          <label className="flex items-center justify-between border rounded-xl p-4">
            <span>Maintenance Mode</span>

            <input
              type="checkbox"
              name="maintenanceMode"
              checked={settings.maintenanceMode}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          <Save size={18} />
          Save Settings
        </button>
      </div>
    </div>
  );
}