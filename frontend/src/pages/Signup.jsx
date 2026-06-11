import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Signup() {
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
          />

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

          <Button>Create Account</Button>

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