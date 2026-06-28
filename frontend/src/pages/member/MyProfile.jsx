import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
} from "lucide-react";

export default function MyProfile() {
  const profile = {
    name: "Arjun Sharma",
    role: "District Leader",
    chapter: "Mumbai West",
    email: "arjun.sharma@email.com",
    phone: "+91 98765 43210",
    dob: "March 15, 1998",
    gender: "Male",
    nationality: "Indian",
    aadhaar: "XXXX-XXXX-7845",
    address: "A-42, Andheri West, Mumbai",
    state: "Maharashtra",
    pincode: "400058",
    image: "https://i.pravatar.cc/300?img=12",
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl border shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Image */}
            <div className="relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-28 h-28 rounded-3xl object-cover border-4 border-slate-100"
              />

              <button
                className="
                absolute
                -bottom-2
                -right-2
                bg-orange-500
                text-white
                p-2
                rounded-full
                shadow-lg
                hover:bg-orange-600
              "
              >
                <Edit size={16} />
              </button>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {profile.name}
              </h1>

              <p className="text-slate-500 text-lg mt-1">
                {profile.role} • {profile.chapter}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                  Active
                </span>

                <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  District Leader
                </span>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <button
            className="
            flex items-center gap-2
            bg-blue-700
            hover:bg-blue-800
            text-white
            px-6 py-3
            rounded-2xl
            font-medium
            transition
          "
          >
            <Edit size={18} />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white rounded-3xl border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="text-blue-600" size={22} />
            <h2 className="text-2xl font-bold">
              Personal Information
            </h2>
          </div>

          <div className="space-y-5">
            <ProfileRow
              label="Full Name"
              value={profile.name}
            />

            <ProfileRow
              label="Date of Birth"
              value={profile.dob}
            />

            <ProfileRow
              label="Gender"
              value={profile.gender}
            />

            <ProfileRow
              label="Nationality"
              value={profile.nationality}
            />

            <ProfileRow
              label="Aadhaar (masked)"
              value={profile.aadhaar}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-3xl border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <Mail className="text-blue-600" size={22} />
            <h2 className="text-2xl font-bold">
              Contact Information
            </h2>
          </div>

          <div className="space-y-5">
            <ProfileRow
              label="Email"
              value={profile.email}
            />

            <ProfileRow
              label="Phone"
              value={profile.phone}
            />

            <ProfileRow
              label="Address"
              value={profile.address}
            />

            <ProfileRow
              label="State"
              value={profile.state}
            />

            <ProfileRow
              label="PIN Code"
              value={profile.pincode}
            />
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-3xl p-6 shadow-sm">
          <Calendar
            className="text-blue-600 mb-4"
            size={28}
          />

          <p className="text-slate-500 text-sm">
            Member Since
          </p>

          <h3 className="text-xl font-bold mt-2">
            January 2021
          </h3>
        </div>

        <div className="bg-white border rounded-3xl p-6 shadow-sm">
          <MapPin
            className="text-green-600 mb-4"
            size={28}
          />

          <p className="text-slate-500 text-sm">
            District
          </p>

          <h3 className="text-xl font-bold mt-2">
            Mumbai West
          </h3>
        </div>

        <div className="bg-white border rounded-3xl p-6 shadow-sm">
          <Phone
            className="text-orange-600 mb-4"
            size={28}
          />

          <p className="text-slate-500 text-sm">
            Membership Status
          </p>

          <h3 className="text-xl font-bold mt-2 text-green-600">
            Active
          </h3>
        </div>
      </div>
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b pb-4">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium text-slate-900 text-right">
        {value}
      </span>
    </div>
  );
}