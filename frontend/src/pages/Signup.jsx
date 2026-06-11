import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  async function handleSignup() {
    const { data, error } = await supabase.auth.signUp({
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
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            onClick={handleSignup}
            className="px-6 py-3 rounded-lg bg-black text-white"
          >
            Create Account
          </button>

          <p className="text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Signup;