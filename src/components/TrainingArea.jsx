import { Grid3x2, Trash2 } from "lucide-react";

function TrainingArea({area, idx, onChange, removeArea}) {
    return (
        <div className="space-y-4 border border-gray-300 rounded-lg p-4">
            {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sky-600">
            <Grid3x2 />
            <h2 className="text-xl font-bold">Training Area #{idx + 1}</h2>
          </div>
          <button
            type="button"
            className="btn btn-ghost btn-error text-red-600"
            onClick={() => removeArea(area.id)}
          >
            <Trash2 />
          </button>
        </div>

        <div className="grid grid-cols-[3fr_1fr_3fr] items-center mb-2">
            
            <div className="">
                <p className="font-bold mb-2">Size X</p>
                <div className="join w-full">
                    <button type="button" className="btn join-item" onClick={() => onChange(area.id, { sizeX: Math.max(0,area.sizeX - 1)})}>-</button>
                    <div className="join-item flex flex-1 items-center justify-center bg-gray-100 font-semibold">{`${area.sizeX} m`}</div>
                    <button type="button" className="btn join-item" onClick={() => onChange(area.id, { sizeX: Math.max(0,area.sizeX + 1)})}>+</button>
                </div>
            </div>

            <div className="justify-self-center self-end p-2 text-lg font-bold">X</div>

            <div className="">
                <p className="font-bold mb-2">Size Y</p>
                <div className="join w-full">
                    <button type="button" className="btn join-item" onClick={() => onChange(area.id, { sizeY: Math.max(0,area.sizeY - 1)})}>-</button>
                    <div className="join-item flex flex-1 items-center justify-center bg-gray-100 font-semibold">{`${area.sizeY} m`}</div>
                    <button type="button" className="btn join-item" onClick={() => onChange(area.id, { sizeY: Math.max(0,area.sizeY + 1)})}>+</button>
                </div>
            </div>

        </div>

        </div>
    );
}

export default TrainingArea;