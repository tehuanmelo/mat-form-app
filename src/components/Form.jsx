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

export default function Form() {
  const [data, setData] = useState({
    email: "",
    psName: "",
    base: "",
  });

  const { newMat, mats, removeMat, addMat, addMatEntry } = useMat();
  const { newArea, areas, removeArea, addArea, addAreaEntry } = useArea();

  const { submit, loading } = useDataSubmit();

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  //   VALIDDATIONS **********
  function validateForm() {
    function hasDuplicates(arr) {
      const duplicates = new Set();
      for (const { style, color } of arr) {
        const key = `${style}:${color}`;
        if (duplicates.has(key)) return true;
        duplicates.add(key);
      }
      return false;
    }

    if (!data.psName) return "Enter Ps and Name";
    if (!data.base) return "Enter Base";
    if (!mats.length) return "Enter at least one mat";
    for (const mat of mats) {
      if (mat.pieces <= 0) return "You have mat pieces as 0";
    }
    if (hasDuplicates(mats)) return "You have duplicated mats";
    if (!areas.length) return "Enter at least one area";
    for (const area of areas) {
      if (area.sizeX <= 0 || area.sizeY <= 0) return "Area Size cant be 0";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    try {
      const error = validateForm();
      if (error) throw new Error(error);
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
        <SenderCard onChange={handleChange} data={data} />

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
