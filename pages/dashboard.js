import useAuth from "../hooks/useAuth";
import user from "./api/user";

const Dashboard = () => {
  const { user, loading } = useAuth(0);
  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? "Loading info..." : user.email}
    </div>
  );
};

export default Dashboard;
