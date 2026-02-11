import { useState } from "react";

function useMat() {
  const newMat = () => {
    return {
      id: crypto.randomUUID(),
      style: "plate",
      color: "blue",
      pieces: 1,
    };
  };
  const [mats, setMats] = useState([newMat()]);

  function removeMat(id) {
    setMats((prev) => prev.filter((item) => item.id !== id));
  }

  function addMat(id, patch) {
    setMats((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  }

  function addMatEntry() {
    setMats((prev) => [...prev, newMat()]);
  }

  return {newMat, mats, removeMat, addMat, addMatEntry}
}

export default useMat;
