import { useState } from "react";

function useArea() {
  const newArea = () => {
    return {
      id: crypto.randomUUID(),
      sizeX: 1,
      sizeY: 1,
    };
  };
  const [areas, setAreas] = useState([newArea()]);

  function removeArea(id) {
    setAreas((prev) => prev.filter((item) => item.id !== id));
  }

  function addArea(id, patch) {
    setAreas((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  }

  function addAreaEntry() {
    setAreas((prev) => [...prev, newArea()]);
  }

  function cleanAreaForm() {
    setAreas([newArea()])
  }

  return { areas, removeArea, addArea, addAreaEntry, cleanAreaForm}
}

export default useArea;
