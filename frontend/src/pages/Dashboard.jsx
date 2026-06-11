import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <>
      <Navbar />

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