import { useState } from "react";
import useDataSubmit from "../hooks/useDataSubmit.js";
import toast from "react-hot-toast";
import MatEntry from "./MatEntry.jsx";
import SenderCard from "./SenderCard.jsx";
import MatEntries from "./MatEntries.jsx";
import PreviewCard from "./PreviewCard.jsx";
import { Send } from "lucide-react";
import TrainingAreas from "./TrainingAreas.jsx";
import useArea from "../hooks/useArea.js";
import useMat from "../hooks/useMat.js";
import useError from "../hooks/useError.js";

export default function Form() {
  const [data, setData] = useState({
    email: "",
    psName: "",
    base: "",
  });

  const { newMat, mats, removeMat, addMat, addMatEntry } = useMat();
  const { newArea, areas, removeArea, addArea, addAreaEntry } = useArea();
  const { error, validateForm } = useError()

  const { submit, loading } = useDataSubmit();

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    try {
      const hasError = validateForm(data, mats, areas);
      if (hasError) return
      const payload = {
        ...data,
        mats: [...mats],
        areas: [...areas],
      };
      console.log(payload);
      // await submit(payload);
      // setData({ psName: "", base: "", email: "" });
      // setMats([newMat()]);
      toast.success("Form submited.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full flex flex-col gap-4 p-4"
      >
        <SenderCard onChange={handleChange} data={data} error={error} />

        <MatEntries
          mats={mats}
          addMatEntry={addMatEntry}
          newMat={newMat}
          removeMat={removeMat}
          addMat={addMat}
        />

        <TrainingAreas
          areas={areas}
          addAreaEntry={addAreaEntry}
          newArea={newArea}
          removeArea={removeArea}
          addArea={addArea}
        />

        <PreviewCard data={data} mats={mats} areas={areas} />
        <button
          type="submit"
          className="py-6 btn btn-primary bg-sky-500 border-none text-lg w-full"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            <span className="flex items-center gap-1">
              <Send />
              Submit
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
