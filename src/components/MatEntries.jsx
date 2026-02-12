import { useEffect, useRef } from "react";
import MatEntry from "./MatEntry";
import { CirclePlus } from "lucide-react";
import ErrorAlert from "./ErrorAlert";

function MatEntries({
  mats,
  addMatEntry,
  removeMat,
  addMat,
  error,
  cleanError,
}) {
  const matsRef = useRef(null);

  useEffect(() => {
    if (error.mats) {
      matsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [error]);

  return (
    <div
      className={`card bg-white shadow-md border border-gray-300 text-gray-900 p-4 space-y-4`}
      ref={matsRef}
    >
      {mats.map((mat, idx) => (
        <MatEntry
          key={mat.id}
          index={idx + 1}
          onRemove={removeMat}
          onChange={addMat}
          entry={mat}
          error={error}
          cleanError={cleanError}
        />
      ))}

      <button
        type="button"
        className="btn btn-dash btn-info py-6 text-xl border-2 w-full"
        onClick={() => {
          addMatEntry();
          cleanError();
        }}
      >
        <CirclePlus />
        ADD MAT
      </button>
      {error.mats && <ErrorAlert msg={error.mats} />}
    </div>
  );
}

export default MatEntries;
