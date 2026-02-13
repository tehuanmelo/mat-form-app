import { useState } from "react";

function useError() {
  const [error, setError] = useState(addError());

  function addError() {
    return {
      email: "",
      psName: "",
      base: "",
      mats: "",
      areas: "",
      pieces: {},
      sizes: {},
      duplicates: ""
    };
  }

  function validateForm(data, mats, areas) {
    const newError = addError();

    const hasDuplicatedMats = () => {
      const uniqueMats = new Set();
      for (const mat of mats) {
        const style = `${mat.style}:${mat.color}`;
        if (uniqueMats.has(style)) return true;
        uniqueMats.add(style);
      }
      console.log(uniqueMats);
      return false;
    };


    if (
      !data.email.trim() ||
      data.email.trim().length < 5 ||
      !data.email.trim().includes("@") ||
      !data.email.trim().includes(".")
    ) {
      newError.email = "invalid Email";
    }
    if (!data.psName) {
      newError.psName = "Enter your Ps and Name";
    }
    if (!data.base) {
      newError.base = "Enter your base";
    }
    if (mats.length === 0) {
      newError.mats = "Enter at least one mat";
    }
    if (areas.length === 0) {
      newError.areas = "Enter at least one area";
    }

    if (hasDuplicatedMats()) {
      newError.duplicates = "You have duplicated mats"
    }

    for (const mat of mats) {
      if (mat.pieces === 0) {
        newError.pieces[mat.id] = "Add at least one piece of mat";
      }
    }

    for (const area of areas) {
      if (area.sizeX === 0 || area.sizeY === 0) {
        newError.sizes[area.id] = "Size can not be 0";
      }
    }

    setError(newError);

    const hasErrorString = ["email", "psName", "base", "mats", "areas", "duplicates"].some(
      (k) => Boolean(newError[k]),
    );
    const hasErrorObject = ["pieces", "sizes"].some(
      (k) => Object.keys(newError[k]).length > 0,
    );

    return hasErrorString || hasErrorObject;
  }

  function cleanError(error) {
    if (error == "pieces" || error === "sizes") {
      setError((prev) => ({ ...prev, [error]: {} }));
    }
    setError((prev) => ({ ...prev, [error]: "" }));
  }

  return { error, validateForm, cleanError };
}

export default useError;
