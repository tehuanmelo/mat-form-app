import MatEntry from "./MatEntry";
import { CirclePlus } from "lucide-react";

function MatEntries({ mats, setMats, newMat, removeMat, addMat }) {
  return (
    <>
      {mats.map((mat, idx) => (
        <MatEntry
          key={mat.id}
          index={idx + 1}
          onRemove={removeMat}
          onChange={addMat}
          entry={mat}
        />
      ))}
      <button
        type="button"
        className="btn btn-dash btn-info py-6 text-xl border-2"
        onClick={() => setMats((prev) => [...prev, newMat()])}
      >
        <CirclePlus />
        ADD MAT
      </button>
    </>
  );
}

export default MatEntries;
