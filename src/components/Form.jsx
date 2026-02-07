import { useState } from "react";
import { coaches, bases } from "../constants.js";
import useDataSubmit from "../hooks/useDataSubmit.js";
import toast from "react-hot-toast";
import MatEntry from "./MatEntry.jsx";
import SenderCard from "./SenderCard.jsx";
import MatEntries from "./MatEntries.jsx";
import PreviewCard from "./PreviewCard.jsx";
import { Send } from "lucide-react";

export default function Form() {
  const [data, setData] = useState({
    email: "",
    psName: "",
    base: "",
  });

  const { submit, loading } = useDataSubmit();

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value}));
  }

  // ***************  HANDLE MAT FUNCTIONS *****************
  // ***********************************************

  const newMat = () => {
    return {
      id: crypto.randomUUID(),
      style: "plate",
      color: "blue",
      pieces: 1,
    };
  };
  const [mats, setMats] = useState([]);

  function removeMat(id) {
    setMats((prev) => prev.filter((item) => item.id !== id));
  }

  function addMat(id, patch) {
    setMats((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  }

  function addMatEntry() {
    setMats(prev => [...prev, newMat()])
  }

  // ***********************************************
  // ***********************************************

//   VALIDDATIONS **********
function validateForm() {
    if (!data.psName) return "Enter Ps and Name"
    if (!data.base) return "Enter Base"
    if (!mats.length) return "Enter at least one mat"
    for (const mat of mats) {
        if (mat.pieces <= 0) return "Enter at least one piece of mat"
    }
}

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const error = validateForm()
        if (error) throw new Error(error)
            const payload = {
        ...data,
        mats: [...mats]
    }
      await submit(payload);
      setData({ psName: "", base: "", email: ""});
      setMats([])
      toast.success("Form submited.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="sticky top-0 z-50 bg-white text-black p-5 shadow-md flex justify-center items-center text-2xl font-semibold w-full">
        Mat Information
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full flex flex-col gap-4 p-4"
      >
        <SenderCard onChange={handleChange} data={data} />

        <MatEntries
          mats={mats}
          addMatEntry={addMatEntry}
          newMat={newMat}
          removeMat={removeMat}
          addMat={addMat}
        />

        <PreviewCard data={data} mats={mats} />

        <button className="py-6 btn btn-primary bg-sky-500 border-none text-lg">
          {loading ? <span className="loading loading-spinner" /> : <span className="flex items-center gap-1"><Send />Submit</span>}
        </button>
      </form>
    </div>
  );
}
