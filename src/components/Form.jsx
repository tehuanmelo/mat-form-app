import { useState } from "react";
import { coaches, bases } from "../constants.js";
import useDataSubmit from "../hooks/useDataSubmit.js";
import toast from "react-hot-toast";

export default function Form() {
  const [form, setForm] = useState({
    psName: "",
    base: "",
  });

  const { submit, loading} = useDataSubmit();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await submit(form);
      setForm({ psName: "", base: "" });
      toast.success("Form submited.");
    } catch (error) {
        toast.error(error.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl w-full flex flex-col gap-4 p-4"
    >
      <div className="p-4 bg-white shadow-md rounded-xl text-gray-900 flex flex-col gap-4  border-gray-200">
        <select
          name="psName"
          value={form.psName}
          onChange={handleChange}
          className="select select-bordered w-full bg-white rounded-md border border-gray-200"
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

        <select
          name="base"
          value={form.base}
          onChange={handleChange}
          className="select select-bordered w-full bg-white rounded-md border border-gray-200"
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

      <button className="btn btn-primary bg-sky-500 border-none">
        {loading ? <span className="loading loading-spinner" /> : "Send"}
      </button>
    </form>
  );
}
