import {
  QrCode,
  Download,
  Printer,
  BadgeCheck,
} from "lucide-react";

export default function DigitalIdCard() {
  const member = {
    id: "HSGA-2026-001234",
    name: "Arjun Sharma",
    role: "District Leader",
    chapter: "Mumbai West",
    state: "Maharashtra",
    validTill: "31 Dec 2026",
    photo: "https://i.pravatar.cc/300?img=12",
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Digital ID Card
        </h1>

        <p className="text-slate-500 mt-2">
          View, download and print your membership ID card.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex justify-center">
        <div
          className="
          w-full
          max-w-2xl
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-xl
          border
        "
        >
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Hindustan Scouts & Guides
                </h2>

                <p className="text-blue-100">
                  Digital Membership Card
                </p>
              </div>

              <BadgeCheck size={42} />
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Member Photo */}
              <div className="flex justify-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="
                  w-36
                  h-36
                  rounded-2xl
                  object-cover
                  border-4
                  border-slate-100
                "
                />
              </div>

              {/* Member Details */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-blue-700 font-medium">
                  {member.role}
                </p>

                <div className="mt-5 space-y-3">
                  <InfoRow
                    label="Membership ID"
                    value={member.id}
                  />

                  <InfoRow
                    label="Chapter"
                    value={member.chapter}
                  />

                  <InfoRow
                    label="State"
                    value={member.state}
                  />

                  <InfoRow
                    label="Valid Till"
                    value={member.validTill}
                  />
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="mt-8 border-t pt-6">
              <div className="flex flex-col items-center">
                <div
                  className="
                  w-32
                  h-32
                  bg-slate-100
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                "
                >
                  <QrCode
                    size={80}
                    className="text-slate-600"
                  />
                </div>

                <p className="text-sm text-slate-500 mt-3">
                  Scan to verify membership
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-4 text-center text-sm text-slate-500">
            Official Digital Membership Card
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="
          flex items-center gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6 py-3
          rounded-xl
        "
        >
          <Download size={18} />
          Download Card
        </button>

        <button
          onClick={handlePrint}
          className="
          flex items-center gap-2
          border
          hover:bg-slate-100
          px-6 py-3
          rounded-xl
        "
        >
          <Printer size={18} />
          Print Card
        </button>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}