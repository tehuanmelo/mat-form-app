
const COLORS = [
  { key: "blue", class: "bg-blue-500" },
  { key: "red", class: "bg-red-500" },
  { key: "green", class: "bg-green-500" },
  { key: "gray", class: "bg-gray-400" },
];

function MatEntry({ index = 1, onRemove, onChange, entry }) {
  // states locais do card
  const style = entry.style;
  const color = entry.color;
  const pieces = entry.pieces;

  // exemplo simples de cálculo
  
  function calcultateSize() {
    const size = style == "plate" ? 2 : 12;
    const totalM2 = pieces * size; // só pra visual agora
    return totalM2;
  }

  return (
    <div className="card bg-white shadow-md border border-gray-300 text-gray-900">
      <div className="card-body space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sky-600">
            <span className="text-2xl">⬢</span>
            <h2 className="text-xl font-bold">Mat Entry #{index}</h2>
          </div>

          <button
            type="button"
            className="btn btn-ghost btn-square text-error"
            onClick={() => onRemove(entry.id)}
          >
            🗑️
          </button>
        </div>

        {/* STYLE OF MAT */}
        <div>
          <p className="text-md font-bold mb-3">Style of Mat</p>

          <div className="join w-full bg-gray-100 rounded-xl p-1">
            <button
              type="button"
              className={`btn join-item w-1/2 ${
                style === "plate" ? "bg-white text-black" : "btn-ghost"
              }`}
              onClick={() => onChange(entry.id, { style: "plate" })}
            >
              Plates
            </button>

            <button
              type="button"
              className={`btn join-item w-1/2 ${
                style === "roll" ? "bg-white text-black" : "btn-ghost"
              }`}
              onClick={() => onChange(entry.id, { style: "roll" })}
            >
              Rolls
            </button>
          </div>
        </div>

        {/* COLOR SELECTION */}
        <div>
          <p className="text-md font-bold mb-3">Color Selection</p>

          <div className="flex gap-4">
            {COLORS.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => onChange(entry.id, { color: c.key })}
                className={`w-10 h-10 rounded-full border-4 ${c.class}
                  ${color === c.key ? "border-black" : "border-transparent"}
                `}
              />
            ))}
          </div>
        </div>

        {/* PIECES + TOTAL */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-md font-bold mb-2">Pieces</p>

            <div className="join w-full">
              <button
                type="button"
                className="btn join-item"
                onClick={() =>
                  onChange(entry.id, {
                    pieces: (Math.max(0, pieces - 1)),
                  })
                }
              >
                −
              </button>

              <div className="join-item flex-1 flex items-center justify-center bg-gray-100 font-bold">
                {pieces}
              </div>

              <button
                type="button"
                className="btn join-item"
                onClick={() =>
                  onChange(entry.id, {
                    pieces: pieces + 1,
                  })
                }
              >
                +
              </button>
            </div>
          </div>

          <div>
            <p className="text-md font-bold mb-2">Total m²</p>

            <label className="bg-gray-100 input input-bordered flex items-center gap-2">
              <input value={calcultateSize()} readOnly className="grow bg-transparent" />
              <span className="opacity-60">m²</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatEntry;
