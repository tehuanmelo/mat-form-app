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
    }
  }

  function validateForm(data, mats, areas) {

    const newError = addError()

    if (
      !data.email.trim() ||
      data.email.trim().length < 5 ||
      !data.email.trim().includes("@") ||
      !data.email.trim().includes(".")
    ) {
      newError.email = "invalid Email"
    } 
    if (!data.psName) {
      newError.psName = "Enter your Ps and Name"
    } 
    if (!data.base) {
      newError.base = "Enter your base"
    } 
    if (mats.length === 0) {
      newError.mats = "Enter at least one mat"
    }
    if (areas.length === 0) {
      newError.areas = "Enter at least one area"
    }

    for (const mat of mats) {
      if (mat.pieces === 0) {
        newError.pieces[mat.id] = "Add at least one piece of mat"
      }
    }

    setError(newError)

    const hasErrorString = ["email", "psName", "base", "mats", "areas"].some(k => Boolean(newError[k]))
    const hasErrorObject = ["pieces"].some(k => Object.keys(newError[k]).length > 0)

    return hasErrorString || hasErrorObject
  }

  function cleanError(error) {
    if (error == "pieces") {
      setError(prev => ({...prev, [error]: {}}));

    }
    setError(prev => ({...prev, [error]: ""}));
  }

  return { error, validateForm, cleanError };
}

export default useError;

// function hasDuplicates(arr) {
//   const duplicates = new Set();
//   for (const { style, color } of arr) {
//     const key = `${style}:${color}`;
//     if (duplicates.has(key)) return true;
//     duplicates.add(key);
//   }
//   return false;
// }

// if (!data.psName) {
//   setError({ error: "psName", message: "Enter Ps and Name" });
//   return
// }
// if (!data.base) {
//   setError({ error: "base", message: "Enter your Base" });
//   return
// }
// if (!mats.length) {
//   setError({ error: "matLength", message: "Enter at least onde mat" });
//   return
// }
// for (const mat of mats) {
//   if (mat.pieces <= 0) {
//     setError({ error: "pieces", id: mat.id, message: "Pieces cant be 0" });
//     return
//   }
// }
// if (hasDuplicates(mats)) {
//   {
//     setError({ error: "duplicate", message: "You have duplicated mats" });
//     return
//   }
// }
// if (!areas.length) {
//   setError({ error: "areaLength", message: "Enter at Least one area" });
//   return
// }
// for (const area of areas) {
//   if (area.sizeX <= 0) {
//     setError({ id: area.id, error: "sizeX", message: "Size cant be zero" });
//     return;
//   }
//   if (area.sizeY <= 0) {
//     setError({ id: area.id, error: "sizeY", message: "Size cant be zero" });
//     return;
//   }
// }
