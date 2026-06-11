import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Login() {
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
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
          />

          <Button>Login</Button>

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