import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  async function handleLogin() {
    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/dashboard");
    console.log(data);
}

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center pt-24">
        <div className="w-96 space-y-4">

          <h2 className="text-3xl font-bold">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="px-6 py-3 rounded-lg bg-black text-white"
          >
            Login
          </button>

          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;