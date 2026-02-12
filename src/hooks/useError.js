import { useState } from "react";

function useError() {
  const [error, setError] = useState({})
  
  function validateForm(data, mats, areas) {
    const newErrors = {
      email: ""
    }
  
    
    if (!data.email.trim() || data.email.trim().length < 5 || !data.email.trim().includes("@") || !data.email.trim().includes(".") ) {
      newErrors.email = "Enter your email" ;
    }

    setError(newErrors)

    return Object.values(newErrors).some(Boolean);
  }
  
  return {error, validateForm}
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