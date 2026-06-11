function Button({ children }) {
  return (
    <button
      className="px-6 py-3 rounded-lg bg-black text-white hover:opacity-90"
    >
      {children}
    </button>
  );
}

export default Button;