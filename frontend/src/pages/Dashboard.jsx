import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/login");
      }
    }

    checkUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <>
      <Navbar onLogout={handleLogout} />

      <div className="p-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4 text-green-600">
          {message}
        </p>

      </div>
    </>
  );
}

export default Dashboard;