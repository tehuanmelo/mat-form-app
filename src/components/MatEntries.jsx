import MatEntry from "./MatEntry";
import { CirclePlus } from "lucide-react";

function MatEntries({ mats, addMatEntry, removeMat, addMat }) {
  return (
    <div className="card bg-white shadow-md border border-gray-300 text-gray-900 p-4 space-y-4">
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
        className="btn btn-dash btn-info py-6 text-xl border-2 w-full"
        onClick={() => addMatEntry()}
      >
        <CirclePlus />
        ADD MAT
      </button>
    </div>
  );
}

export default MatEntries;
