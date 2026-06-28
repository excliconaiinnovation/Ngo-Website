import { useState } from "react";
import {
  Image,
  Video,
  Upload,
  Search,
  Trash2,
  Edit,
  FolderPlus,
  Images,
} from "lucide-react";

export default function GalleryManagement() {
  const [search, setSearch] = useState("");

  const galleryItems = [
    {
      id: 1,
      title: "Tree Plantation Drive",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      type: "Image",
    },
    {
      id: 2,
      title: "Training Workshop",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      type: "Image",
    },
    {
      id: 3,
      title: "Medical Camp",
      category: "Health",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      type: "Video",
    },
  ];

  const filteredItems = galleryItems.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Gallery Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage photos, videos and albums.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">
            <FolderPlus size={18} />
            Create Album
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">
            <Upload size={18} />
            Upload Media
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Images"
          value="1,250"
          icon={Images}
          color="bg-blue-500"
        />

        <StatCard
          title="Total Videos"
          value="150"
          icon={Video}
          color="bg-red-500"
        />

        <StatCard
          title="Albums"
          value="45"
          icon={FolderPlus}
          color="bg-green-500"
        />

        <StatCard
          title="Featured Media"
          value="20"
          icon={Image}
          color="bg-purple-500"
        />
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border p-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-3.5 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search gallery..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              border
              rounded-xl
              pl-10
              pr-4
              py-3
            "
          />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              border
              hover:shadow-xl
              transition
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-52
                object-cover
              "
            />

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span
                  className="
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    bg-green-100
                    text-green-700
                  "
                >
                  {item.category}
                </span>

                <span className="text-xs text-gray-500">
                  {item.type}
                </span>
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <div className="flex gap-2 mt-4">
                <button
                  className="
                    flex-1
                    bg-blue-600
                    text-white
                    py-2
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <Edit size={16} />
                  Edit
                </button>

                <button
                  className="
                    flex-1
                    bg-red-600
                    text-white
                    py-2
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`${color} w-14 h-14 rounded-xl flex items-center justify-center`}
        >
          <Icon
            size={26}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
}