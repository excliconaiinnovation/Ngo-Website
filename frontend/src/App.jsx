
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts (keep layouts eagerly loaded)
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import MemberLayout from "./layouts/MemberLayout";
import GalleryManagement from "./pages/admin/GalleryManagement";

// ======================
// Website Pages
// ======================
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProgramsPage = lazy(() => import("./pages/ProgramsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const JoinNow = lazy(() => import("./pages/JoinNow"));
const LoginPage = lazy(() => import("./pages/auth/Login"));
const UnitsPage = lazy(() => import("./pages/unitpage"));

// ======================
// Admin Pages
// ======================
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));
const RoleManagement = lazy(() => import("./pages/admin/RoleManagement"));
const MembershipManagement = lazy(() =>
  import("./pages/admin/MembershipManagement")
);
const VolunteerManagement = lazy(() =>
  import("./pages/admin/VolunteerManagement")
);
const EventManagement = lazy(() =>
  import("./pages/admin/EventManagement")
);
const TrainingManagement = lazy(() =>
  import("./pages/admin/TrainingManagement")
);
const CertificateManagement = lazy(() =>
  import("./pages/admin/CertificateManagement")
);
const NoticeManagement = lazy(() =>
  import("./pages/admin/NoticeManagement")
);
const NewsManagement = lazy(() =>
  import("./pages/admin/NewsManagement")
);
const ReportsAnalytics = lazy(() =>
  import("./pages/admin/ReportsAnalytics")
);
const SystemSettings = lazy(() =>
  import("./pages/admin/SystemSettings")
);

// ======================
// Member Pages
// ======================
const MemberDashboard = lazy(() =>
  import("./pages/member/MemberDashboard")
);
const MyProfile = lazy(() =>
  import("./pages/member/MyProfile")
);
const DigitalIdCard = lazy(() =>
  import("./pages/member/DigitalIdCard")
);
const MembershipRenewal = lazy(() =>
  import("./pages/member/MembershipRenewal")
);
const EventRegistration = lazy(() =>
  import("./pages/member/EventRegistration")
);
const Certificates = lazy(() =>
  import("./pages/member/Certificates")
);
const ActivityHistory = lazy(() =>
  import("./pages/member/ActivityHistory")
);

// ======================
// Forms
// ======================
const AddUser = lazy(() =>
  import("./components/Forms/AddUser")
);
const AddRole = lazy(() =>
  import("./components/Forms/AddRole")
);
const AddMembership = lazy(() =>
  import("./components/Forms/AddMembership")
);
const AddVolunteer = lazy(() =>
  import("./components/Forms/AddVolunteer")
);
const CreateEvent = lazy(() =>
  import("./components/Forms/CreateEvent")
);
const AddTraining = lazy(() =>
  import("./components/Forms/AddTraining")
);
const AddNotice = lazy(() =>
  import("./components/Forms/AddNotice")
);
const AddNews = lazy(() =>
  import("./components/Forms/AddNews")
);

// ======================
// Loader
// ======================
function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ====================== */}
        {/* Website Routes */}
        {/* ====================== */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="join_now" element={<JoinNow />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="unit" element={<UnitsPage />} />
        </Route>

        {/* ====================== */}
        {/* Admin Routes */}
        {/* ====================== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="users" element={<UserManagement />} />
          <Route path="roles" element={<RoleManagement />} />
          <Route path="memberships" element={<MembershipManagement />} />
          <Route path="volunteers" element={<VolunteerManagement />} />
          <Route path="events" element={<EventManagement />} />
          <Route path="training" element={<TrainingManagement />} />
          <Route path="certificates" element={<CertificateManagement />} />
          <Route path="notices" element={<NoticeManagement />} />
          <Route path="news" element={<NewsManagement />} />
          <Route path="reports" element={<ReportsAnalytics />} />
          <Route path="settings" element={<SystemSettings />} />
          <Route path="gallery" element={<GalleryManagement />} />

          {/* Forms */}
          <Route path="users/add" element={<AddUser />} />
          <Route path="roles/add" element={<AddRole />} />
          <Route path="memberships/add" element={<AddMembership />} />
          <Route path="volunteers/add" element={<AddVolunteer />} />
          <Route path="events/create" element={<CreateEvent />} />
          <Route path="training/add" element={<AddTraining />} />
          <Route path="notices/add" element={<AddNotice />} />
          <Route path="news/add" element={<AddNews />} />
        </Route>

        {/* ====================== */}
        {/* Member Routes */}
        {/* ====================== */}
        <Route path="/member" element={<MemberLayout />}>
          <Route index element={<MemberDashboard />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="id-card" element={<DigitalIdCard />} />
          <Route path="renewal" element={<MembershipRenewal />} />
          <Route path="events" element={<EventRegistration />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="history" element={<ActivityHistory />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

