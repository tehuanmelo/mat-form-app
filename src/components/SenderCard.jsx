import { coaches, bases } from "../constants.js";

function SenderCard({ onChange, data }) {
  return (
    <div className="p-5 bg-white shadow-md rounded-md border border-gray-300 text-gray-900 flex flex-col gap-4">
      <div>
        <p className="mb-3 font-semibold text-sm">Ps Name</p>
        <select
          name="psName"
          value={data.psName}
          onChange={onChange}
          className="select select-bordered w-full bg-gray-100 rounded-md border border-gray-200"
        >
          <option value="" disabled={true}>
            PS NUMBER
          </option>
          {coaches.map((coach) => (
            <option key={coach.code} value={`${coach.code} ${coach.name}`}>
              {coach.code} {coach.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="mb-3 font-semibold text-sm">Base</p>
        <select
          name="base"
          value={data.base}
          onChange={onChange}
          className="select select-bordered w-full bg-gray-100 rounded-md border border-gray-200"
        >
          <option value="" disabled={true}>
            BASE
          </option>
          {bases.map((base) => (
            <option key={base} value={base}>
              {base}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SenderCard;
