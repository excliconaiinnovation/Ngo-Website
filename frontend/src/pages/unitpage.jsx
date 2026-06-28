import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Building2,
  Users,
  MapPin,
} from "lucide-react";

export default function UnitsPage() {
  const [search, setSearch] = useState("");
  const [openDivision, setOpenDivision] = useState(null);

  const divisions = [
    {
      id: 1,
      division: "Ambala Division",
      districts: [
        {
          name: "Ambala",
          members: 450,
          units: 12,
        },
        {
          name: "Kurukshetra",
          members: 380,
          units: 10,
        },
        {
          name: "Panchkula",
          members: 290,
          units: 8,
        },
        {
          name: "Yamunanagar",
          members: 420,
          units: 11,
        },
      ],
    },

    {
      id: 2,
      division: "Hisar Division",
      districts: [
        {
          name: "Hisar",
          members: 500,
          units: 15,
        },
        {
          name: "Fatehabad",
          members: 240,
          units: 7,
        },
        {
          name: "Jind",
          members: 350,
          units: 9,
        },
        {
          name: "Sirsa",
          members: 410,
          units: 12,
        },
      ],
    },

    {
      id: 3,
      division: "Rohtak Division",
      districts: [
        {
          name: "Rohtak",
          members: 470,
          units: 14,
        },
        {
          name: "Jhajjar",
          members: 260,
          units: 8,
        },
        {
          name: "Bhiwani",
          members: 390,
          units: 11,
        },
        {
          name: "Charkhi Dadri",
          members: 180,
          units: 5,
        },
      ],
    },

    {
      id: 4,
      division: "Gurugram Division",
      districts: [
        {
          name: "Gurugram",
          members: 650,
          units: 18,
        },
        {
          name: "Faridabad",
          members: 610,
          units: 17,
        },
        {
          name: "Nuh",
          members: 210,
          units: 6,
        },
        {
          name: "Palwal",
          members: 280,
          units: 7,
        },
        {
          name: "Rewari",
          members: 300,
          units: 8,
        },
        {
          name: "Mahendragarh",
          members: 260,
          units: 7,
        },
      ],
    },
  ];

  const filteredDivisions = divisions.map((division) => ({
    ...division,
    districts: division.districts.filter((district) =>
      district.name
        .toLowerCase()
        .includes(search.toLowerCase())
    ),
  }));

  const totalDistricts = divisions.reduce(
    (sum, division) =>
      sum + division.districts.length,
    0
  );

  const totalUnits = divisions.reduce(
    (sum, division) =>
      sum +
      division.districts.reduce(
        (a, b) => a + b.units,
        0
      ),
    0
  );

  const totalMembers = divisions.reduce(
    (sum, division) =>
      sum +
      division.districts.reduce(
        (a, b) => a + b.members,
        0
      ),
    0
  );

  return (
    <section className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 px-4 py-2 rounded-full">
            HSGA Network
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Haryana Divisions
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-green-100">
            Explore division wise district units,
            members and organization network.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-4xl font-bold text-green-600">
              {divisions.length}
            </h2>

            <p className="text-gray-500 mt-2">
              Divisions
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-4xl font-bold text-green-600">
              {totalDistricts}
            </h2>

            <p className="text-gray-500 mt-2">
              Districts
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-4xl font-bold text-green-600">
              {totalMembers}
            </h2>

            <p className="text-gray-500 mt-2">
              Members
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-3xl shadow-lg p-5 mb-10">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search District..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                border
                rounded-2xl
                pl-12
                pr-4
                py-4
                outline-none
                focus:ring-2
                focus:ring-green-500
              "
            />
          </div>
        </div>

        {/* Divisions */}
        <div className="space-y-5">
          {filteredDivisions.map((division) => (
            <div
              key={division.id}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                overflow-hidden
              "
            >
              {/* Division Header */}
              <button
                onClick={() =>
                  setOpenDivision(
                    openDivision === division.id
                      ? null
                      : division.id
                  )
                }
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-6
                  bg-green-600
                  text-white
                "
              >
                <div>
                  <h2 className="text-2xl font-bold text-left">
                    {division.division}
                  </h2>

                  <p className="text-green-100 text-sm">
                    {division.districts.length} Districts
                  </p>
                </div>

                {openDivision === division.id ? (
                  <ChevronDown size={28} />
                ) : (
                  <ChevronRight size={28} />
                )}
              </button>

              {/* Districts */}
              {openDivision === division.id && (
                <div className="p-6">
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {division.districts.map(
                      (district, index) => (
                        <div
                          key={index}
                          className="
                            border
                            rounded-2xl
                            p-5
                            hover:shadow-lg
                            transition
                          "
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <Building2 className="text-green-600" />

                            <h3 className="font-bold text-lg">
                              {district.name}
                            </h3>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Users
                                size={18}
                                className="text-green-600"
                              />
                              {district.members} Members
                            </div>

                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin
                                size={18}
                                className="text-green-600"
                              />
                              {district.units} Units
                            </div>
                          </div>

                          <button
                            className="
                              w-full
                              mt-5
                              bg-green-600
                              hover:bg-green-700
                              text-white
                              py-3
                              rounded-xl
                              font-medium
                            "
                          >
                            View District Details
                          </button>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-green-600 text-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              {totalUnits}
            </h2>

            <p className="mt-2">
              Total Active Units
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              {totalMembers}
            </h2>

            <p className="mt-2">
              Registered Members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}