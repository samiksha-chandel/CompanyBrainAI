import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2">
          Welcome to CompanyBrain AI
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="border p-6 rounded-lg">
            Upload Documents
          </div>

          <div className="border p-6 rounded-lg">
            My Notes
          </div>

          <div className="border p-6 rounded-lg">
            Team Notes
          </div>

          <div className="border p-6 rounded-lg">
            Ask Atlas
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;