function calcMatM2(mat) {
  const factor = mat.style === "plate" ? 2 : 12;
  return mat.pieces * factor;
}

export default function PreviewCard({ data, mats }) {
  const show = data.psName && data.base && mats.length > 0;

  const totalM2 = mats.reduce((sum, m) => sum + calcMatM2(m), 0);

  if (!show) return null;

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-sky-500">Preview</h3>
        <span className="badge badge-success">Ready</span>
      </div>

      {/* Sender */}
      <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-4 text-black">
        <div className="text-sm"><span className="font-semibold">PS:</span> {data.psName}</div>
        <div className="text-sm"><span className="font-semibold">Base:</span> {data.base}</div>
        <div className="text-sm"><span className="font-semibold">Email:</span> {data.email}</div>
      </div>

      {/* Mats */}
      <div className="space-y-2">
        {mats.map((m, idx) => (
          <div key={m.id} className="flex items-center justify-between border border-gray-200 rounded-md p-3">
            <div className="text-sm">
              <div className="font-semibold text-sky-500">Mat #{idx + 1}</div>
              <div className="opacity-70 text-black">
                {m.style} • {m.color} • {m.pieces} pcs
              </div>
            </div>

            <div className="text-sm font-bold">{calcMatM2(m)} m²</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-black">
        <div className="text-sm opacity-70">{mats.length} mat(s)</div>
        <div className="text-lg font-bold">Total: {totalM2} m²</div>
      </div>
    </div>
  );
}