import { useState } from "react";

function useDataSubmit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function submit(payload) {
    // const body = new URLSearchParams({
    //   psName,
    //   base,
    // });

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const res = await fetch(import.meta.env.VITE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!json.ok) throw new Error(json.error || "Server returned error.");

      setSuccess(true);
      return json;
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading, error, success };
}

export default useDataSubmit;
