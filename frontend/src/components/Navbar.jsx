function Navbar({ onLogout }) {
  return (
    <nav className="w-full p-4 border-b flex justify-between items-center">

      <h1 className="text-xl font-bold">
        CompanyBrain AI
      </h1>

      {onLogout && (
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Logout
        </button>
      )}

    </nav>
  );
}

export default Navbar;