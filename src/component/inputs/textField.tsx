import { Field, useField } from "formik";
import React from "react";
import { props } from "./type";

const TextField = ({ label, ...props }: props) => {
  const [field, meta] = useField(props);
  return (
    <label className=" text-primary relative">
      <p className=" absolute top-[-16px] right-6 bg-white px-2">{label}</p>
      <input
        dir="rtl"
        {...field}
        {...props}
        className=" border-2  rounded-xl p-2 md:min-w-[500px] sm:min-w-[300px]"
      />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </label>
  );
};

export default TextField;
