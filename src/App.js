import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import "./global.css";

// Import pages and components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Selection from "./pages/selection/Selection";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import Eventuploader from "./pages/eventuploader";
import Signup from "./pages/signup/Signup";
import UserDetails from "./pages/home/Userdetails";
import Profile from "./pages/profile/profile";
import UserList from "./components/admin/UserList";
import StudentLoginForm from "./pages/details/student";
import AdminLoginForm from "./pages/details/admin";
import InstituteLoginForm from "./pages/details/InstituteLogin";
import PaymentPage from "./pages/payment/payment";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [selectedUser, setSelectedUser] = useState(null);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="user-details/:userId" element={<RequireAuth><UserDetails /></RequireAuth>} />
            <Route index element={<Home />} />
            <Route path="dashboard/:dashboardType/:userId" element={<RequireAuth><DashboardRouter /></RequireAuth>} />
            <Route path="selection" element={<RequireAuth><Selection /></RequireAuth>} />
            <Route path="details/student" element={<RequireAuth><StudentLoginForm /></RequireAuth>} />
            <Route path="details/admin" element={<RequireAuth><AdminLoginForm /></RequireAuth>} />
            <Route path="details/eventuploader" element={<RequireAuth><Eventuploader /></RequireAuth>} />
            <Route path="details/institute" element={<RequireAuth><InstituteLoginForm /></RequireAuth>} />
            <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="userlist" element={<RequireAuth><UserList /></RequireAuth>} />
            <Route path="admin-login" element={<AdminLoginForm />} />
            <Route path="payment" element={<RequireAuth><PaymentPage /></RequireAuth>} />  {/* New Payment Page route */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const DashboardRouter = () => {
  const { dashboardType } = useParams();

  switch (dashboardType) {
    case 'StudentDashboard':
      return <StudentDashboard />;
    
    default:
      return <Navigate to="/" />;
  }
};

export default App;
