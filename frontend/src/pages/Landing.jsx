import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex flex-col items-center justify-center">

        <h1 className="text-6xl font-bold">
          CompanyBrain AI
        </h1>

        <p className="mt-4 text-xl">
          Enterprise Knowledge Operating System
        </p>

        <p className="mt-2 text-gray-600">
          Centralize knowledge. Empower teams. Find answers instantly.
        </p>

        <div className="flex gap-4 mt-8">
          <Link to="/login">
            <Button>Login</Button>
          </Link>

          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;