import { useEffect, useRef } from "react";
import { coaches, bases } from "../constants.js";

function SenderCard({ onChange, data, error }) {

  const emailRef = useRef(null)

  useEffect(() => {
    if (error.email) {
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [error])

  return (
    <div className="p-5 bg-white shadow-md rounded-md border border-gray-300 text-gray-900 flex flex-col gap-4">
      <div>
        <p className="mb-3 font-semibold text-sm">Email <span className="text-red-500">*</span></p>
        <input
          className={`input w-full rounded-md bg-gray-100 border border-gray-200 ${error.email ? "bg-red-300 border border-red-500" : ""}`}
          placeholder="example@email.com"
          type="text"
          name="email"
          value={data.email}
          onChange={onChange}
          ref={emailRef}
        />
      </div>

      <div>
        <p className="mb-3 font-semibold text-sm">
          Ps Name <span className="text-red-500">*</span>
        </p>
        <select
          name="psName"
          value={data.psName}
          onChange={onChange}
          className={`select select-bordered w-full bg-gray-100 rounded-md border border-gray-200`}
        >
          <option value="" disabled={true}>
            -- Select your PS --
          </option>
          {coaches.map((coach) => (
            <option key={coach.code} value={`${coach.code} ${coach.name}`}>
              {coach.code} {coach.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="mb-3 font-semibold text-sm">
          Base <span className="text-red-500">*</span>
        </p>
        <select
          name="base"
          value={data.base}
          onChange={onChange}
          className={`select select-bordered w-full bg-gray-100 rounded-md border border-gray-200`}
        >
          <option value="" disabled={true}>
            -- Select your Base --
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
