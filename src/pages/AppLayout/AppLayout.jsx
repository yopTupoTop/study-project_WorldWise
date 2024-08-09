import Sidebar from "../../components/Sidebar/Sidebar";
import Map from "../../components/Map/Map";
import User from "../../components/User/User";
import styles from "./AppLayout.module.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function AppLayout() {
  return (
    <ProtectedRoute>
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    </ProtectedRoute>
  );
}
