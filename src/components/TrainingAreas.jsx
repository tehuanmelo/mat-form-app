import { CirclePlus } from "lucide-react";
import TrainingArea from "./TrainingArea";
import ErrorAlert from "./ErrorAlert";

function TrainingAreas({areas, addArea, removeArea, error, cleanError, addAreaEntry}) {
  return (
    <div className="card bg-white shadow-md border border-gray-300 text-gray-900 p-4 space-y-4">
      {areas.map((area, idx) => (
        <TrainingArea key={area.id} area={area} idx={idx} onChange={addArea} removeArea={removeArea} />
      ))}

      <button
        type="button"
        className="btn btn-dash btn-info py-6 text-xl border-2 w-full"
        onClick={() => {
          addAreaEntry()
          cleanError()
        }}
      >
        <CirclePlus />
        ADD AREA
      </button>
      {error.areas && <ErrorAlert msg={error.areas} />}
    </div>
  );
}

export default TrainingAreas;
