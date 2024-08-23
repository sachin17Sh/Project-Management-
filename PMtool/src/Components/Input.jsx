import { forwardRef } from "react";
import React from "react";


const Input = forwardRef( function Input({ textarea, label, ...props }, ref) {
    const classes  ="w-full p-1 border-b-2 rounded-sm border-stone-400 bg-stone-200 text-stone-800 focus:outline-none focus-border-stone-600"
  return (
    <p className="flex flex-col my-3 gap-2">
      <label className="text-md  font-bold uppercase text-stone-950">{label}</label>
      {textarea  ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} />}
    </p>
  );
})
export default Input