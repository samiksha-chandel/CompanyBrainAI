import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";

function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("personal");
  
  useEffect(() => {
    async function fetchDocuments() {
      const { data, error } = await supabase
        .from("knowledge_items")
        .select("*");
      
      if (error) {
        console.error(error);
        return;
      }

      setDocuments(data);
    }

    fetchDocuments();
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

  async function handleCreateDocument() {
    console.log("BUTTON CLICKED");
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("knowledge_items")
      .insert([
        {
          pid: `DOC-${Date.now()}`,
          title,
          content,
          knowledge_type: type,
          owner_user_id: user.id,
          created_by: user.id,
          is_deleted: false,
        },
      ]);

    if (error) {
      console.error(error);
      return;
    }

    window.location.reload();
  }

  return (
    <>
      <Navbar onLogout={handleLogout} />

      <div className="p-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <div className="mb-8 border rounded p-4">

        <h2 className="text-2xl font-semibold mb-4"> Create Document </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded mb-3"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded mb-3"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 border rounded mb-3"
        >
          <option value="personal">Personal</option>
          <option value="team">Team</option>
          <option value="department">Department</option>
        </select>

        <button
          onClick={handleCreateDocument}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Create Document
        </button>

        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4"> Documents </h2>

          {documents.map((doc) => (
            <div key={doc.id} className="border rounded p-4 mb-4">
            <h3 className="text-xl font-bold"> {doc.title} </h3>

            <p className="text-gray-600"> Type: {doc.knowledge_type} </p>

            <p className="mt-2"> {doc.content} </p>
        </div>
      ))}

    </div>

      </div>
    </>
  );
}

export default Dashboard;