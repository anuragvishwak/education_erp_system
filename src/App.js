import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import ParentDashboard from "./Parent/ParentDashboard";
import TransportManagerDashboard from "./Transport Manager/TransportManagerDashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import AdminDashboard from "./Admin/AdminDashboard";
import PrincipalDashboard from "./Principal/PrincipalDashboard";
import LibrarianDashboard from "./Librarian/LibrarianDashboard";
import AccountantDashboard from "./Accountant/AccountantDashboard";
import AdminStudentManagement from "./Admin/AdminStudentManagement";
import AdminStaffManagement from "./Admin/AdminStaffManagement";
import AdminAttendance from "./Admin/AdminAttendance";
import AdminFessFinance from "./Admin/AdminFessFinance";
import AdminTransportManager from "./Admin/AdminTransportManager";
import AdminLibraryManagement from "./Admin/AdminLibraryManagement";
import AdminInventory from "./Admin/AdminInventory";
import AdminAcademics from "./Admin/AdminAcademics";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
          <Route path="/ParentDashboard" element={<ParentDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/PrincipalDashboard" element={<PrincipalDashboard />} />
          <Route path="/LibrarianDashboard" element={<LibrarianDashboard />} />
          <Route
            path="/AccountantDashboard"
            element={<AccountantDashboard />}
          />
          <Route
            path="/TransportManagerDashboard"
            element={<TransportManagerDashboard />}
          />

          <Route
            path="/AdminStudentManagement"
            element={<AdminStudentManagement />}
          />
          <Route
            path="/AdminStaffManagement"
            element={<AdminStaffManagement />}
          />

          <Route
            path="/AdminAcademics"
            element={<AdminAcademics />}
          />
          <Route path="/AdminAttendance" element={<AdminAttendance />} />
          <Route path="/AdminFessFinance" element={<AdminFessFinance />} />
          <Route
            path="/AdminTransportManager"
            element={<AdminTransportManager />}
          />
          <Route
            path="/AdminLibraryManagement"
            element={<AdminLibraryManagement />}
          />
          <Route path="/AdminInventory" element={<AdminInventory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
