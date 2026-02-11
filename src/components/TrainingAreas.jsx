import { CirclePlus } from "lucide-react";
import TrainingArea from "./TrainingArea";

function TrainingAreas(props) {
  return (
    <div className="card bg-white shadow-md border border-gray-300 text-gray-900 p-4 space-y-4">
      {props.areas.map((area, idx) => (
        <TrainingArea key={area.id} area={area} idx={idx} onChange={props.addArea} removeArea={props.removeArea} />
      ))}

      <button
        type="button"
        className="btn btn-dash btn-info py-6 text-xl border-2 w-full"
        onClick={props.addAreaEntry}
      >
        <CirclePlus />
        ADD AREA
      </button>
    </div>
  );
}

export default TrainingAreas;
