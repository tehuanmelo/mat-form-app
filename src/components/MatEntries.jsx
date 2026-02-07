import MatEntry from "./MatEntry";
import { CirclePlus } from "lucide-react";

function MatEntries({ mats, addMatEntry, removeMat, addMat }) {
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
        onClick={() => addMatEntry()}
      >
        <CirclePlus />
        ADD MAT
      </button>
    </>
  );
}

export default MatEntries;
